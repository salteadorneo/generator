import { calculateControlDigits } from "@data-js/core";

export function ss(): string {
    const provinceCode = Math.floor(Math.random() * 99) + 1;
    const sequentialNumber = Math.floor(Math.random() * 100000000);
    const controlDigits = calculateControlDigits(provinceCode, sequentialNumber);
    return `${provinceCode.toString().padStart(2, '0')}${sequentialNumber.toString().padStart(8, '0')}${controlDigits}`;
}