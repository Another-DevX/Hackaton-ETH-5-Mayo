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
      <div className='homeSidebar flex flex-col justify-center items-center gap-4 h-full'>
        <MakeOffer />
        <OfferData />
      </div>
    </motion.main>
  );
}

export default Page;
