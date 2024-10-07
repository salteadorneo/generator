const LETTERS = 'TRWAGMYFPDXBNJZSQVHLCKE';
const DNI_REGEX = /^\d{1,8}[TRWAGMYFPDXBNJZSQVHLCKE]$/;

const NIE_LETTERS = 'XYZ';
const NIE_REGEX = /^(X|Y|Z)\d{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/;

export const entityTypes: [string, string][] = [
    ['A', 'Sociedad anónima'],
    ['B', 'Sociedad de responsabilidad limitada'],
    ['C', 'Sociedad colectiva'],
    ['D', 'Sociedad comanditaria'],
    ['E', 'Comunidad de bienes'],
    ['F', 'Sociedad cooperativa'],
    ['G', 'Asociación'],
    ['H', 'Comunidad de propietarios en régimen de propiedad horizontal'],
    ['J', 'Sociedad civil'],
    ['N', 'Entidad extranjera'],
    ['P', 'Corporación local'],
    ['Q', 'Organismo público'],
    ['R', 'Congregación o institución religiosa'],
    ['S', 'Órgano de la Administración del Estado o de las Comunidades Autónomas'],
    ['U', 'Unión Temporal de Empresas'],
    ['V', 'Sociedad Agraria de Transformación'],
    ['W', 'Establecimiento permanente de entidad no residente en España']
];

export type EntityType = typeof entityTypes[number][0];

export const provinces: [string[], string][] = [
    [['00'], 'No Residente'],
    [['01'], 'Álava'],
    [['02'], 'Albacete'],
    [['03', '53', '54'], 'Alicante'],
    [['04'], 'Almería'],
    [['05'], 'Ávila'],
    [['06'], 'Badajoz'],
    [['07', '57'], 'Islas Baleares'],
    [['08', '58', '59', '60', '61', '62', '63', '64', '65', '66', '68'], 'Barcelona'],
    [['09'], 'Burgos'],
    [['10'], 'Cáceres'],
    [['11', '72'], 'Cádiz'],
    [['12'], 'Castellón'],
    [['13'], 'Ciudad Real'],
    [['14', '56'], 'Córdoba'],
    [['15', '70'], 'La Coruña'],
    [['16'], 'Cuenca'],
    [['17', '55', '67'], 'Gerona'],
    [['18'], 'Granada'],
    [['19'], 'Guadalajara'],
    [['20', '71'], 'Guipúzcoa'],
    [['21'], 'Huelva'],
    [['22'], 'Huesca'],
    [['23'], 'Jaén'],
    [['24'], 'León'],
    [['25'], 'Lérida'],
    [['26'], 'La Rioja'],
    [['27'], 'Lugo'],
    [['28', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88'], 'Madrid'],
    [['29', '92', '93'], 'Málaga'],
    [['30', '73'], 'Murcia'],
    [['31'], 'Navarra'],
    [['32'], 'Orense'],
    [['33', '74'], 'Asturias'],
    [['34'], 'Palencia'],
    [['35', '75'], 'Las Palmas'],
    [['36', '94'], 'Pontevedra'],
    [['37'], 'Salamanca'],
    [['38', '76'], 'Santa Cruz de Tenerife'],
    [['39'], 'Cantabria'],
    [['40'], 'Segovia'],
    [['41', '90', '91'], 'Sevilla'],
    [['42'], 'Soria'],
    [['43', '77'], 'Tarragona'],
    [['44'], 'Teruel'],
    [['45'], 'Toledo'],
    [['46', '96', '97', '98'], 'Valencia'],
    [['47'], 'Valladolid'],
    [['48', '95'], 'Vizcaya'],
    [['49'], 'Zamora'],
    [['50', '99'], 'Zaragoza'],
    [['51'], 'Ceuta'],
    [['52'], 'Melilla'],
];

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

        const adjustedNumber = prefix === 'X' ? number :
            prefix === 'Y' ? number + 10000000 :
                number + 20000000;

        return letter === calculateLetter(adjustedNumber);
    }
    return false;
}

function getRandomProvinceCode() {
    const randomProvince = provinces[Math.floor(Math.random() * provinces.length)];
    return randomProvince[0][Math.floor(Math.random() * randomProvince[0].length)];
}

function getRandomEntityType(): EntityType {
    return entityTypes[Math.floor(Math.random() * entityTypes.length)][0];
}

export function generateCIF(entityType?: EntityType, provinceCode?: string) {
    const selectedEntityType = entityType || getRandomEntityType();
    const selectedProvinceCode = provinceCode || getRandomProvinceCode();
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

export function validateCIF(cif: string): boolean {
    const cifRegex = /^[ABCDEFGHJNPQRSUVW]\d{7}[0-9A-J]$/;
    if (!cifRegex.test(cif)) {
        return false;
    }
    const entityType = cif[0] as EntityType;
    const digits = cif.slice(1, 8);
    const controlChar = cif[8];
    let sum = 0;
    for (let i = 0; i < 7; i++) {
        const digit = parseInt(digits[i]);
        if (i % 2 === 0) {
            let doubled = digit * 2;
            sum += Math.floor(doubled / 10) + (doubled % 10);
        } else {
            sum += digit;
        }
    }
    const controlDigit = (10 - (sum % 10)) % 10;
    let expectedControlChar: string;
    if (['P', 'Q', 'R', 'S', 'W', 'N'].includes(entityType) || digits.startsWith('00')) {
        expectedControlChar = String.fromCharCode(controlDigit + 64);
    } else if (['A', 'B', 'E', 'H'].includes(entityType)) {
        expectedControlChar = controlDigit.toString();
    } else {
        expectedControlChar = controlDigit.toString();
        if (controlChar >= 'A' && controlChar <= 'J') {
            expectedControlChar = String.fromCharCode(controlDigit + 64);
        }
    }
    return controlChar === expectedControlChar;
}