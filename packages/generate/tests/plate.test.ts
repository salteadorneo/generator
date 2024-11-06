import { expect, test } from 'vitest';

import { plate } from '../src/plate';

test('Plate', () => {
    expect(plate("general")).toMatch(/^\d{4}[A-Z]{3}$/);
    expect(plate("historic")).toMatch(/^H\d{4}[A-Z]{3}$/);
    expect(plate("trailer")).toMatch(/^R\d{4}[A-Z]{3}$/);
    expect(plate("temporary")).toMatch(/^P\d{4}[A-Z]{3}$/);
    expect(plate("diplomatic")).toMatch(/^CD\d{5}$/);
    expect(plate("police")).toMatch(/^CNP\d{5}$/);
});