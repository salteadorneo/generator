import { CardType, cardTypes, generateRandomDigits, luhnAlgorithm } from "@data-js/core";

export function card(options?: { cardType?: keyof CardType }) {
    const type = options?.cardType
        ? cardTypes.find(c => c.name === options?.cardType)
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
