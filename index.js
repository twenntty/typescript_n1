function add(a, b) {
    return a + b;
  }
  
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
     * @param {number} a
     * @param {number} b
     * @returns {number}
     */

  function toUpperCase(str) {
    return str.toUpperCase();
  }
  
  function toLowerCase(str) {
    return str.toLowerCase();
  }
    
    /**
     * @param {number} a
     * @param {number} b
     * @returns {number}
     */

  function isEven(num) {
    return num % 2 === 0;
  }
  
  function isOdd(num) {
    return num % 2 !== 0;
  }
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function containsElement(arr, element) {
    return arr.includes(element);
  }
    
    /**
     * @param {number} a
     * @param {number} b
     * @returns {number}
     */
    
  function sumArray(arr) {
    return arr.reduce((sum, val) => sum + val, 0);
  }
  
  function doubleArray(arr) {
    return arr.map(val => val * 2);
  }
  
  function filterEvenNumbers(arr) {
    return arr.filter(isEven);
  }
  
  function filterOddNumbers(arr) {
    return arr.filter(isOdd);
  }
  
  let counter = 0;
  
  let status = "active";
  
  let isActive = true;
  
  function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  }
  
  function max(a, b) {
    return a > b ? a : b;
  }
  
  function min(a, b) {
    return a < b ? a : b;
  }
  
  function getUserStatus(name, isActive) {
    return `${name} is ${isActive ? "active" : "inactive"}`;
  }
  
  function splitByWords(text) {
    return text.split(' ');
  }
  
  function reverseWord(word) {
    return word.split('').reverse().join('');
  }
  
  function reverseText(text) {
    return text.split(' ').map(reverseWord).join(' ');
  }
  
  let names = ["Alice", "Bob", "Charlie", "David"];
  
  function printNames() {
    names.forEach(name => {
      console.log(name);
    });
  }
  
  function generateArray(n) {
    return Array.from({ length: n }, (_, i) => i + 1);
  }
  
  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  
  function capitalizeWords(words) {
    return words.map(capitalize);
  }
  
  function startsWithUpperCase(str) {
    return /^[A-Z]/.test(str);
  }
  
  function endsWithPeriod(str) {
    return str.endsWith('.');
  }
  
  function filterSentencesWithPeriod(sentences) {
    return sentences.filter(endsWithPeriod);
  }
  
  function factorial(n) {
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
  function gcd(a, b) {
    while (b !== 0) {
      let t = b;
      b = a % b;
      a = t;
    }
    return a;
  }
  
  function findMax(arr) {
    return Math.max(...arr);
  }
  
  function findMin(arr) {
    return Math.min(...arr);
  }
  
  function concatenateStrings(arr) {
    return arr.join(' ');
  }
  
  function average(arr) {
    return sumArray(arr) / arr.length;
  }
  
  function squareArray(arr) {
    return arr.map(num => num * num);
  }
  
  function productArray(arr) {
    return arr.reduce((product, val) => product * val, 1);
  }
  
  // Виведемо деякі результати
  console.log(add(10, 5));
  console.log(subtract(10, 5));
  console.log(multiply(10, 5));
  console.log(divide(10, 2));
  console.log(toUpperCase("hello"));
  console.log(getRandomInt(1, 100));
  console.log(sumArray([1, 2, 3, 4, 5]));
  console.log(isPalindrome("madam"));
  console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
  console.log(factorial(5));
  