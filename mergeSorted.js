function mergeSorted (a,b) {
	let result = [];
  let i = 0;
  let j = 0;

  while (i < a.length || j < b.length) {
  	if (a[i] < b[j] || a[i] && !b[j]) {
    	result.push(a[i])
      i++
    } else {
    	result.push(b[j])
      j++
    }
  }

  return result
}

let result = mergeSorted([2,5,6,9,10,11,29], [1,2,3,29,30,34])
console.log(result)
