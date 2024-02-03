'use client';
import React from 'react';
import { motion } from 'framer-motion';

import {
  HomeTable,
  HomeSelect,
  MakeOffer,
  OfferData,
  HomeCountDown,
} from '@/components';
import { Address } from 'viem';

const invoices = Array.from({ length: 10 }, (_, i) => ({
  position: i + 1,
  value: Math.floor(Math.random() * 1000),
  ticks: Math.floor(Math.random() * 1000),
  address: '0x5E15DBf75d3819Dd9DA31Fc159Ce5bc5f3751AB0' as Address,
}));

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
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='grid gap-4 justify-center items-start homeContainer w-full h-screen pt-20 pb-4 px-10'
    >
      <HomeSelect />
      <HomeCountDown futureTimestamp={1733200773000} />
      <HomeTable invoices={invoices} />
      <div className='homeSidebar flex flex-col justify-start items-center gap-4  overflow-y-scroll h-full'>
        <OfferData data={dataMock} />
        <MakeOffer />
      </div>
    </motion.main>
  );
}

export default Page;
