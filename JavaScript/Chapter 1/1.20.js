function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

console.log(gcd(206, 40)); // 2

// normal-order: remainder is called 25 times
// applicative-order: remainder is called 4 times
