import { generateRandomNumber, calculateLetter, NIE_LETTERS, EntityType, ProvinceCode, getRandomEntityType, getRandomProvinceCode } from "@data-js/core"

export function dni(): string | string[] {
    const number = generateRandomNumber(8);
    const letter = calculateLetter(parseInt(number, 10));
    return `${number}${letter}`;
}

export function nie(): string | string[] {
    const prefix = NIE_LETTERS[Math.floor(Math.random() * 3)];
    const number = generateRandomNumber(7);
    const adjustedNumber = prefix === 'X' ? parseInt(number, 10) :
        prefix === 'Y' ? parseInt(number, 10) + 10000000 :
            parseInt(number, 10) + 20000000;
    const letter = calculateLetter(adjustedNumber);
    return `${prefix}${number}${letter}`;
}

export function cif(options: { entityType?: EntityType, provinceCode?: ProvinceCode } = {}): string | string[] {
    const selectedEntityType = options?.entityType || getRandomEntityType();
    const selectedProvinceCode = options?.provinceCode || getRandomProvinceCode();
    const randomDigits = Array(5).fill(0).map(() => Math.floor(Math.random() * 10)).join('');
    const centralDigits = selectedProvinceCode + randomDigits;
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < 7; i++) {
        const digit = parseInt(centralDigits[i]);
        if (i % 2 === 0) {
            let doubled = digit * 2;
            sumOdd += Math.floor(doubled / 10) + (doubled % 10);
        } else {
            sumEven += digit;
        }
    }
    const controlSum = sumEven + sumOdd;
    const controlDigit = (10 - (controlSum % 10)) % 10;
    let controlChar: string;
    if (['P', 'Q', 'R', 'S', 'W', 'N'].includes(selectedEntityType) || selectedProvinceCode === '00') {
        controlChar = String.fromCharCode(controlDigit + 64);
    } else if (['A', 'B', 'E', 'H'].includes(selectedEntityType)) {
        controlChar = controlDigit.toString();
    } else {
        controlChar = Math.random() < 0.5 ? controlDigit.toString() : String.fromCharCode(controlDigit + 64);
    }
    return `${selectedEntityType}${centralDigits}${controlChar}`;
}
