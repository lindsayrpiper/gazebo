import {
  reverseWords,
  sumUpTo,
  filterAndSort,
  isPrime,
  flattenObject,
  formatDate
} from './helper';

describe('reverseWords', () => {
  test('reverses characters in each word but maintains word order', () => {
    expect(reverseWords('hello world')).toBe('olleh dlrow');
  });

  test('handles empty string', () => {
    expect(reverseWords('')).toBe('');
  });

  test('handles single word', () => {
    expect(reverseWords('test')).toBe('tset');
  });

  test('preserves multiple spaces between words', () => {
    expect(reverseWords('hello  world')).toBe('olleh  dlrow');
  });
});

describe('sumUpTo', () => {
  test('calculates sum correctly for positive integers', () => {
    expect(sumUpTo(5)).toBe(15); // 1+2+3+4+5 = 15
    expect(sumUpTo(10)).toBe(55); // 1+2+...+10 = 55
  });

  test('returns 0 for negative numbers', () => {
    expect(sumUpTo(-5)).toBe(0);
  });

  test('returns 0 for non-integer values', () => {
    expect(sumUpTo(3.5)).toBe(0);
  });

  test('returns 0 for non-number inputs', () => {
    expect(sumUpTo('5')).toBe(0);
    expect(sumUpTo(null)).toBe(0);
    expect(sumUpTo(undefined)).toBe(0);
  });
});

describe('filterAndSort', () => {
  test('filters values above threshold and sorts them', () => {
    expect(filterAndSort([10, 5, 3, 8, 1], 4)).toEqual([5, 8, 10]);
  });

  test('returns empty array when no values are above threshold', () => {
    expect(filterAndSort([1, 2, 3], 5)).toEqual([]);
  });

  test('handles empty array input', () => {
    expect(filterAndSort([], 10)).toEqual([]);
  });

  test('sorts negative numbers correctly', () => {
    expect(filterAndSort([-10, -5, -3, -8, -1], -6)).toEqual([-5, -3, -1]);
  });
});

describe('isPrime', () => {
  test('correctly identifies prime numbers', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(7)).toBe(true);
    expect(isPrime(11)).toBe(true);
    expect(isPrime(13)).toBe(true);
    expect(isPrime(17)).toBe(true);
  });

  test('correctly identifies non-prime numbers', () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(6)).toBe(false);
    expect(isPrime(9)).toBe(false);
    expect(isPrime(15)).toBe(false);
  });

  test('returns false for negative numbers', () => {
    expect(isPrime(-7)).toBe(false);
  });

  test('returns false for non-integer values', () => {
    expect(isPrime(3.5)).toBe(false);
  });

  test('returns false for non-number inputs', () => {
    expect(isPrime('7')).toBe(false);
  });
});

describe('flattenObject', () => {
  test('flattens nested objects into a single level', () => {
    const input = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3
        }
      }
    };
    const expected = {
      'a': 1,
      'b.c': 2,
      'b.d.e': 3
    };
    expect(flattenObject(input)).toEqual(expected);
  });

  test('handles arrays as values', () => {
    expect(flattenObject({ a: [1, 2, 3] })).toEqual({ a: [1, 2, 3] });
  });

  test('handles empty objects', () => {
    expect(flattenObject({})).toEqual({});
  });
});

describe('formatDate', () => {
  test('formats date string in YYYY-MM-DD format', () => {
    expect(formatDate('2023-01-15T12:30:45Z')).toBe('2023-01-15');
    expect(formatDate('January 20, 2023')).toBe('2023-01-20');
  });

  test('returns "Invalid Date" for invalid date strings', () => {
    expect(formatDate('not a date')).toBe('Invalid Date');
  });
});