import { FRCertificateAbi } from '@/constants'
import { bulletin } from '@/context/Web3Modal'
import { Address, useAccount, useContractRead } from 'wagmi'

function useGetUserPositions () {
  const { address } = useAccount()
  return useContractRead({
    address: process.env.NEXT_PUBLIC_MAINNET_CONTRACT as Address,
    abi: FRCertificateAbi,
    functionName: 'getUserPositions',
    chainId: bulletin.id,
    args: [address]
  })
}

export { useGetUserPositions }
