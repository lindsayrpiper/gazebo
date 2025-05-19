import {
  reverseWords,
  sumUpTo,
  filterAndSort,
  isPrime,
  flattenObject,
  formatDate
} from './helper';

describe('reverseWords', () => {
  test('reverses characters in each word while maintaining word order', () => {
    expect(reverseWords('hello world')).toBe('olleh dlrow');
    expect(reverseWords('JavaScript is awesome')).toBe('tpircSavaJ si emosewa');
  });

  test('handles empty string', () => {
    expect(reverseWords('')).toBe('');
  });

  test('handles single word', () => {
    expect(reverseWords('test')).toBe('tset');
  });

  test('handles multiple spaces', () => {
    expect(reverseWords('hello  world')).toBe('olleh  dlrow');
  });
});

describe('sumUpTo', () => {
  test('calculates sum from 1 to n correctly', () => {
    expect(sumUpTo(5)).toBe(15); // 1 + 2 + 3 + 4 + 5 = 15
    expect(sumUpTo(10)).toBe(55); // 1 + 2 + ... + 10 = 55
    expect(sumUpTo(0)).toBe(0);
  });

  test('returns 0 for negative numbers', () => {
    expect(sumUpTo(-5)).toBe(0);
  });

  test('returns 0 for non-integers', () => {
    expect(sumUpTo(5.5)).toBe(0);
    expect(sumUpTo('5')).toBe(0);
    expect(sumUpTo(null)).toBe(0);
    expect(sumUpTo(undefined)).toBe(0);
  });
});

describe('filterAndSort', () => {
  test('filters values greater than threshold and sorts them', () => {
    expect(filterAndSort([5, 2, 8, 1, 7], 3)).toEqual([5, 7, 8]);
    expect(filterAndSort([10, 5, 15, 20], 7)).toEqual([10, 15, 20]);
  });

  test('returns empty array when no values pass the threshold', () => {
    expect(filterAndSort([1, 2, 3], 5)).toEqual([]);
  });

  test('handles empty array input', () => {
    expect(filterAndSort([], 5)).toEqual([]);
  });

  test('handles negative thresholds', () => {
    expect(filterAndSort([-5, -2, 0, 3], -3)).toEqual([-2, 0, 3]);
  });

  test('maintains sort order with duplicate values', () => {
    expect(filterAndSort([5, 10, 5, 8, 10], 4)).toEqual([5, 5, 8, 10, 10]);
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
    expect(isPrime(8)).toBe(false);
    expect(isPrime(9)).toBe(false);
    expect(isPrime(10)).toBe(false);
  });

  test('returns false for non-integer values', () => {
    expect(isPrime(3.5)).toBe(false);
    expect(isPrime('3')).toBe(false);
  });

  test('returns false for negative numbers', () => {
    expect(isPrime(-7)).toBe(false);
  });

  test('returns false for zero', () => {
    expect(isPrime(0)).toBe(false);
  });
});

describe('flattenObject', () => {
  test('flattens nested objects with dot notation', () => {
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

  test('handles empty objects', () => {
    expect(flattenObject({})).toEqual({});
  });

  test('handles objects with arrays', () => {
    const input = {
      a: [1, 2, 3],
      b: {
        c: [4, 5]
      }
    };
    const expected = {
      'a': [1, 2, 3],
      'b.c': [4, 5]
    };
    expect(flattenObject(input)).toEqual(expected);
  });

  test('handles objects with null values', () => {
    const input = {
      a: null,
      b: {
        c: null
      }
    };
    const expected = {
      'a': null,
      'b.c': null
    };
    expect(flattenObject(input)).toEqual(expected);
  });
});

describe('formatDate', () => {
  test('formats dates correctly in YYYY-MM-DD format', () => {
    expect(formatDate('2023-01-15')).toBe('2023-01-15');
    expect(formatDate('2023/01/15')).toBe('2023-01-15');
    expect(formatDate('01/15/2023')).toBe('2023-01-15');
  });

  test('zero-pads month and day when needed', () => {
    expect(formatDate('2023-5-9')).toBe('2023-05-09');
  });

  test('handles Date objects', () => {
    const date = new Date(2023, 0, 15); // Jan 15, 2023
    expect(formatDate(date)).toBe('2023-01-15');
  });

  test('returns "Invalid Date" for invalid date strings', () => {
    expect(formatDate('not a date')).toBe('Invalid Date');
    expect(formatDate('2023-13-40')).toBe('Invalid Date');
  });
});