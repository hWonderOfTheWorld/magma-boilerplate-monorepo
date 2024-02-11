import * as ethers from 'ethers';

function getProvider(local: boolean = false) {
    let provider;

    if (local) {
        provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:8545/');
    } else {
        provider = new ethers.providers.InfuraProvider(undefined, '..');
    }

    return(provider);
}

const blockNumberForCheck = 18713326;

export async function hasSentAtLeastOneTransaction(address: string, blockNumber: number = blockNumberForCheck) {
    const provider = getProvider();

    // const count = await provider.getTransactionCount(address, blockNumber);

    return(true);
}
