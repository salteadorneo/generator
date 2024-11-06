import { calculateIBANCheckDigits, countryData, CountryType, getRandomCountry } from "@data-js/core";

export function iban(options?: { countryCode?: CountryType, bankSwift?: string }): string {
    const country = options?.countryCode ?? getRandomCountry();
    const countryInfo = countryData[country]
    if (!countryInfo) {
        throw new Error(`Country ${country} not found.`);
    }

    const bank = options?.bankSwift
        ? countryInfo.banks.find(b => b.swift === options?.bankSwift)
        : countryInfo.banks[Math.floor(Math.random() * countryInfo.banks.length)];

    if (!bank) {
        throw new Error(`Bank with SWIFT ${options?.bankSwift} not found in country ${country}.`);
    }

    const length = countryInfo.length;
    let accountNumber = '';
    for (let i = 0; i < length - 4; i++) {
        accountNumber += Math.floor(Math.random() * 10);
    }

    const checkDigits = calculateIBANCheckDigits(`${accountNumber}${country}00`);
    return `${country}${checkDigits}${accountNumber}`;
}
