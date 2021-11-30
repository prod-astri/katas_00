function gap(gap, min, max) {
  let current = min;
  let prime = 2;
  let nextPrime = 3;
  while (current <= max) {
    if (isPrime(current)) {
      prime = nextPrime;
      nextPrime = current;
      if (nextPrime - prime === gap) {
        return [prime, nextPrime];
      }
    }
    current++;
  }
  return null;
}

function myIsPrime(num) {
  const boundary = Math.floor(Math.sqrt(num));
  for (var i = 2; i <= boundary; i++) {
    if (num % i === 0) return false;
  }
  return num >= 2;
}

function isPrime(num) {
  for (var i = 2; i*i <= num; i++) {
    if (num % i === 0) return false;
  }
  return num >= 2;
}

gap(2, 100, 110);
gap(4, 100, 110);
