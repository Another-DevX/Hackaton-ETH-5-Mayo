'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { TextWriteAnimation } from '@/components/TextAnimation';

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className=' relative w-full h-screen pt-20 pb-4 px-10'
    >
      <div className='absolute top-32 left-24 '>
        <TextWriteAnimation
          className='sixtyfour text-6xl'
          text='Cherry_protocol'
        />
      </div>
      <div className='absolute bottom-10 right-5 flex flex-col gap-2'>
        <p className='indent-10 text-2xl font-light'>
          We plant the seed of your future income
        </p>
      </div>
    </motion.main>
  );
}
