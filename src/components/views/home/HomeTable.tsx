import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Invoice } from '@/types';
import { useNumbers, useWeb3 } from '@/hooks';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { Separator } from '@/components/ui/separator';
import { TAuctionData } from '@/hooks/home/useGetAuctionData';
import { formatEther, formatUnits } from 'viem';

function HomeTable({ invoices }: { invoices: TAuctionData[] }) {
  const { formatFiat } = useNumbers();
  const { formatAddress } = useWeb3();

  const handleOnCopy = async (address: string) => {
    try {
      await navigator.clipboard.writeText(address);
    } catch (err) {
      console.error('Failed to copy address: ', err);
    }
  };

  return (
    <Card className='homeTable h-full overflow-auto'>
      <CardHeader>
        <CardTitle>Recent Invoices</CardTitle>
      </CardHeader>
      <CardContent className='h-full overflow-y-scroll'>
        <Table className='h-full'>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[100px]'>Position</TableHead>
              <TableHead>Value per tick</TableHead>
              <TableHead>Ticks</TableHead>
              <TableHead>Address</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice, index) => (
              <TableRow key={index}>
                <TableCell className='font-medium'>{index + 1}</TableCell>
                <TableCell>
                  {formatFiat(
                    Number(formatUnits(invoice.amountToPayPerTick, 6))
                  )}
                </TableCell>
                <TableCell>{Number(invoice.orderSizeInTicks)}</TableCell>
                <TableCell>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        {formatAddress(invoice.receiver)}
                      </TooltipTrigger>
                      <TooltipContent>
                        <div className='flex flex-row gap-2  justify-center items-center'>
                          <span className='text-sm font-semibold'>
                            {invoice.receiver}
                          </span>
                          <button
                            onClick={() => handleOnCopy(invoice.receiver)}
                            className='border-[1px] rounded-md p-1'
                          >
                            <FontAwesomeIcon icon={faCopy} />
                          </button>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export { HomeTable };
