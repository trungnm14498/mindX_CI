const reverseString = (string) => {
    return string.split("").reverse().join("")
}

const reverseString2 = (string) => {
  let result ="";
  for (let i=string.length-1; i>=0; i--) {
    result += string[i];
  }
  return result
}

const dupEl = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) == index);
}

const mostEl = (arr) => {
  let count = 0, max = 0, most = 0;
  for (let i=0; i< arr.length; i++) {
    for (let j=i; j<arr.length; j++) {
      if (arr[i] == arr[j]) {
        count += 1;
        if (count > max) {
          max = count;
          most = arr[i];
        }
      }  
    }
    count = 0;
  }  
  return {value: `${most}`, count: `${max}`};
}