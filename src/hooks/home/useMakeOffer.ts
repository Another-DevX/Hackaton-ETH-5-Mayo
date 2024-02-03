import { useToast } from '@/components/ui/use-toast'
import { AuctionHouseAbi } from '@/constants'
import { Address, useContractWrite } from 'wagmi'

function useMakeOffer () {
  const { toast } = useToast()
  return useContractWrite({
    address: process.env.NEXT_PUBLIC_SUBNET_CONTRACT as Address,
    abi: AuctionHouseAbi,
    functionName: 'offer',
    onSuccess: data => {
      toast({
        title: 'Offer made',
        description: `Your offer has been made successfully: ${data.hash}`
      })
    },
    onError: error => {
      toast({
        title: 'Error',
        description: error.message
      })
    }
  })
}

export { useMakeOffer }
