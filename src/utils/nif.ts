const LETTERS = 'TRWAGMYFPDXBNJZSQVHLCKE';
const DNI_REGEX = /^\d{1,8}[TRWAGMYFPDXBNJZSQVHLCKE]$/;
const NIE_LETTERS = 'XYZ';
const NIE_REGEX = /^(X|Y|Z)\d{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/;

function calculateLetter(number: number): string {
    return LETTERS[number % 23];
}

function generateRandomNumber(digits: number): string {
    return String(Math.floor(Math.random() * Math.pow(10, digits))).padStart(digits, '0');
}

export function generateDNI(): string {
    const number = generateRandomNumber(8);
    const letter = calculateLetter(parseInt(number, 10));
    return `${number}${letter}`;
}

export function validateDNI(value: string): boolean {
    if (DNI_REGEX.test(value)) {
        const number = parseInt(value.slice(0, -1), 10);
        const letter = value.charAt(value.length - 1);
        return letter === calculateLetter(number);
    }
    return false;
}

export function generateNIE(): string {
    const prefix = NIE_LETTERS[Math.floor(Math.random() * 3)];
    const number = generateRandomNumber(7);

    // Ajustar el número en función del prefijo antes de calcular la letra
    const adjustedNumber = prefix === 'X' ? parseInt(number, 10) :
        prefix === 'Y' ? parseInt(number, 10) + 10000000 :
            parseInt(number, 10) + 20000000;

    const letter = calculateLetter(adjustedNumber);
    return `${prefix}${number}${letter}`;
}

export function validateNIE(value: string): boolean {
    if (NIE_REGEX.test(value)) {
        const prefix = value.charAt(0);
        const number = parseInt(value.slice(1, -1), 10);
        const letter = value.charAt(value.length - 1);

        // Ajustar el número en función del prefijo antes de calcular la letra
        const adjustedNumber = prefix === 'X' ? number :
            prefix === 'Y' ? number + 10000000 :
                number + 20000000;

        return letter === calculateLetter(adjustedNumber);
    }
    return false;
}
