export const cardTypes = [
    { name: 'American Express', prefix: ['34', '37'], length: 15, cvvLength: 4 },
    { name: 'Carte Blanche', prefix: ['38'], length: 14, cvvLength: 3 },
    { name: 'Diners Club', prefix: ['300', '301', '302', '303', '36', '38'], length: 14, cvvLength: 3 },
    { name: 'Discover', prefix: ['6011', '622', '64', '65'], length: 16, cvvLength: 3 },
    { name: 'Enroute', prefix: ['2014', '2149'], length: 15, cvvLength: 3 },
    { name: 'JCB', prefix: ['35'], length: 16, cvvLength: 3 },
    { name: 'Maestro', prefix: ['5018', '5020', '5038', '6304', '6759', '6761', '6762', '6763'], length: 16, cvvLength: 3 },
    { name: 'MasterCard', prefix: ['51', '52', '53', '54', '55'], length: 16, cvvLength: 3 },
    { name: 'Solo', prefix: ['6334', '6767'], length: 16, cvvLength: 3 },
    { name: 'Switch', prefix: ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'], length: 16, cvvLength: 3 },
    { name: 'Visa', prefix: ['4'], length: 16, cvvLength: 3 },
    { name: 'Visa Electron', prefix: ['4026', '417500', '4508', '4844', '4913', '4917'], length: 16, cvvLength: 3 },
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
