import { expect, test } from 'vitest';

import { generateDNI, validateDNI } from '../src/utils';

test('generateDNI()', () => {
    const dni = generateDNI();
    expect(dni).toMatch(/^\d{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/);
});

test('validateDNI()', () => {
    expect(validateDNI('12345678Z')).toBe(true);
    expect(validateDNI('12345678A')).toBe(false);
});

test('Math.sqrt()', () => {
    expect(Math.sqrt(4)).toBe(2);
    expect(Math.sqrt(144)).toBe(12);
    expect(Math.sqrt(2)).toBe(Math.SQRT2);
});