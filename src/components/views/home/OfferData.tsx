'use client';

import React from 'react';
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
const something = {
  value: 100,
  ticks: 10,
};
type Inputs = {
  valuePerTick: number;
  amountOfTicks: number;
};

function OfferData() {
  const form = useForm<Inputs>();
  function onSubmit(values: Inputs) {
    console.log(values);
  }
  return (
    <Card className='w-full '>
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
            <Button type='submit'>Submit</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

export { OfferData };
