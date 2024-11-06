import { plateTemplates, PlateType, getRandomLetter, getRandomEntityType } from "@data-js/core";


export function plate(type?: PlateType): string {
    const template = plateTemplates[type ?? getRandomEntityType()].pattern;

    return template
        .replace(/#/g, () => Math.floor(Math.random() * 10).toString())
        .replace(/A/g, () => getRandomLetter());
}