import { AuctionHouseAbi } from '@/constants'
import { amplify } from '@/context/Web3Modal'
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
    functionName: 'constructList',
    chainId: amplify.id
  }
  const expirationQuery = {
    address: process.env.NEXT_PUBLIC_SUBNET_CONTRACT as Address,
    abi: AuctionHouseAbi as any,
    functionName: 'expiration',
    chainId: amplify.id
  }
  const minTicksPerOrderQuery = {
    address: process.env.NEXT_PUBLIC_SUBNET_CONTRACT as Address,
    abi: AuctionHouseAbi as any,
    functionName: 'minTicksPerOrder',
    chainId: amplify.id
  }
  const minValuePerTickQuery = {
    address: process.env.NEXT_PUBLIC_SUBNET_CONTRACT as Address,
    abi: AuctionHouseAbi as any,
    functionName: 'minContributionPerTick',
    chainId: amplify.id
  }
  return useContractReads({
    contracts: [
      constructListQuery,
      expirationQuery,
      minTicksPerOrderQuery,
      minValuePerTickQuery
    ],
    watch: true
  })
}

export { useGetAuctionData }
