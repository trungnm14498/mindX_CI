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

/* Set là một kiểu dữ liệu mà trong đấy các phần tử không bao giờ trùng lặp. Nếu có trùng Set sẽ tự ghi đè các phần tử đó.
1. Tạo một Set mới nhận tham số là arr ban đầu
2. Chuyển nó thành [] với spread rồi return
*/
function uniq(arr) {
  return [...new Set(arr)];
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

function mostEl2(arr) {
  const obj = {};
  arr.forEach(item => {
    if (obj.hasOwnProperty(item)) {
      obj[item] = obj[item] + 1;
    } else {
      obj[item] = 1;
    }
  })
  let item = null;
  let max = 0;
  Object.keys(obj).forEach(key => {
    if(obj[key] > max) {
      max = obj[key];
      item = key;
    }
  })
  return {value: `${item}`, count: `${max}`};
}