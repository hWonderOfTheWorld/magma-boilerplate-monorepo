import { Address, isAddress } from "viem";

export function assertAddress(input: string): Address {
    if (!isAddress(input)) {
        throw new Error(`${input} is not an address`);
    }

    return(input);
}
