function useNumbers () {
  const formatFiat = (value: number) => {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
  }
  return { formatFiat }
}

export { useNumbers }
