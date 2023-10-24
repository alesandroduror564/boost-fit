/* complex_code.js */

// This code demonstrates a complex algorithm for generating prime numbers in JavaScript

function findPrimes(limit) {
  let primes = [2];
  
  for (let number = 3; number <= limit; number += 2) {
    let isPrime = true;
    
    for (let prime of primes) {
      if (number % prime === 0) {
        isPrime = false;
        break;
      }
    }
    
    if (isPrime) {
      primes.push(number);
    }
  }
  
  return primes;
}

function printPrimes(primes) {
  for (let i = 0; i < primes.length; i++) {
    console.log(primes[i]);
    if (i % 10 === 9) {
      console.log('---');
    }
  }
}

const LIMIT = 1000;
const primes = findPrimes(LIMIT);
printPrimes(primes);