import { expect, test } from 'vitest';

import { generatePassword } from '../src/utils';

test('generatePassword()', () => {
    const password = generatePassword();
    expect(password).toMatch(/^[A-Za-z0-9!"#$%+-:;?@_]{16}$/);
});