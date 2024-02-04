'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type ProtocolData = {
  name: string;
  type: string;
  liquidity: string;
  apy: string;
  description: string;
  moreInfo: string;
};
function OfferData({ data }: { data: ProtocolData }) {
  return (
    <Card className='w-full h-full'>
      <CardHeader>
        <CardTitle>Protocol info</CardTitle>
        <CardDescription>
          Aave is an Open Source Protocol to create Non-Custodial Liquidity Markets to earn interest on supplying and borrowing assets with a variable or stable
        </CardDescription>
      </CardHeader>
      <CardContent className='grid grid-cols-2 gap-4'>
        <div className='flex flex-col'>
          <span className='text-sm  text-gray-400'>Name</span>
          <span className='text-lg font-semibold'>{data.name}</span>
        </div>
        <div className='flex flex-col'>
          <span className='text-sm text-gray-400'>Type</span>
          <span className='text-lg font-semibold'>{data.type}</span>
        </div>
        <div className='flex flex-col'>
          <span className='text-sm text-gray-400'>Liquidity</span>
          <span className='text-lg font-semibold'>{data.liquidity}</span>
        </div>
        <div className='flex flex-col'>
          <span className='text-sm text-gray-400'>APY</span>
          <span className='text-lg font-semibold'>{data.apy}</span>
        </div>
        <div className='flex flex-col col-span-2'>
          <span className='text-sm text-gray-400'>Description</span>
          <span>{data.description}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild size='sm' variant='secondary'>
          <Link href={data.moreInfo} target='_blank'>
            View more
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export { OfferData };
