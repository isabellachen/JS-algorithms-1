function findSubstring (str, subStr) {
 let i = 0;
 let j = 0;
 let start;

 while (i !== str.length && j !== subStr.length) { //if i or j increments to the end, break out of loop
    if (str[i] === subStr[j]) {
    	start = i;
			i ++;
      j ++;
    } else if ((str[i] !== subStr[j]) && j === 0) {
    	if (i === str.length-1) {
      	return -1; //if i has incremented to the end of str and j is still at 0, subStr is not found
      }
      i ++;
    } else if (str[i] !== subStr[j]) {
    	i ++;
      j -- ;//if the next char is not found in subStr[j], start from the top with subStr
    }
 }
 return i-subStr.length;
}

let result = findSubstring ('abbcdabbbbbck', 'bbbck');
console.log(result);
