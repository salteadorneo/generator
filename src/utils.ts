const LETTERS = 'TRWAGMYFPDXBNJZSQVHLCKE';
const DNI_REGEX = /^\d{1,8}[TRWAGMYFPDXBNJZSQVHLCKE]$/;

export function generateDNI(): string {
    const number = String(Math.floor(Math.random() * 100000000)).padStart(8, '0');
    const letter = LETTERS[parseInt(number, 10) % 23];
    return `${number}${letter}`;
}

export function validateDNI(value: string): boolean {
    if (DNI_REGEX.test(value)) {
        const number = parseInt(value.slice(0, -1), 10);
        const letter = value.charAt(value.length - 1);
        return letter === LETTERS[number % 23];
    }
    return false;
}

export function generatePassword(length = 16) {
    const allowedChars =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"#$%+-:;?@_';
    let randomString = "";
    for (let i = 0; i < length; i++) {
        randomString += allowedChars.charAt(
            Math.floor(Math.random() * allowedChars.length),
        );
    }
    return randomString;
}