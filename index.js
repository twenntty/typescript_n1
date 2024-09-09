/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
    return a + b;
  }
  
  /**
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  function subtract(a, b) {
    return a - b;
  }
  
  /**
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  function multiply(a, b) {
    return a * b;
  }
  
  /**
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  function divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero");
    }
    return a / b;
  }
  
  /**
   * @param {string} str
   * @returns {string}
   */
  function toUpperCase(str) {
    return str.toUpperCase();
  }
  
  /**
   * @param {string} str
   * @returns {string}
   */
  function toLowerCase(str) {
    return str.toLowerCase();
  }
  
  /**
   * @param {number} num
   * @returns {boolean}
   */
  function isEven(num) {
    return num % 2 === 0;
  }
  
  /**
   * @param {number} num
   * @returns {boolean}
   */
  function isOdd(num) {
    return num % 2 !== 0;
  }
  
  /**
   * @param {number} min
   * @param {number} max
   * @returns {number}
   */
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  /**
   * @param {string[]} arr
   * @param {string} element
   * @returns {boolean}
   */
  function containsElement(arr, element) {
    return arr.includes(element);
  }
  
  /**
   * @param {number[]} arr
   * @returns {number}
   */
  function sumArray(arr) {
    return arr.reduce((sum, val) => sum + val, 0);
  }
  
  /**
   * @param {number[]} arr
   * @returns {number[]}
   */
  function doubleArray(arr) {
    return arr.map(val => val * 2);
  }
  
  /**
   * @param {number[]} arr
   * @returns {number[]}
   */
  function filterEvenNumbers(arr) {
    return arr.filter(isEven);
  }
  
  /**
   * @param {number[]} arr
   * @returns {number[]}
   */
  function filterOddNumbers(arr) {
    return arr.filter(isOdd);
  }
  
  /**
   * @type {number}
   */
  let counter = 0;
  
  /**
   * @type {string}
   */
  let status = "active";
  
  /**
   * @type {boolean}
   */
  let isActive = true;
  
  /**
   * @param {string} str
   * @returns {boolean}
   */
  function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  }
  
  /**
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  function max(a, b) {
    return a > b ? a : b;
  }
  
  /**
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  function min(a, b) {
    return a < b ? a : b;
  }
  
  /**
   * @param {string} name
   * @param {boolean} isActive
   * @returns {string}
   */
  function getUserStatus(name, isActive) {
    return `${name} is ${isActive ? "active" : "inactive"}`;
  }
  
  /**
   * @param {string} text
   * @returns {string[]}
   */
  function splitByWords(text) {
    return text.split(' ');
  }
  
  /**
   * @param {string} word
   * @returns {string}
   */
  function reverseWord(word) {
    return word.split('').reverse().join('');
  }
  
  /**
   * @param {string} text
   * @returns {string}
   */
  function reverseText(text) {
    return text.split(' ').map(reverseWord).join(' ');
  }
  
  /**
   * @type {string[]}
   */
  let names = ["Alice", "Bob", "Charlie", "David"];