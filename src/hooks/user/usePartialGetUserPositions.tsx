import { FRCertificateAbi } from '@/constants';
import { bulletin } from '@/context/Web3Modal';
import { Address, useAccount, useContractRead, useContractReads } from 'wagmi';

function usePartialGetUserPositions() {
  const mock1 = {
    address: process.env.NEXT_PUBLIC_MAINNET_CONTRACT as Address,
    abi: FRCertificateAbi as any,
    functionName: 'positions',
    chainId: bulletin.id,
    args: [1],
  };
  const mock2 = {
    address: process.env.NEXT_PUBLIC_MAINNET_CONTRACT as Address,
    abi: FRCertificateAbi as any,
    functionName: 'positions',
    chainId: bulletin.id,
    args: [2],
  };
  return useContractReads({
    contracts: [mock1, mock2],
  });
}

export { usePartialGetUserPositions };
