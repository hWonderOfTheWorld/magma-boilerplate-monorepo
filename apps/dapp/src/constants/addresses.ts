import { assertAddress } from "@/lib/viem.client";

const validChains = [ 'mainnet', 'hardhat', 'goerli', 'sepolia', 'magma' ] as const;
export type ValidChain = typeof validChains[number];

function assertValidChain(input: any): ValidChain {
    if (!validChains.includes(input)) {
        throw new Error(`Input is not (${validChains.join(', ')})`);
    }

    return(input);
}

const contractAddresses = {
    useChain: assertValidChain(process.env.NEXT_PUBLIC_WEB3_USE_CHAIN ?? 'hardhat'),
    transportUrl: process.env.NEXT_PUBLIC_WEB3_TRANSPORT_URL ?? 'https://eth-mainnet.g.alchemy.com/v2/...API...KEY',
    yumToken: assertAddress(process.env.NEXT_PUBLIC_YUM_ADDRESS ?? '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'),
} as const;

export default contractAddresses;

