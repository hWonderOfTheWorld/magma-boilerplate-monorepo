"use client"

import React, { useEffect, useState } from "react"
import Link from 'next/link'
import useSWR from 'swr'
import { TransactionReceipt } from 'viem'
import { Hash, getNetwork } from '@wagmi/core'
import { useAccount } from 'wagmi'
import { useWeb3Modal } from "@web3modal/wagmi/react"
import { formatNumber, numberFormatFromBigInt, formatCompactNumber, handleDecimalsOnValue } from '@/lib/numbers'
import { getClient, getWalletClient, getYUM } from "@/lib/viem.client"
import contractAddresses from "@/constants/addresses"
import WalletConnectButton from '@/components/Network/WalletConnectButton'

export default function SpawnComponent() {
  const client = getClient()
  const { address, isConnected } = useAccount()
  const { chain } = getNetwork()
  const { open } = useWeb3Modal()

   const [receipt, setReceipt] = useState<TransactionReceipt>()
   const [allowance, setAllowance] = useState<boolean>(false)
   const [fetching, setFetching] = useState<boolean>(false)
   const [errorMsg, setErrorMsg] = useState<string>("")

   const [hashAllowance, setHashAllowance] = useState<Hash>()
   const [hash, setHash] = useState<Hash>()

  const fetcher = (url:string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR('/api/stats/price', fetcher,  { refreshInterval: 30000,
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      // Never retry on 404.
      if (error.status === 404) return
      // Never retry for a specific key.
      if (key === '/api/user') return
      // Only retry up to 10 times.
      if (retryCount >= 10) return
      // Retry after 5 seconds.
      setTimeout(() => revalidate({ retryCount }), 5000)
    }
   })


  useEffect(()=>{
    if (!address) return;
    void (async () => {
      
    })()
  },[ ])

useEffect(()=> {
    void (async () => {
        if (hashAllowance) {
         const foundReceipt = await client.waitForTransactionReceipt({ hash: hashAllowance, confirmations: 1 })
         setReceipt(foundReceipt)
        setFetching(false)
        setHashAllowance(undefined)
       }
     })()
   }, [hashAllowance, client])

   useEffect(()=> {
    void (async () => {
      if (hash) {
        const foundReceipt = await client.waitForTransactionReceipt({ hash, confirmations: 1 })
        setReceipt(foundReceipt)
       setFetching(false)
        setHash(undefined)
        setSpawnComplete(true)
      }
    })()
  }, [hash, client])
 
   
   const approveAllow = async () => {
    if (!fetching) {
      return;
    }
    setFetching(true)

    const _yumContract = await getYUM(contractAddresses.yumToken)
    const _allowance = await _yumContract.simulate.approve([ '', '' ] as const, {
        account: address
      })
      const _hash = await getWalletClient(address).writeContract(_allowance.request)
      setHashAllowance(_hash)
   }


   return (
     <div className="w-1/2 mx-auto flex flex-col relative">

        {receipt?.transactionHash}

        {isConnected && (
              <>
              <h1>
                Looks like we're connected . YUM . 
              </h1>
              </>
        )}

        {!isConnected && (
              <>
              <h1>
                Lets connect
              </h1>
              <WalletConnectButton className="mt-5 bg-blue-500 px-5 py-5 rounded-xl text-xl" />
              </>
        )}

        {isConnected && 
            errorMsg &&
            <>{errorMsg}</>
        }
 
     </div>
   )
 }
 