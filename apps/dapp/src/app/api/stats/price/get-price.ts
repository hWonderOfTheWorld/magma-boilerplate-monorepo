'use server';

type GeckoNumber = [ any, any ]
export interface GeckoPriceResponse {
    prices: GeckoNumber[]
}

export async function getGeckoCoinPrice(token: string) {
  const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${token}&vs_currencies=ethereum%2Cusd`, {
    next: {
      revalidate: 10
    }
  })
 
  return(
    await response.json()
 )
}


