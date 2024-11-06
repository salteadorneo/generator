import { expect, test } from 'vitest';

import { password } from '../src/password';

test('Password', () => {
    expect(password()).toMatch(/^[A-Za-z0-9!"#$%+-:;?@_]{16}$/);

    expect(password(12)).toMatch(/^[A-Za-z0-9!"#$%+-:;?@_]{12}$/);
});