import { Address } from 'viem'

export type Invoice = {
  position: number
  value: number
  ticks: number
  address: Address
}
