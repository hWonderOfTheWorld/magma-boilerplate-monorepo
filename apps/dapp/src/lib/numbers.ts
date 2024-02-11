import { formatEther } from "viem"

interface Unit {
  value: bigint,
  suffix: string
};

const units: Unit[] = [
  {value: BigInt(1_000_000_000_000_000_000), suffix: 'e'},
  {value: BigInt(1_000_000_000_000_000), suffix: 'p'},
  {value: BigInt(1_000_000_000_000), suffix: 't'},
  {value: BigInt(1_000_000_000), suffix: 'b'},
  {value: BigInt(1_000_000), suffix: 'm'},
  {value: BigInt(1_000), suffix: 'k'}
];

function formatNumber(input: number): string {
  const num = Number(input);

  for (const unit of units) {
    if (num >= Number(unit.value)) {
      const value = Math.floor(num * 10 / Number(unit.value)) / 10;
      return `${value}${unit.suffix}`;
    }
  }

  if (num < 10) {
    return parseFloat(num.toFixed(3)).toString();
  } else if (num < 100) {
    return parseFloat(num.toFixed(2)).toString();
  } else if (num < 1000) {
    return parseFloat(num.toFixed(1)).toString();
  } 

  return num.toString();
}

function formatBigInt(bigInt: bigint): string {
  const suffixes = ['', 'k', 'M', 'B', 'T', 'P', 'E', 'Z', 'Y'];
  let suffixNum = 0;
  let value = Number(bigInt);

  while (value >= 1000) {
    value /= 1000;
    suffixNum++;
  }

  value = Math.round(value * 10) / 10; // keep one decimal point

  return value.toString() + suffixes[suffixNum];
}

export function handleDecimalsOnValue(value: string | number) {
  const regex = /([0-9]*[\.|\,]{0,5}[0-9]{0,8})/s;
  return String(value).match(regex)?.[0] ?? "0";
}

export function numberFormatFromBigInt(value:bigint){
  return parseFloat(( formatEther(value)).toString())
}

export function formatCompactNumber(number:number) {
  if (number < 1000) {
    return number;
  } else if (number >= 1000 && number < 1_000_000) {
    return (number / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  } else if (number >= 1_000_000 && number < 1_000_000_000) {
    return (number / 1_000_000).toFixed(1).replace(/\.0$/, "") + "m";
  } else if (number >= 1_000_000_000 && number < 1_000_000_000_000) {
    return (number / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "b";
  } else if (number >= 1_000_000_000_000 && number < 1_000_000_000_000_000) {
    return (number / 1_000_000_000_000).toFixed(1).replace(/\.0$/, "") + "t";
  }
}

const Numbers = { formatNumber, formatBigInt }

export { formatBigInt, formatNumber }
export default Numbers