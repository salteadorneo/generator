export const LETTERS = 'TRWAGMYFPDXBNJZSQVHLCKE';
export const DNI_REGEX = /^\d{1,8}[TRWAGMYFPDXBNJZSQVHLCKE]$/;

export const NIE_LETTERS = 'XYZ';
export const NIE_REGEX = /^(X|Y|Z)\d{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/;

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
export type ProvinceCode = typeof provinces[number][0][number];

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

export function calculateLetter(number: number): string {
    return LETTERS[number % 23];
}

export function generateRandomNumber(digits: number): string {
    return String(Math.floor(Math.random() * Math.pow(10, digits))).padStart(digits, '0');
}

export function getRandomProvinceCode() {
    const randomProvince = provinces[Math.floor(Math.random() * provinces.length)];
    return randomProvince[0][Math.floor(Math.random() * randomProvince[0].length)];
}

export function getRandomEntityType(): EntityType {
    return entityTypes[Math.floor(Math.random() * entityTypes.length)][0];
}