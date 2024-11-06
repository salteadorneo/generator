const plateTypes = ["general", "historic", "trailer", "temporary", "diplomatic", "police", "taxi", "consular"] as const;
export type PlateType = typeof plateTypes[number];

interface PlateTemplate {
    pattern: string;
    name: string;
}

export const plateTemplates: { [key in PlateType]: PlateTemplate } = {
    general: { pattern: '####ABC', name: 'Vehículos en general' },
    historic: { pattern: 'H####AAA', name: 'Histórica' },
    trailer: { pattern: 'R####AAA', name: 'Remolques y semiremolques' },
    temporary: { pattern: 'P####AAA', name: 'Temporal' },
    diplomatic: { pattern: 'CD#####', name: 'Diplomática' },
    police: { pattern: 'CNP#####', name: 'Policía' },
    taxi: { pattern: 'TAXI####', name: 'Taxi' },
    consular: { pattern: 'CC####', name: 'Consular' },
};

export function getRandomLetter(): string {
    const consonants = 'BCDFGHJKLMNPRSTVWXYZ';
    return consonants[Math.floor(Math.random() * consonants.length)];
}

export function getRandomPlateType(): PlateType {
    return plateTypes[Math.floor(Math.random() * plateTypes.length)];
}