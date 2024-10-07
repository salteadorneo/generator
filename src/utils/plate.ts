export type PlateType =
    'general' | 'historic' | 'trailer' | 'temporary' |
    'diplomatic' | 'police' | 'taxi' | 'consular';

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

function getRandomLetter(): string {
    const consonants = 'BCDFGHJKLMNPRSTVWXYZ';
    return consonants[Math.floor(Math.random() * consonants.length)];
}

export function generatePlate(type: PlateType): string {
    const template = plateTemplates[type].pattern;

    return template
        .replace(/#/g, () => Math.floor(Math.random() * 10).toString())
        .replace(/A/g, () => getRandomLetter());
}

export function validatePlate(plate: string): boolean {
    const isValid = Object.values(plateTemplates).some(({ pattern }) => {
        const regex = new RegExp(
            '^' + pattern
                .replace(/#/g, '\\d')
                .replace(/A/g, '[B-DF-HJ-NP-TV-Z]') + '$'
        );
        return regex.test(plate);
    });

    return isValid;
}