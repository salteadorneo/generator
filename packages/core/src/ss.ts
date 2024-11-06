export function calculateControlDigits(provinceCode: number, sequentialNumber: number): string {
    const concatenatedNumber = `${provinceCode}${sequentialNumber}`;
    const mod97 = BigInt(concatenatedNumber) % BigInt(97);
    const controlDigits = (mod97 < 10 ? `0${mod97}` : `${mod97}`);
    return controlDigits;
}