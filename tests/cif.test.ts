import { expect, test } from 'vitest';

import { generateCIF, validateCIF } from '../src/utils/cif';

test('generate', () => {
    let cif = generateCIF()
    expect(validateCIF(cif)).toBe(true);

    cif = generateCIF('A', '01')
    expect(cif).toBe('A01' + cif.slice(3));

    cif = generateCIF('B', '02')
    expect(cif).toBe('B02' + cif.slice(3));
});

test('validate', () => {
    expect(validateCIF('B56785967')).toBe(true);
    expect(validateCIF('Q0546501H')).toBe(true);
    expect(validateCIF('A53307096')).toBe(true);
    expect(validateCIF('A1234567AA')).toBe(false);
    expect(validateCIF('A1234567AC')).toBe(false);
    expect(validateCIF('B1234567AC')).toBe(false);
    expect(validateCIF('B1234567AA')).toBe(false);
});