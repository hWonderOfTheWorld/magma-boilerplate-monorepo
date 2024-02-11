"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  Address,
  useAccount,
  useBalance,
  useEnsName,
} from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";

import { formatEthereumAddress } from "@/lib/strings";
import WalletConnectButton from "@/components/Network/WalletConnectButton";
import { useNetwork, useSwitchNetwork } from "wagmi";

export default function Header() {
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();
  const [address, setAddress] = useState<Address | undefined>();
  const [tokenPriceUSD, setTokenPriceUSD] = useState<any>()
  const [isConnected, setIsConnected] = useState(false);

  {
    // We neeed to copy state from wagmi to local state to fix next reender issues
    const { address: inputAddress, isConnected: inputIsConnected } =
      useAccount();
    useEffect(() => {
      setIsConnected(inputIsConnected);
      setAddress(inputAddress);
    }, [inputAddress, inputIsConnected]);
  }

  const formattedAddress = useMemo(() => {
    return formatEthereumAddress(address, '0x0');
  }, [address]);

  const { data: ensName } = useEnsName({ address });
  const { data: balance } = useBalance({ address });
  const { open } = useWeb3Modal();

  return (
    <div>

            {isConnected && 
            <div className="">
                We connected... yum.
                 {ensName
                    ? `${ensName} (${formattedAddress})`
                    : formattedAddress}

                <button onClick={()=>open()}>Open Wallet</button>
            </div>
            }
            
              {!isConnected && (
                  <WalletConnectButton className="mt-5 !w-full bluebutton px-5 py-5 rounded-[20px] text-[18px] font-bold arial" />
              )}

             {/* <ThemeSwitcher /> */}
    </div>
  );
}
