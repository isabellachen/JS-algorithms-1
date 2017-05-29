function isPrime(n) {
	let divisor = 3;
  let max = Math.round(Math.sqrt(n));

  if (n % 2 === 0) {
  	return "n is not prime"
  }

  while (divisor < max) {
  	if (n % divisor === 0) {
    	return "n is not prime"
    }
    divisor = divisor + 2
  }

	return "n is prime"
}

let result = isPrime(157)
console.log(result)
