import React from 'react';
import { motion } from 'framer-motion';

const TextWriteAnimation = ({
  text,
  className,
}: {
  text: string;
  className: string;
}) => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Ajusta el tiempo entre cada letra
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      variants={container}
      initial='hidden'
      animate='visible'
      style={{ display: 'inline-block', overflow: 'hidden' }}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          variants={letter}
          className={className}
          style={{ display: 'inline-block' }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export { TextWriteAnimation };
