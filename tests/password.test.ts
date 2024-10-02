import { expect, test } from 'vitest';

import { generatePassword } from '../src/utils/password';

test('generatePassword()', () => {
    const password = generatePassword();
    expect(password).toMatch(/^[A-Za-z0-9!"#$%+-:;?@_]{16}$/);
});