export const countryData: { [key: string]: { length: number; banks: { name: string, swift: string }[] } } = {
    AD: { length: 24, banks: [{ name: "Andorra Banc Agrícol Reig SA", swift: "ANDLADAD" }] },
    AE: { length: 23, banks: [{ name: "First Abu Dhabi Bank", swift: "FABAAEAA" }] },
    AL: { length: 28, banks: [{ name: "Banka Kombetare Tregtare", swift: "NCBAALTX" }] },
    AT: { length: 20, banks: [{ name: "Raiffeisen Bank International", swift: "RZBAATWW" }] },
    AZ: { length: 28, banks: [{ name: "International Bank of Azerbaijan", swift: "IBAZAZ2X" }] },
    BE: { length: 16, banks: [{ name: "KBC Bank", swift: "KREDBEBB" }] },
    BG: { length: 22, banks: [{ name: "UniCredit Bulbank", swift: "UNCRBGSF" }] },
    CH: { length: 21, banks: [{ name: "UBS Switzerland AG", swift: "UBSWCHZH" }] },
    DE: { length: 22, banks: [{ name: "Deutsche Bank", swift: "DEUTDEFF" }] },
    DK: { length: 18, banks: [{ name: "Danske Bank", swift: "DABADKKK" }] },
    ES: { length: 24, banks: [{ name: "Banco Santander", swift: "BSCHESMM" }, { name: "BBVA", swift: "BBVAESMM" }] },
    FI: { length: 18, banks: [{ name: "Nordea Bank Finland", swift: "NDEAFIHH" }] },
    FR: { length: 27, banks: [{ name: "Société Générale", swift: "SOGEFRPP" }] },
    GB: { length: 22, banks: [{ name: "HSBC Bank", swift: "MIDLGB22" }] },
    IT: { length: 27, banks: [{ name: "UniCredit", swift: "UNCRITMM" }] },
    NL: { length: 18, banks: [{ name: "ING Bank", swift: "INGBNL2A" }] },
    PT: { length: 25, banks: [{ name: "Caixa Geral de Depósitos", swift: "CGDIPTPL" }] },
    SE: { length: 24, banks: [{ name: "Swedbank", swift: "SWEDSESS" }] }
};

export type CountryType = keyof typeof countryData;

export function getRandomCountry(): CountryType {
    return Object.keys(countryData)[Math.floor(Math.random() * Object.keys(countryData).length)] as CountryType;
}

export function calculateIBANCheckDigits(ibanWithoutCheckDigits: string) {
    const numericIban = ibanWithoutCheckDigits
        .split('')
        .map(char => {
            if (isNaN(parseInt(char))) {
                return (char.charCodeAt(0) - 55).toString();
            }
            return char;
        })
        .join('');
    const mod97 = BigInt(numericIban) % BigInt(97);
    const checkDigits = 98n - mod97;
    return checkDigits < 10n ? `0${checkDigits}` : `${checkDigits}`;
}
