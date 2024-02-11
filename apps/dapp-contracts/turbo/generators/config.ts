import path from 'path';
import fs from 'fs';
import type { PlopTypes } from '@turbo/gen';

function cleanFileName(input: string) {
	const split = input.split('/');

	const basenamesOnly = split.map(name => path.basename(name).split('.')[0]);

	const withoutDuplicates = basenamesOnly.reduce<string[]>(function(acc, name) {
		if (!acc.includes(name)) {
			acc.push(name);
		}

		return(acc);
	}, [])

	return withoutDuplicates.join('_');
}

function generateObjFromSolFolder(filePath: string, basePath: string) {
	if (fs.statSync(filePath).isDirectory()) {
		return(fs.readdirSync(filePath).reduce(function(acc, name) {
			return({
				...acc,
				...generateObjFromSolFolder(path.join(filePath, name), basePath)
			})
		}, {}));
	}

	if (filePath.endsWith('.dbg.json')) {
		return({});
	}

	
	const relativePath = path.relative(basePath, filePath);
	
	const cleanedContents = JSON.stringify(JSON.parse(fs.readFileSync(filePath).toString()));

	return({ [cleanFileName(relativePath)]: cleanedContents })
}

export default function generator(plop: PlopTypes.NodePlopAPI): void {
	const artifactsFolderName = './artifacts/contracts';
	const artifactsPath = path.join(plop.getDestBasePath(), artifactsFolderName);

	plop.setHelper('first', item => item[0]);
	plop.setHelper('second', item => item[1]);
	plop.setHelper('second_import', item => `./${path.join(artifactsFolderName, item[1])}`);

	plop.setGenerator("contract-types", {
		description: "Generate Contract Exports",
		prompts: [],
		actions: [
			function computeNeededExports(variables) {
				variables.contractArtifacts = Object.entries(generateObjFromSolFolder(artifactsPath, artifactsPath));
			},
			{
				type: "add",
				force: true,
				path: "index.ts",
				templateFile: "templates/exports-typescript.hbs",
			},
			{
				type: "add",
				force: true,
				path: "index.js",
				templateFile: "templates/exports-javascript.hbs",
			}
		]
	});
}