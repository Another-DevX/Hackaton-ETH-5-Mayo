'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

function SkeletonHome() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='grid gap-4 justify-center items-start homeContainer w-full h-screen pt-20 pb-4 px-10'
    >
      <Skeleton className='w-[280px] h-10 homeSelect' />
      <Card className='homeCountdown'>
        <CardHeader>
          <h2 className='text-2xl w-full text-center font-semibold'>
            Time remaining
          </h2>
        </CardHeader>
        <CardContent>
          <Skeleton className='w-full h-10 rounded-md' />
        </CardContent>
      </Card>
      <Card className='homeTable h-full overflow-auto'>
        <CardHeader>
          <CardTitle>Recent Invoices</CardTitle>
        </CardHeader>
        <CardContent className='h-full overflow-y-scroll'>
          <Skeleton className='h-full' />
        </CardContent>
      </Card>
      <div className='homeSidebar flex flex-col justify-start items-center gap-4  overflow-y-scroll h-full'>
        <Card className='w-full h-full'>
          <CardHeader>
            <CardTitle>Protocol info</CardTitle>
            <CardDescription>
              Here you can find the information about the protocol
            </CardDescription>
          </CardHeader>
          <CardContent className='grid grid-cols-2 gap-4'>
            <div className='flex flex-col'>
              <span className='text-sm  text-gray-400'>Name</span>
              <Skeleton className='w-full h-8 rounded-md' />
            </div>
            <div className='flex flex-col'>
              <span className='text-sm text-gray-400'>Type</span>
              <Skeleton className='w-full h-8 rounded-md' />
            </div>
            <div className='flex flex-col'>
              <span className='text-sm text-gray-400'>Liquidity</span>
              <Skeleton className='w-full h-8 rounded-md' />
            </div>
            <div className='flex flex-col'>
              <span className='text-sm text-gray-400'>APY</span>
              <Skeleton className='w-full h-8 rounded-md' />
            </div>
            <div className='flex flex-col col-span-2'>
              <span className='text-sm text-gray-400'>Description</span>
              <Skeleton className='w-full h-8 rounded-md' />
            </div>
          </CardContent>
          <CardFooter>
            <Skeleton className='w-[100px] p-4 rounded-md' />
          </CardFooter>
        </Card>
        <Card className='w-full h-full'>
          <CardHeader>
            <CardTitle>Make an offer</CardTitle>

            <Skeleton className='w-full h-8 rounded-md' />
          </CardHeader>
          <CardContent className='flex flex-col gap-2 justify-evenly'>
            <Skeleton className='w-full h-8 rounded-md' />
            <Skeleton className='h-4 w-[250px]' />
            <Skeleton className='w-full h-8 rounded-md' />
            <Skeleton className='h-4 w-[250px]' />
            <Skeleton className='w-[100px] h-12 rounded-md' />
          </CardContent>
        </Card>
      </div>
    </motion.main>
  );
}

export { SkeletonHome };
