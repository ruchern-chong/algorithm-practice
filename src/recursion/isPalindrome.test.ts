import isPalindrome from './isPalindrome';

describe('isPalindrome', () => {
  test('should return palindrome for string with 0 or 1 character', () => {
    expect(isPalindrome('')).toBe(true);
    expect(isPalindrome('a')).toBe(true);
  });

  test('should return true for words that are a palindrome', () => {
    expect(isPalindrome('eye')).toBe(true);
    expect(isPalindrome('rotor')).toBe(true);
    expect(isPalindrome('race car')).toBe(true);
  });

  test('should return false for words that are not a palindrome', () => {
    expect(isPalindrome('motor')).toBe(false);
  });
});
