import React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

function HomeSelect() {
  return (
    <Select defaultValue='1'>
      <SelectTrigger className='w-[280px] homeSelect'>
        <SelectValue placeholder='Select an auction' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='1'>Aave protocol</SelectItem>
        <SelectItem value='2'>Uniswap protocol</SelectItem>
      </SelectContent>
    </Select>
  );
}

export { HomeSelect };
