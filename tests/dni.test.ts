import { expect, test } from 'vitest';

import { generateDNI, validateDNI } from '../src/utils/dni';

test('generateDNI()', () => {
    const dni = generateDNI();
    expect(dni).toMatch(/^\d{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/);
});

test('validateDNI()', () => {
    expect(validateDNI('12345678Z')).toBe(true);
    expect(validateDNI('12345678A')).toBe(false);
});