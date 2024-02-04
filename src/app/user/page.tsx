'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useNumbers } from '@/hooks';
import { usePartialGetUserPositions } from '@/hooks/user/usePartialGetUserPositions';
import CountDown from 'count-down-react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Address, formatUnits } from 'viem';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

type Inputs = {
  to: Address;
};

function Page() {
  const { formatFiat } = useNumbers();
  const isFutureTimestamp = (timestamp: number) => timestamp > Date.now();
  const { data: partialData, isLoading } = usePartialGetUserPositions();
  const form = useForm<Inputs>();
  const CountdownRenderer = ({
    days,
    hours,
    minutes,
    seconds,
  }: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }) => {
    if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
      return <p>Ended</p>;
    }
    return (
      <div
        suppressHydrationWarning
        className='flex h-full justify-center items-center space-x-4'
      >
        <div className='text-center '>
          <span suppressHydrationWarning className='text-4xl font-semibold '>
            {days}
          </span>
          <p className='text-sm text-gray-400'>Day(s)</p>
        </div>
        <div className='text-center'>
          <span suppressHydrationWarning className='text-4xl font-semibold '>
            {hours}
          </span>
          <p className='text-sm text-gray-400'>Hour(s)</p>
        </div>
        <div className='text-center'>
          <span suppressHydrationWarning className='text-4xl font-semibold'>
            {minutes}
          </span>
          <p className='text-sm text-gray-400'>Minute(s)</p>
        </div>
        <div className='text-center'>
          <span suppressHydrationWarning className='text-4xl font-semibold '>
            {seconds}
          </span>
          <p className='text-sm text-gray-400'>Second(s)</p>
        </div>
      </div>
    );
  };
  const onSubmit = () => {
    console.log('submit');
  };

  if (isLoading) {
    return (
      <div className='grid grid-cols-3 gap-4 justify-center  w-full h-screen pt-20 pb-4 px-10'>
        <Skeleton className='w-full h-72 rounded-md' />
        <Skeleton className='w-full h-72 rounded-md' />
        <Skeleton className='w-full h-72 rounded-md' />
      </div>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='grid grid-cols-3  gap-4 justify-center w-full pt-20 pb-4 px-10'
    >
      {partialData?.map((data, index) => (
        <Card
          className='p-1 bg-cover! bg-gradient flex flex-col gap-2'
          key={index}
        >
          <Card className='backdrop-blur-lg'>
            <CardHeader>
              <CardTitle className='text-2xl'>Aave</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='flex flex-col'>
                <span className='text-sm  text-gray-400'>Ticks</span>
                <span className='text-lg font-semibold'>
                  {Number(data.result?.[1] as bigint)}
                </span>
              </div>
              <div className='flex flex-col'>
                <span className='text-sm text-gray-400'>Value per tick</span>
                <span className='text-lg font-semibold'>
                  {formatFiat(Number(formatUnits(data.result?.[0], 6)))}
                </span>
              </div>
            </CardContent>
            <CardFooter>
              <CountDown date={1710021573000} renderer={CountdownRenderer} />
            </CardFooter>
          </Card>
          <Card className='pt-6'>
            <CardContent className='flex flex-row gap-2 justify-center items-center h-full'>
              <Popover>
                <PopoverTrigger className='w-full'>
                  <Button variant='gradient' className='w-full'>
                    Transfer
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <Form {...form}>
                    <form className='flex flex-col gap-4' onSubmit={form.handleSubmit(onSubmit)}>
                      <FormField
                        control={form.control}
                        name='to'
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Transfer to</FormLabel>
                            <FormControl>
                              <Input placeholder='0x0000' {...field} />
                            </FormControl>
                            <FormDescription>
                              This is the address you want to transfer to.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type='submit'>Transfer</Button>
                    </form>
                  </Form>
                </PopoverContent>
              </Popover>

              <Button
                disabled={isFutureTimestamp(1710021573000)}
                variant='gradient'
                className='w-full'
              >
                Burn
              </Button>
            </CardContent>
          </Card>
        </Card>
      ))}
    </motion.main>
  );
}

export default Page;
