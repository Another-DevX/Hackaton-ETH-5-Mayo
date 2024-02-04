'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { extend } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { TextWriteAnimation } from '@/components/TextAnimation';
import { ASCIICherry } from '@/components/ASCII/ASCIICherry';

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className=' relative w-full h-screen flex justify-center items-center pt-20 pb-4 px-10'
    >
      <div className='absolute top-32 left-24 '>
        <TextWriteAnimation
          className='sixtyfour text-6xl'
          text='Cherry_protocol'
        />
        <div className='ml-10'>
          <TextWriteAnimation
            className='text-2xl font-light text-primary'
            text='We_plant_the_seed_of_your_future_income'
          />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='w-screen h-screen  absolute bottom-0 right-10'
      >
        <ASCIICherry />
      </motion.div>
    </motion.main>
  );
}
