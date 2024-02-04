'use client';
import React from 'react';
import { motion } from 'framer-motion';

import {
  HomeTable,
  HomeSelect,
  MakeOffer,
  OfferData,
  HomeCountDown,
  SkeletonHome,
} from '@/components';
import { useGetAuctionData } from '@/hooks';
import { TAuctionData } from '@/hooks/home/useGetAuctionData';

const dataMock = {
  name: 'Aave protocol',
  description:
    ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, aspernatur. Saepe commodi iusto culpa totam corporis quaerat quas. Modi, labore? Rerum impedit quibusdam aut obcaecati itaque fugit. Consectetur, quibusdam eos.',
  type: 'Lending',
  liquidity: '100M',
  apy: '10%',
  moreInfo: 'https://aave.com',
};

function Page() {
  const { data, isLoading } = useGetAuctionData();

  if (isLoading) return <SkeletonHome />;

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='grid gap-4 justify-center items-start homeContainer w-full h-screen pt-20 pb-4 px-10'
    >
      <HomeSelect />
      {data && (
        <HomeCountDown
          data={data ? (data[0].result as TAuctionData[]) : []}
          futureTimestamp={Number(data[1].result as unknown as bigint)}
        />
      )}
      <HomeTable invoices={data ? (data[0].result as TAuctionData[]) : []} />
      <div className='homeSidebar p-2 flex flex-col justify-start items-center gap-4  overflow-y-scroll h-full'>
        <OfferData data={dataMock} />
        <MakeOffer
          minTicks={data ? (data[2].result as unknown as bigint) : BigInt(0)}
          minValuePerTick={
            data ? (data[3].result as unknown as bigint) : BigInt(0)
          }
        />
      </div>
    </motion.main>
  );
}

export default Page;
