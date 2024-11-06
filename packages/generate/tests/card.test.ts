import { expect, test } from 'vitest';

import { card } from '../src/card';

test('Card', () => {
    expect(card().securityCode.length).toBe(3);
});