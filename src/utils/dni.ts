const LETTERS = 'TRWAGMYFPDXBNJZSQVHLCKE';
const DNI_REGEX = /^\d{1,8}[TRWAGMYFPDXBNJZSQVHLCKE]$/;

export function generateDNI() {
    const number = String(Math.floor(Math.random() * 100000000)).padStart(8, '0');
    const letter = LETTERS[parseInt(number, 10) % 23];
    return `${number}${letter}`;
}

export function validateDNI(value: string) {
    if (DNI_REGEX.test(value)) {
        const number = parseInt(value.slice(0, -1), 10);
        const letter = value.charAt(value.length - 1);
        return letter === LETTERS[number % 23];
    }
    return false;
}