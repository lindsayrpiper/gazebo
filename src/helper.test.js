import {
  reverseWords,
  sumUpTo,
  filterAndSort,
  isPrime,
  flattenObject,
  formatDate
} from './helper';

describe('reverseWords', () => {
  test('reverses characters in each word', () => {
    expect(reverseWords('hello world')).toBe('olleh dlrow');
  });

  test('handles empty string', () => {
    expect(reverseWords('')).toBe('');
  });

  test('handles single word', () => {
    expect(reverseWords('javascript')).toBe('tpircsavaj');
  });

  test('preserves spaces', () => {
    expect(reverseWords('a b  c')).toBe('a b  c');
  });
});

describe('sumUpTo', () => {
  test('calculates sum correctly for positive integers', () => {
    expect(sumUpTo(5)).toBe(15); // 1+2+3+4+5 = 15
    expect(sumUpTo(10)).toBe(55); // 1+2+...+10 = 55
  });

  test('returns 0 for n=0', () => {
    expect(sumUpTo(0)).toBe(0);
  });

  test('returns 0 for negative numbers', () => {
    expect(sumUpTo(-5)).toBe(0);
  });

  test('returns 0 for non-integer values', () => {
    expect(sumUpTo(3.5)).toBe(0);
    expect(sumUpTo('string')).toBe(0);
    expect(sumUpTo(null)).toBe(0);
    expect(sumUpTo(undefined)).toBe(0);
  });
});

describe('filterAndSort', () => {
  test('filters numbers above threshold and sorts them', () => {
    expect(filterAndSort([5, 2, 8, 1, 9], 4)).toEqual([5, 8, 9]);
  });

  test('returns empty array when no numbers are above threshold', () => {
    expect(filterAndSort([1, 2, 3], 5)).toEqual([]);
  });

  test('handles empty array', () => {
    expect(filterAndSort([], 10)).toEqual([]);
  });

  test('sorts in ascending order', () => {
    expect(filterAndSort([30, 10, 20], 5)).toEqual([10, 20, 30]);
  });
});

describe('isPrime', () => {
  test('identifies prime numbers correctly', () => {
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

  test('identifies non-prime numbers correctly', () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(6)).toBe(false);
    expect(isPrime(8)).toBe(false);
    expect(isPrime(9)).toBe(false);
    expect(isPrime(10)).toBe(false);
    expect(isPrime(12)).toBe(false);
    expect(isPrime(15)).toBe(false);
  });

  test('returns false for negative numbers', () => {
    expect(isPrime(-5)).toBe(false);
    expect(isPrime(-11)).toBe(false);
  });

  test('returns false for non-integer values', () => {
    expect(isPrime(3.5)).toBe(false);
    expect(isPrime('11')).toBe(false);
    expect(isPrime(null)).toBe(false);
    expect(isPrime(undefined)).toBe(false);
  });
});

describe('flattenObject', () => {
  test('flattens nested objects', () => {
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

  test('keeps arrays as is', () => {
    const input = {
      a: [1, 2, 3],
      b: {
        c: [4, 5, 6]
      }
    };
    
    const expected = {
      'a': [1, 2, 3],
      'b.c': [4, 5, 6]
    };
    
    expect(flattenObject(input)).toEqual(expected);
  });

  test('handles null values', () => {
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
  test('formats date correctly', () => {
    expect(formatDate('2023-05-15T12:00:00Z')).toBe('2023-05-15');
  });

  test('pads month and day with zeros', () => {
    expect(formatDate('2023-1-5')).toBe('2023-01-05');
  });

  test('handles different date formats', () => {
    expect(formatDate('May 15, 2023')).toBe('2023-05-15');
  });

  test('returns "Invalid Date" for invalid dates', () => {
    expect(formatDate('not a date')).toBe('Invalid Date');
    expect(formatDate(null)).toBe('Invalid Date');
    expect(formatDate(undefined)).toBe('Invalid Date');
  });
});