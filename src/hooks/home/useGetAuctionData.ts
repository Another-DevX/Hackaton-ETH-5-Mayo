import { AuctionHouseAbi } from '@/constants'
import { Address } from 'viem'
import { useContractRead, useContractReads } from 'wagmi'

export type TAuctionData = {
  amountToPayPerTick: bigint
  orderSizeInTicks: bigint
  receiver: Address
}

function useGetAuctionData () {
  const constructListQuery = {
    address: process.env.NEXT_PUBLIC_SUBNET_CONTRACT as Address,
    abi: AuctionHouseAbi as any,
    functionName: 'constructList'
  }
  const expirationQuery = {
    address: process.env.NEXT_PUBLIC_SUBNET_CONTRACT as Address,
    abi: AuctionHouseAbi as any,
    functionName: 'expiration'
  }

  return useContractReads({
    contracts: [constructListQuery, expirationQuery],
    watch: true,
  })
}

export { useGetAuctionData }
