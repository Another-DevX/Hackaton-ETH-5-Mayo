import { useToast } from '@/components/ui/use-toast';
import { AuctionHouseAbi } from '@/constants';
import { Address, useContractWrite } from 'wagmi';

function useMakePositions() {
  const { toast } = useToast();
  return useContractWrite({
    address: process.env.NEXT_PUBLIC_SUBNET_CONTRACT as Address,
    abi: AuctionHouseAbi,
    functionName: 'settleOrder',
    onMutate() {
      toast({
        title: 'Making position',
        description: (
          <div className='flex flex-row gap-2 w-full justify-start items-center'>
            <span className='loader' />
            <span>Please wait </span>
          </div>
        ),
      });
    },
    onSuccess: (data) => {
      toast({
        title: 'Position made',
        description: `Your position has been made successfully: ${data.hash}`,
      });
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: error.message,
      });
    },
  });
}

export { useMakePositions };
