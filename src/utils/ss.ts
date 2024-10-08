function calculateControlDigits(provinceCode: number, sequentialNumber: number): string {
    const concatenatedNumber = `${provinceCode}${sequentialNumber}`;
    const mod97 = BigInt(concatenatedNumber) % BigInt(97);
    const controlDigits = (mod97 < 10 ? `0${mod97}` : `${mod97}`);
    return controlDigits;
}

export function generateSocialSecurityNumber(): string {
    const provinceCode = Math.floor(Math.random() * 99) + 1;
    const sequentialNumber = Math.floor(Math.random() * 100000000);

    const controlDigits = calculateControlDigits(provinceCode, sequentialNumber);
    const formattedNUSS = `${provinceCode.toString().padStart(2, '0')}${sequentialNumber.toString().padStart(8, '0')}${controlDigits}`;

    return formattedNUSS;
}