'use client';
import React, { useEffect, useState } from 'react';
import CountDown from 'count-down-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TAuctionData } from '@/hooks/home/useGetAuctionData';
import { useAccount } from 'wagmi';
import { useMakePositions } from '@/hooks/home/useMakePositions';

function HomeCountDown({
  futureTimestamp,
  data,
}: {
  futureTimestamp: number;
  data: TAuctionData[];
}) {
  const [isEnded, setIsEnded] = useState(false);
  const { address } = useAccount();
  const { write } = useMakePositions();
  function sumUntilGreaterThan1000(array: TAuctionData[]) {
    let sum = 0;
    let result = [];
    for (let i = 0; i < array.length; i++) {
      if (sum + Number(array[i].orderSizeInTicks) > 1000) {
        break;
      }
      sum += Number(array[i].orderSizeInTicks);
      result.push(array[i]);
    }
    return result;
  }

  const handleMakePositions = () => {
    const currentPositions = sumUntilGreaterThan1000(data);
    currentPositions.forEach((position, index) => {
      if (position.receiver === address) {
        write({
          args: [index],
        });
      }
    });
  };
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
      {
        setIsEnded(true);
        return (
          <Button onClick={handleMakePositions} className='w-full'>
            Claim positions
          </Button>
        );
      }
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

  return (
    <Card className='homeCountdown'>
      <CardHeader>
        <CardTitle className='text-2xl w-full text-center font-semibold'>
          {isEnded ? 'Ended' : 'Time remaining'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CountDown date={futureTimestamp} renderer={CountdownRenderer} />
      </CardContent>
    </Card>
  );
}

export { HomeCountDown };
