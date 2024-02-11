"use client";

import * as React from 'react';
import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import { walletConnectProvider, EIP6963Connector } from '@web3modal/wagmi'
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { alchemyProvider } from '@wagmi/core/providers/alchemy'
import { publicProvider } from '@wagmi/core/providers/public'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { PhantomConnector } from 'phantom-wagmi-connector'

import { mainnet, hardhat, goerli } from 'wagmi/chains'
import { Chain } from 'wagmi'
export const magma = {
  id: 1_877_574_110,
  name: 'Magma:Onyx',
  network: 'magmaonyx',
  nativeCurrency: {
    decimals: 18,
    name: 'Ethereum',
    symbol: 'ETH',
  },
  rpcUrls: {
    public: { http: ['https://'] },
    default: { http: ['https://'] },
  },
  blockExplorers: {
    etherscan: { name: 'Explore', url: '' },
    default: { name: 'Explore', url: '' },
  },
  
} as const satisfies Chain

const projectId = '...';

const chainsDevOrProd =  process.env.NODE_ENV === 'production' ?  [mainnet, hardhat, goerli, magma] : [hardhat, goerli, magma]

const { chains, publicClient } = configureChains(
  chainsDevOrProd,
    [
        walletConnectProvider({ projectId }),
        publicProvider(),
        alchemyProvider({ apiKey: '...' })
    ]
)

const metadata = {
    name: 'Dapp',
    description: 'Dapp Dapp Yum',
    url: 'https://dapp.com',
    icons: []
    // icons: ['http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyum-logo-sm-transparent.2e383290.png&w=640&q=75']
};
 
const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: [
      new WalletConnectConnector({ chains, options: { projectId, showQrModal: false, metadata } }),
      new EIP6963Connector({ chains }),
      new InjectedConnector({ chains, options: { shimDisconnect: true } }),
      new PhantomConnector({ chains })
    ],
    publicClient
})

createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  themeMode: 'dark',
  themeVariables: {
    '--w3m-font-family': 'Arial',
    '--w3m-accent': '#76D248',
    '--w3m-border-radius-master': '4px'
  }
})

export function Web3Provider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
  );
}