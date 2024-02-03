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

const Amplify = {
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

const chains = [Amplify];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
});

export function Web3Modal({ children }: { children: React.ReactNode }) {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
}
