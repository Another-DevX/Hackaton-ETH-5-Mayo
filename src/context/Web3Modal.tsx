'use client';

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';

import { WagmiConfig } from 'wagmi';
import { Chain, arbitrum, mainnet } from 'viem/chains';

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID as string;

// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

export const amplify = {
  id: 78430,
  name: 'Amplify',
  network: 'avalanche',
  nativeCurrency: {
    decimals: 18,
    name: 'Amplify',
    symbol: 'AMP',
  },
  rpcUrls: {
    public: { http: ['https://subnets.avax.network/amplify/testnet/rpc'] },
    default: { http: ['https://subnets.avax.network/amplify/testnet/rpc'] },
  },
} as const satisfies Chain;

export const bulletin = {
  id: 78431,
  name: 'Bulletin',
  network: 'avalanche',
  nativeCurrency: {
    decimals: 18,
    name: 'Bulletin',
    symbol: 'BLT',
  },
  rpcUrls: {
    public: { http: ['https://subnets.avax.network/bulletin/testnet/rpc'] },
    default: { http: ['https://subnets.avax.network/bulletin/testnet/rpc'] },
  },
} as const satisfies Chain;

const chains = [amplify, bulletin];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  themeVariables: {
    '--w3m-accent': '#ff24e2',
  },
});

export function Web3Modal({ children }: { children: React.ReactNode }) {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
}
