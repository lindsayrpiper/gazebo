import {
  reverseWords,
  sumUpTo,
  filterAndSort,
  isPrime,
  flattenObject,
  formatDate
} from './strParse';

describe('reverseWords', () => {
  test('reverses each word in a string', () => {
    expect(reverseWords('hello world')).toBe('olleh dlrow');
    expect(reverseWords('JavaScript is awesome')).toBe('tpircSavaJ si emosewa');
  });

  test('handles empty string', () => {
    expect(reverseWords('')).toBe('');
  });

  test('handles string with multiple spaces', () => {
    expect(reverseWords('word  with  spaces')).toBe('drow  htiw  secaps');
  });

  test('handles single word', () => {
    expect(reverseWords('reverse')).toBe('esrever');
  });
});

describe('sumUpTo', () => {
  test('calculates sum from 1 to n correctly', () => {
    expect(sumUpTo(5)).toBe(15); // 1+2+3+4+5 = 15
    expect(sumUpTo(10)).toBe(55); // 1+2+...+10 = 55
    expect(sumUpTo(1)).toBe(1);
    expect(sumUpTo(0)).toBe(0);
  });

  test('returns 0 for negative numbers', () => {
    expect(sumUpTo(-5)).toBe(0);
  });

  test('returns 0 for non-integer numbers', () => {
    expect(sumUpTo(5.5)).toBe(0);
  });

  test('returns 0 for non-number inputs', () => {
    expect(sumUpTo('5')).toBe(0);
    expect(sumUpTo(null)).toBe(0);
    expect(sumUpTo(undefined)).toBe(0);
  });
});

describe('filterAndSort', () => {
  test('filters numbers greater than threshold and sorts them', () => {
    expect(filterAndSort([5, 2, 8, 1, 9], 4)).toEqual([5, 8, 9]);
    expect(filterAndSort([10, 5, 15, 20], 10)).toEqual([15, 20]);
  });

  test('returns empty array when no numbers pass the threshold', () => {
    expect(filterAndSort([1, 2, 3], 5)).toEqual([]);
  });

  test('handles empty array', () => {
    expect(filterAndSort([], 10)).toEqual([]);
  });

  test('maintains correct sorting for negative numbers', () => {
    expect(filterAndSort([-10, -5, -15, -20], -12)).toEqual([-10, -5]);
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
    expect(isPrime(19)).toBe(true);
    expect(isPrime(23)).toBe(true);
  });

  test('correctly identifies non-prime numbers', () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(6)).toBe(false);
    expect(isPrime(8)).toBe(false);
    expect(isPrime(9)).toBe(false);
    expect(isPrime(10)).toBe(false);
    expect(isPrime(12)).toBe(false);
    expect(isPrime(15)).toBe(false);
  });

  test('returns false for non-integers', () => {
    expect(isPrime(3.5)).toBe(false);
  });

  test('returns false for negative numbers', () => {
    expect(isPrime(-5)).toBe(false);
  });

  test('returns false for 0', () => {
    expect(isPrime(0)).toBe(false);
  });
});

describe('flattenObject', () => {
  test('flattens a nested object with dot notation', () => {
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

  test('handles empty object', () => {
    expect(flattenObject({})).toEqual({});
  });

  test('handles object with array values', () => {
    const input = {
      a: [1, 2, 3],
      b: { c: [4, 5, 6] }
    };
    const expected = {
      'a': [1, 2, 3],
      'b.c': [4, 5, 6]
    };
    expect(flattenObject(input)).toEqual(expected);
  });
});

describe('formatDate', () => {
  test('formats date string to YYYY-MM-DD format', () => {
    expect(formatDate('2023-05-15')).toBe('2023-05-15');
    expect(formatDate('May 15, 2023')).toBe('2023-05-15');
    expect(formatDate('05/15/2023')).toBe('2023-05-15');
  });

  test('pads month and day with leading zeros', () => {
    expect(formatDate('2023-1-5')).toBe('2023-01-05');
    expect(formatDate('January 5, 2023')).toBe('2023-01-05');
  });

  test('returns "Invalid Date" for invalid date strings', () => {
    expect(formatDate('not a date')).toBe('Invalid Date');
    expect(formatDate('2023-13-45')).toBe('Invalid Date');
    expect(formatDate(undefined)).toBe('Invalid Date');
  });
});