import { AuctionHouseAbi } from '@/constants'
import { Address } from 'viem'
import { useContractReads } from 'wagmi'

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
  const minTicksPerOrderQuery = {
    address: process.env.NEXT_PUBLIC_SUBNET_CONTRACT as Address,
    abi: AuctionHouseAbi as any,
    functionName: 'minTicksPerOrder'
  }
  const minValuePerTickQuery = {
    address: process.env.NEXT_PUBLIC_SUBNET_CONTRACT as Address,
    abi: AuctionHouseAbi as any,
    functionName: 'minContributionPerTick'
  }
  return useContractReads({
    contracts: [constructListQuery, expirationQuery, minTicksPerOrderQuery,minValuePerTickQuery],
    watch: true
  })
}

export { useGetAuctionData }
