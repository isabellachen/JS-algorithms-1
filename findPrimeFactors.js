function primeFactors(n) {
	let divisor = 3;
	let factors = [];
	let max = Math.round(Math.sqrt(n));

  if (n % 2 === 0) {
  	factors.push(2);
  }

  while (max > divisor) {
  	if (n % divisor === 0) {
    	factors.push(divisor);
      factors.push(n/divisor);
    }
    divisor = divisor + 2;
  }

  if (factors.length === 0) {
  	return "n is prime"
  } else {
  	return "prime factors of n are: " + factors
  }

}

let result =  primeFactors(129) // 3, 43
console.log(result)
