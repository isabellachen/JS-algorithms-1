function removeDuplicates (arr) {
	let obj = {}
  arr.forEach(n => obj[n] ? obj[n] ++ : obj[n] = 1)

  return Object.keys(obj)
}

let result = removeDuplicates([1,3,3,3,1,5,6,7,8,1])
console.log(result)
