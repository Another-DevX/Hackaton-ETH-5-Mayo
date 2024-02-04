'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useNumbers } from '@/hooks';
import CountDown from 'count-down-react';
import { motion } from 'framer-motion';
import { formatUnits } from 'viem';

function Page() {
  const { formatFiat } = useNumbers();

  const mock = [
    {
      name: 'Aave protocol',
      ticks: 120,
      valuePerTick: BigInt(120000000),
      futureTimestamp: 1707021573000,
    },
    {
      name: 'Aave protocol',
      ticks: 100,
      valuePerTick: BigInt(120000000),

      futureTimestamp: 1707021573000,
    },
    {
      name: 'Aave protocol',
      ticks: 150,
      valuePerTick: BigInt(120000000),

      futureTimestamp: 1707021573000,
    },
    {
      name: 'Aave protocol',
      ticks: 120,
      valuePerTick: BigInt(120000000),

      futureTimestamp: 1707021573000,
    },
    {
      name: 'Aave protocol',
      ticks: 120,
      valuePerTick: BigInt(120000000),
      futureTimestamp: 1707021573000,
    },
  ];
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
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='grid grid-cols-3 gap-4 justify-center  w-full h-screen pt-20 pb-4 px-10'
    >
      {mock.map((data, index) => (
        <Card
          className='p-1 bg-cover! bg-gradient flex flex-col gap-2'
          key={index}
        >
          <Card className='backdrop-blur-lg'>
            <CardHeader>
              <CardTitle className='text-2xl'>{data.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='flex flex-col'>
                <span className='text-sm  text-gray-400'>Ticks</span>
                <span className='text-lg font-semibold'>{data.ticks}</span>
              </div>
              <div className='flex flex-col'>
                <span className='text-sm text-gray-400'>Value per tick</span>
                <span className='text-lg font-semibold'>
                  {formatFiat(Number(formatUnits(data.valuePerTick, 6)))}
                </span>
              </div>
            </CardContent>
            <CardFooter>
              <CountDown
                date={data.futureTimestamp}
                renderer={CountdownRenderer}
              />
            </CardFooter>
          </Card>
          <Card className='pt-6'>
            <CardContent className='flex flex-row gap-2 justify-center items-center h-full'>
              <Button variant='gradient' className='w-full'>
                Transfer
              </Button>
              <Button disabled variant='gradient' className='w-full'>
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
