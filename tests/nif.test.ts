import { expect, test } from 'vitest';

import { generateDNI, validateDNI, generateNIE, validateNIE } from '../src/utils/nif';

test('generateDNI()', () => {
    const dni = generateDNI();
    expect(dni).toMatch(/^\d{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/);
});

test('validateDNI()', () => {
    expect(validateDNI('12345678Z')).toBe(true);
    expect(validateDNI('12345678A')).toBe(false);
});

test('generateNIE()', () => {
    const nie = generateNIE();
    expect(nie).toMatch(/^[XYZ]\d{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/);
});

test('validateNIE()', () => {
    expect(validateNIE('Z4649540A')).toBe(true);
    expect(validateNIE('X1234567A')).toBe(false);
    expect(validateNIE('Y3435541E')).toBe(true);
    expect(validateNIE('Y1234567A')).toBe(false);
    expect(validateNIE('X3689172H')).toBe(true);
    expect(validateNIE('Z1234567A')).toBe(false);
});