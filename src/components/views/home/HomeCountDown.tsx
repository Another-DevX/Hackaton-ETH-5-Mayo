'use client';
import React, { useEffect, useState } from 'react';
import CountDown from 'count-down-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

function HomeCountDown({ futureTimestamp }: { futureTimestamp: number }) {
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
  }) => (
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

  return (
    <Card className='homeCountdown'>
      <CardHeader>
        <h2 className='text-2xl w-full text-center font-semibold'>
          Time remaining
        </h2>
      </CardHeader>
      <CardContent>
        <CountDown date={futureTimestamp} renderer={CountdownRenderer} />
      </CardContent>
    </Card>
  );
}

export { HomeCountDown };
