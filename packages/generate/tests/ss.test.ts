import { expect, test } from 'vitest';

import { ss } from '../src/ss';

test('SS', () => {
    expect(ss().length).toBe(12);
});