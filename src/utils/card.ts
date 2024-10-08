export const cardTypes = [
    { name: 'Visa', prefix: ['4'], length: 16, cvvLength: 3 },
    { name: 'MasterCard', prefix: ['51', '52', '53', '54', '55'], length: 16, cvvLength: 3 },
    { name: 'American Express', prefix: ['34', '37'], length: 15, cvvLength: 4 },
    { name: 'Discover', prefix: ['6011', '65'], length: 16, cvvLength: 3 },
];

function luhnAlgorithm(cardNumber: string): boolean {
    let sum = 0;
    let shouldDouble = false;

    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber[i]);

        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
}

function generateRandomDigits(length: number): string {
    return Array.from({ length }, () => Math.floor(Math.random() * 10)).join('');
}

export function generateCardDetails(cardType?: string) {
    const type = cardType
        ? cardTypes.find(c => c.name === cardType)
        : cardTypes[Math.floor(Math.random() * cardTypes.length)];

    if (!type) {
        throw new Error('Unsupported card type.');
    }

    const prefix = type.prefix[Math.floor(Math.random() * type.prefix.length)];
    const lengthWithoutChecksum = type.length - 1;
    const accountNumber = generateRandomDigits(lengthWithoutChecksum - prefix.length);
    let cardNumber = `${prefix}${accountNumber}`;

    for (let i = 0; i <= 9; i++) {
        if (luhnAlgorithm(cardNumber + i.toString())) {
            cardNumber += i.toString();
            break;
        }
    }

    const securityCode = generateRandomDigits(type.cvvLength);

    return { cardNumber, securityCode, type: type.name };
}
