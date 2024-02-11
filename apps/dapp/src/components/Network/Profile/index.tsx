import { useEffect, useState } from "react";
import { Address, useAccount, useBalance } from "wagmi";

import { useWeb3Modal } from "@web3modal/wagmi/react";
import { formatNumber } from "@/lib/numbers";

export default function Profile() {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<Address | undefined>();

  {
    // We neeed to copy state from wagmi to local state to fix next reender issues
    const { address: inputAddress, isConnected: inputIsConnected } = useAccount();
    useEffect(() => {
      setIsConnected(inputIsConnected);
      setAddress(inputAddress);
    }, [inputAddress, inputIsConnected]);
  }

  const { data: balance } = useBalance({ address });
  const { open } = useWeb3Modal();

  if (isConnected) {
    return (
      <div className="relative flex justify-end items-center text-2xs lg:text-xs  group hover:rounded-none transition-all cursor-pointer">
        <div
          onClick={() => open()}
          className="hidden text-right text-white pr-2 lg:pr-4 flex justify-end"
        >
          {balance && (
            <>
              <div className="lg:p-1 mx-1 lg:mx-2">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 256 417"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                >
                  <g>
                    <polygon
                      fill="#343434"
                      points="127.9611 0 125.1661 9.5 125.1661 285.168 127.9611 287.958 255.9231 212.32"
                    />
                    <polygon
                      fill="#8C8C8C"
                      points="127.962 0 0 212.32 127.962 287.959 127.962 154.158"
                    />
                    <polygon
                      fill="#3C3C3B"
                      points="127.9611 312.1866 126.3861 314.1066 126.3861 412.3056 127.9611 416.9066 255.9991 236.5866"
                    />
                    <polygon
                      fill="#8C8C8C"
                      points="127.962 416.9052 127.962 312.1852 0 236.5852"
                    />
                    <polygon
                      fill="#141414"
                      points="127.9611 287.9577 255.9211 212.3207 127.9611 154.1587"
                    />
                    <polygon
                      fill="#393939"
                      points="0.0009 212.3208 127.9609 287.9578 127.9609 154.1588"
                    />
                  </g>
                </svg>
              </div>
              {formatNumber(parseFloat(balance.formatted))} ETH
            </>
          )}
        </div>
        <div className="flex lg:space-x-3 lg:tracking-2px items-center text-white lg:p-2 p-1  hover:bg-white/10 ">
          <div
            onClick={() => open()}
            className="flex flex-col justify-end text-right text-black "
          >
            {/*
            <div className="lg:text-xs mb-0.5">{ensName ? `${ensName} (${formattedAddress})` : formattedAddress}</div>
            */}
            <div className="bg-black w-8 h-8 -mt-1 rounded-full"></div>
          </div>
        </div>
      </div>
    );
  }

  return <></>;
}
