import { describe, it, expect } from 'vitest';
import {
  reverseWords,
  sumUpTo,
  filterAndSort,
  isPrime,
  flattenObject,
  formatDate
} from './helper';

describe('reverseWords', () => {
  it('should reverse each word in a string while keeping word order', () => {
    expect(reverseWords('hello world')).toBe('olleh dlrow');
    expect(reverseWords('JavaScript is awesome')).toBe('tpircSavaJ si emosewa');
    expect(reverseWords('a')).toBe('a');
  });

  it('should handle empty strings', () => {
    expect(reverseWords('')).toBe('');
  });

  it('should handle strings with multiple spaces', () => {
    expect(reverseWords('hello  world')).toBe('olleh  dlrow');
    expect(reverseWords('  hello world  ')).toBe('  olleh dlrow  ');
  });

  it('should maintain special characters and numbers', () => {
    expect(reverseWords('hello123 world!')).toBe('321olleh !dlrow');
    expect(reverseWords('$special @characters')).toBe('laiceps$ sretcarahc@');
  });
});

describe('sumUpTo', () => {
  it('should calculate sum of numbers from 1 to n', () => {
    expect(sumUpTo(1)).toBe(1);
    expect(sumUpTo(5)).toBe(15); // 1 + 2 + 3 + 4 + 5 = 15
    expect(sumUpTo(10)).toBe(55); // 1 + 2 + ... + 10 = 55
    expect(sumUpTo(100)).toBe(5050);
  });

  it('should return 0 for negative numbers', () => {
    expect(sumUpTo(-5)).toBe(0);
    expect(sumUpTo(-100)).toBe(0);
  });

  it('should return 0 for 0', () => {
    expect(sumUpTo(0)).toBe(0);
  });

  it('should handle decimal numbers by returning 0', () => {
    expect(sumUpTo(5.5)).toBe(0);
    expect(sumUpTo(10.1)).toBe(0);
  });

  it('should handle non-number inputs by returning 0', () => {
    expect(sumUpTo('5')).toBe(0);
    expect(sumUpTo(null)).toBe(0);
    expect(sumUpTo(undefined)).toBe(0);
    expect(sumUpTo({})).toBe(0);
    expect(sumUpTo([])).toBe(0);
  });
});

describe('filterAndSort', () => {
  it('should filter numbers greater than threshold and sort them in ascending order', () => {
    expect(filterAndSort([5, 3, 8, 1, 6], 4)).toEqual([5, 6, 8]);
    expect(filterAndSort([10, 5, 2, 7, 8], 5)).toEqual([7, 8, 10]);
    expect(filterAndSort([1, 2, 3, 4, 5], 0)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return empty array if no numbers are greater than threshold', () => {
    expect(filterAndSort([1, 2, 3, 4, 5], 5)).toEqual([]);
    expect(filterAndSort([1, 2, 3], 10)).toEqual([]);
  });

  it('should handle empty arrays', () => {
    expect(filterAndSort([], 5)).toEqual([]);
  });

  it('should handle arrays with negative numbers', () => {
    expect(filterAndSort([-3, -2, -1, 0, 1], -2)).toEqual([-1, 0, 1]);
    expect(filterAndSort([-5, -10, -15], -12)).toEqual([-10, -5]);
  });

  it('should handle arrays with duplicate values', () => {
    expect(filterAndSort([5, 5, 3, 3, 7, 7], 4)).toEqual([5, 5, 7, 7]);
  });
});

describe('isPrime', () => {
  it('should correctly identify prime numbers', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(7)).toBe(true);
    expect(isPrime(11)).toBe(true);
    expect(isPrime(13)).toBe(true);
    expect(isPrime(17)).toBe(true);
    expect(isPrime(19)).toBe(true);
    expect(isPrime(23)).toBe(true);
    expect(isPrime(29)).toBe(true);
  });

  it('should correctly identify non-prime numbers', () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(6)).toBe(false);
    expect(isPrime(8)).toBe(false);
    expect(isPrime(9)).toBe(false);
    expect(isPrime(10)).toBe(false);
    expect(isPrime(12)).toBe(false);
    expect(isPrime(15)).toBe(false);
    expect(isPrime(21)).toBe(false);
    expect(isPrime(25)).toBe(false);
  });

  it('should return false for non-positive integers', () => {
    expect(isPrime(0)).toBe(false);
    expect(isPrime(-1)).toBe(false);
    expect(isPrime(-7)).toBe(false);
  });

  it('should return false for non-integer values', () => {
    expect(isPrime(3.5)).toBe(false);
    expect(isPrime(2.1)).toBe(false);
  });

  it('should return false for non-number inputs', () => {
    expect(isPrime('7')).toBe(false);
    expect(isPrime(null)).toBe(false);
    expect(isPrime(undefined)).toBe(false);
    expect(isPrime({})).toBe(false);
    expect(isPrime([])).toBe(false);
  });
});

describe('flattenObject', () => {
  it('should flatten a nested object with dot notation', () => {
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

  it('should handle empty objects', () => {
    expect(flattenObject({})).toEqual({});
  });

  it('should handle objects with no nesting', () => {
    const input = { a: 1, b: 2, c: 3 };
    expect(flattenObject(input)).toEqual(input);
  });

  it('should handle arrays in objects', () => {
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

  it('should handle null values', () => {
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
  it('should format date strings to ISO format YYYY-MM-DD', () => {
    expect(formatDate('2023-01-15')).toBe('2023-01-15');
    expect(formatDate('01/15/2023')).toBe('2023-01-15');
    expect(formatDate('January 15, 2023')).toBe('2023-01-15');
  });

  it('should pad single digit months and days with leading zeros', () => {
    expect(formatDate('2023-5-9')).toBe('2023-05-09');
    expect(formatDate('5/9/2023')).toBe('2023-05-09');
  });

  it('should return "Invalid Date" for invalid date strings', () => {
    expect(formatDate('not a date')).toBe('Invalid Date');
    expect(formatDate('2023-13-45')).toBe('Invalid Date'); // Invalid month and day
    expect(formatDate('')).toBe('Invalid Date');
  });

  it('should handle various date formats', () => {
    expect(formatDate('2023/05/20')).toBe('2023-05-20');
    expect(formatDate('05-20-2023')).toBe('2023-05-20');
    expect(formatDate(new Date(2023, 4, 20))).toBe('2023-05-20'); // May 20, 2023
  });
});