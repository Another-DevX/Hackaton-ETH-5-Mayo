import React from 'react'
import { useReadContract } from 'wagmi'

function useGetAuctionData (auctionId: string) {
  return useReadContract({
    abi: null,
    address: '0x6b175474e89094c44da98b954eedeac495271d0f',
    functionName: 'getSomething',
    args: [auctionId]
  })
}

export { useGetAuctionData }
