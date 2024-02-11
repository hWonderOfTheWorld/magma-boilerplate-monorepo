import React, { HTMLAttributes, useEffect, useState } from 'react';
import { useAccount, useDisconnect } from 'wagmi';
import { useWeb3Modal, useWeb3ModalState } from '@web3modal/wagmi/react'
import { getNetwork } from '@wagmi/core'
// import Profile from '@/components/Network/Profile';


interface WrongChainButtonProps {
  className?: string;
  fetching?: boolean;
}

export default function WrongChainButton({ fetching, className }: WrongChainButtonProps) {

  const [loading, setLoading] = useState(false);
  const { open } = useWeb3Modal();
  const { open: isOpen } = useWeb3ModalState();
  const { isConnected } = useAccount();
  const { chain, chains } = getNetwork()
  const { disconnect } = useDisconnect();
  // const label = isConnected ? "Disconnect" : "Connect Wallet";

  async function onOpen() {

    await open();
    // setLoading(false);
  }

  useEffect(() => {
    if (!isConnected) {
      setLoading(isOpen);
    }
  }, [isOpen])

  function onClick() {
    console.log('isConnected', isConnected)
    if (isConnected) {
      disconnect();
    } else {
      onOpen();
    }
  }


  return (

    <div>
       {isConnected &&
              chain?.unsupported &&
              <button  onClick={() => open({ view: 'Networks' })} className={`-mt-1 !w-full text-red-200 bg-red-500 px-5 py-5 rounded-[20px] text-[18px] font-bold arial`}>
                <div className="relative z-10 text-center">
                  {fetching ?  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="animate-spin mx-auto h-8 w-8 text-black"
                    viewBox="0 0 24 24"
                    >
                    <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    className="opacity-25"
                    ></circle>
                    <path
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    className="opacity-75"
                    ></path>
                    </svg> : 'Wrong Blockchain'}
                </div>
            </button>
            }
    </div>
  );


};
