function permute(str) {

  let arr = str.split('');
  let result = [];

  if (arr.length === 1) {
    return str;
  }

  for (let i=0; i<arr.length; i++) { //picker for keystone character
    let rest = arr.slice();
    let picked = rest.splice(i,1); //remove keystone char from rest
    let restPerms = permute(rest.join('')) //performs permute on substr, returns an array
      for (let j=0; j<restPerms.length; j++) {
        let chunk = picked.concat(restPerms[j])
        result.push(chunk.join(''))
      }
  }
  
  return result;
}

let result = permute('dog')
console.log(result)
