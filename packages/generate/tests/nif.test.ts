import { expect, test } from 'vitest';

import { dni, nie, cif } from '../src/nif';

test('DNI', () => {
    expect(dni()).toMatch(/^\d{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/);
});

test('NIE', () => {
    expect(nie()).toMatch(/^[XYZ]\d{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/);
});

test('CIF', () => {
    let value = cif({ entityType: 'A', provinceCode: '01' })
    expect(value).toBe('A01' + value.slice(3));

    value = cif({ entityType: 'B', provinceCode: '02' })
    expect(value).toBe('B02' + value.slice(3));
});