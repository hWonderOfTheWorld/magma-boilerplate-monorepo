import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import { useWeb3Modal, useWeb3ModalState } from '@web3modal/wagmi/react'
import { getNetwork } from '@wagmi/core'
import Profile from '@/components/Network/Profile';


interface WalletConnectProps {
  className?: string;
}

export default function WalletConnectButton({ className }: WalletConnectProps) {
  const [isConnected, setIsConnected] = useState(false);

  {
    // We neeed to copy state from wagmi to local state to fix next reender issues
    const { isConnected: inputIsConnected } = useAccount();
    useEffect(() => {
      setIsConnected(inputIsConnected);
    }, [inputIsConnected]);
  }

  const [loading, setLoading] = useState(false);
  const { open } = useWeb3Modal();
  const { open: isOpen } = useWeb3ModalState();
  const { chain } = getNetwork()
  const label = isConnected ? "Disconnect" : "Connect Wallet";

  useEffect(() => {
    if (!isConnected) {
      setLoading(isOpen);
    }
  }, [isOpen])

  async function onButtonClick(args?: Parameters<typeof open>[0]) {
    await open(args);
  }

  return (
    <div>
      {loading}
      {(() => {
        if (!isConnected) {
          return (
            <button
              className={`${className ? className : 'flex items-center justify-center w-24 h-10 p-3 text-center text-black w-full border border-black rounded-lg cursor-pointer hover:bg-purple-900 bg-neutral-800'}`}
              onClick={(e) => {
                e.preventDefault();
                void onButtonClick();
              }}
              disabled={loading}
              type="button"
            >

                <div className="relative z-10"> {isOpen ? "Loading..." : label} </div>
            </button>
          );
        }

        if (chain?.unsupported) {
          return (
            <button
              onClick={(e) => {
                e.preventDefault();
                void onButtonClick({ view: 'Networks' })
              }}
              type="button"
            >
               <div className="relative z-10">Wrong network</div>
            </button>
          );
        }

        return (
          <Profile />
          );
      })()}
    </div>
  );


};
