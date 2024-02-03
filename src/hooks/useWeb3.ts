import React from 'react'
import { Address } from 'viem'

function useWeb3 () {
  function formatAddress (address: Address) {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }
  return { formatAddress }
}

export { useWeb3 }
