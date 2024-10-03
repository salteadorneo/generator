import { expect, test } from 'vitest';

import { generateDNI, validateDNI, generateNIE, validateNIE, generateCIF, validateCIF } from '../src/utils/nif';

test('Generate DNI', () => {
    const dni = generateDNI();
    expect(dni).toMatch(/^\d{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/);
});

test('Validate DNI', () => {
    expect(validateDNI('12345678Z')).toBe(true);
    expect(validateDNI('12345678A')).toBe(false);
});

test('Generate NIE', () => {
    const nie = generateNIE();
    expect(nie).toMatch(/^[XYZ]\d{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/);
});

test('Validate NIE', () => {
    expect(validateNIE('Z4649540A')).toBe(true);
    expect(validateNIE('X1234567A')).toBe(false);
    expect(validateNIE('Y3435541E')).toBe(true);
    expect(validateNIE('Y1234567A')).toBe(false);
    expect(validateNIE('X3689172H')).toBe(true);
    expect(validateNIE('Z1234567A')).toBe(false);
});

test('Generate CIF', () => {
    let cif = generateCIF()
    expect(validateCIF(cif)).toBe(true);

    cif = generateCIF('A', '01')
    expect(cif).toBe('A01' + cif.slice(3));

    cif = generateCIF('B', '02')
    expect(cif).toBe('B02' + cif.slice(3));
});

test('Validate CIF', () => {
    expect(validateCIF('B56785967')).toBe(true);
    expect(validateCIF('Q0546501H')).toBe(true);
    expect(validateCIF('A53307096')).toBe(true);
    expect(validateCIF('A1234567AA')).toBe(false);
    expect(validateCIF('A1234567AC')).toBe(false);
    expect(validateCIF('B1234567AC')).toBe(false);
    expect(validateCIF('B1234567AA')).toBe(false);
});