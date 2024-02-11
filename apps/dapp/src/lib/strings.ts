export function formatEthereumAddress(address: `0x${string}` | undefined, defaultValue: string = '') {
  if(!address) {
    return(defaultValue)
  } else {
    const start = address.substring(0, 6);
    const end = address.substring(38, 42);
  
    return `${start}...${end}`;
  }
}
