import { expect, test } from 'vitest';

import { iban } from '../src/iban';

test('IBAN', () => {
    expect(iban({ countryCode: "ES" }).length).toBe(24);
    expect(iban({ countryCode: "CH" }).length).toBe(21);
});