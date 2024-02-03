import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Invoice } from '@/types';
import { useNumbers, useWeb3 } from '@/hooks';

function HomeTable({ invoices }: { invoices: Invoice[] }) {
  const { formatFiat } = useNumbers();
  const { formatAddress } = useWeb3();

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
            {invoices.map((invoice) => (
              <TableRow key={invoice.position}>
                <TableCell className='font-medium'>
                  {invoice.position}
                </TableCell>
                <TableCell>{formatFiat(invoice.value)}</TableCell>
                <TableCell>{invoice.ticks}</TableCell>
                <TableCell>{formatAddress(invoice.address)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export { HomeTable };
