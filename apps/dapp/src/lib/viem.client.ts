import type { Address } from "viem";
import { createWalletClient, createPublicClient, http, getContract, isAddress, custom } from "viem";
import { Yum } from 'dapp-contracts'
import contractAddresses from "@/constants/addresses";
import { mainnet, hardhat, goerli, sepolia, magma } from "viem/chains";

function getWindowEthereum() {
    if (typeof window !== 'undefined' && 'ethereum' in window) {
        return(window.ethereum);
    }
    return(undefined)
}

function getChain() {
    switch (contractAddresses.useChain) {
        case 'hardhat':
            return(hardhat);
        case 'mainnet':
            return(mainnet);
        case 'goerli':
            return(goerli);
    }
}

export function getClient() {
    const windowEthereum = getWindowEthereum();
    let transport;
    if (windowEthereum) {
        transport = custom(window.ethereum);
    } else {
        transport = http(contractAddresses.transportUrl)
    }

    return(createPublicClient({
        chain: getChain(),
        batch: {
            multicall: {
                wait: 8
            }
        },
        transport: transport
    }));
}

function getWalletClientOrUndefined(account?: Address) {
    const windowEthereum = getWindowEthereum();
    if (!windowEthereum) {
        return(undefined);
    }

    return(createWalletClient({
        chain: getChain(),
        account: account,
        transport: custom(windowEthereum)
    }));
}

export function getWalletClient(account?: Address) {
    const client = getWalletClientOrUndefined(account);
    if (!client) {
        throw new Error('Cannot get wallet client without window.ethereum');
    }

    return(client);
}

export function assertAddress(input: string): Address {
    if (!isAddress(input)) {
        throw new Error(`${input} is not an address`);
    }

    return(input);
}

function getClientArgs() {
    return({
        publicClient: getClient(),
        walletClient: getWalletClientOrUndefined()
    });
}

export function getYUM(address: Address) {
    return(getContract({
        address: address,
        abi: Yum.abi,
        ...(getClientArgs())
    }))
}

