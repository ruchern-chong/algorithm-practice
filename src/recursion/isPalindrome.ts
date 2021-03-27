/**
 * Check if a given string is a palindrome
 *
 * @param str
 */
const isPalindrome = (str: string): boolean => {
  const strLowerCase = str.toLowerCase().replace(/\s+/g, '');
  const reversedStr = strLowerCase.split('').reverse().join('');

  return reversedStr === strLowerCase;
};

export default isPalindrome;
