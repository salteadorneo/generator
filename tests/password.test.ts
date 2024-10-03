import { expect, test } from 'vitest';

import { generatePassword } from '@/utils/password';

test('Generate password', () => {
    const password = generatePassword();
    expect(password).toMatch(/^[A-Za-z0-9!"#$%+-:;?@_]{16}$/);

    expect(generatePassword(12)).toMatch(/^[A-Za-z0-9!"#$%+-:;?@_]{12}$/);
});