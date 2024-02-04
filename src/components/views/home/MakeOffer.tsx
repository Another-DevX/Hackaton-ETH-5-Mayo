'use client';
import React, { useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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
import { useForm } from 'react-hook-form';
import { useAccount } from 'wagmi';
import { Address } from 'viem';
import { AuctionHouseAbi } from '@/constants';
import { useMakeOffer } from '@/hooks/home/useMakeOffer';
import { useToast } from '@/components/ui/use-toast';
import { ReloadIcon } from '@radix-ui/react-icons';
const something = {
  value: 1,
  ticks: 1,
};
type Inputs = {
  valuePerTick: number;
  amountOfTicks: number;
};

function MakeOffer() {
  const { writeAsync, isLoading } = useMakeOffer();
  const { address } = useAccount();
  const form = useForm<Inputs>();
  async function onSubmit(values: Inputs) {
    try {
      await writeAsync({
        args: [
          values.valuePerTick * 10 ** 6,
          values.amountOfTicks,
          address,
          Date.now() + 1000 * 600,
        ],
      });
    } catch (e) {
      console.error('Error making offer', e);
    }
  }
  return (
    <Card className='w-full h-full'>
      <CardHeader>
        <CardTitle>Make an offer</CardTitle>
        <CardDescription>
          Remember that the minimum value per tick is {something.value}, and the
          smallest number of ticks is {something.ticks}.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <FormField
              control={form.control}
              name='valuePerTick'
              rules={{
                required: {
                  value: true,
                  message: 'This field is required',
                },
                min: {
                  value: something.value,
                  message: `The minimum value per tick is ${something.value}`,
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Value per tick</FormLabel>
                  <FormControl>
                    <Input type='number' placeholder='Value' {...field} />
                  </FormControl>
                  <FormDescription>
                    This is the value you want to offer per tick.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='amountOfTicks'
              rules={{
                required: {
                  value: true,
                  message: 'This field is required',
                },
                min: {
                  value: something.ticks,
                  message: `The minimum number of ticks is ${something.ticks}`,
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of ticks</FormLabel>
                  <FormControl>
                    <Input placeholder='Amount' {...field} />
                  </FormControl>
                  <FormDescription>
                    This is the number of ticks you want to offer.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={isLoading} type='submit'>
              {isLoading ? (
                <>
                  <ReloadIcon className='mr-2 h-4 w-4 animate-spin' />
                  <p>Loading...</p>
                </>
              ) : (
                'Submit'
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

export { MakeOffer };
