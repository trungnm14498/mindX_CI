**Câu 1:** `var` khai báo một biến có phạm vi trong block?
1. False

**Câu 2:** `const` khai báo một biến có phạm vi trong block?
1. True

**Câu 3:** `let` khai báo một biến có phạm vi trong block?
1. True

**Câu 4:** Giá trị sau cùng của `obj` trong ví dụ sau là gì?
```jsx
const obj = { foo: 1 }
obj.bar = 2
```
3. `{foo: 1, bar: 2}`

**Câu 5:** Kết quả của ví dụ sau đây là gì?
```jsx
const speed = 'quick'
`The ${speed} brown fox jumps over the lazy dog.`
```
4. 'The quick brown fox jumps over the lazy dog.’

**Câu 6:** Giá trị của câu lệnh `obj[123]` trong ví dụ sau:
```jsx
const obj = {

}
```
1. `undefined`

**Câu 7:** Giá trị của `array` trong ví dụ sau:
```jsx
const array = [1, 2, 3]
const extension = [4, 5, 6]

array = [...extension, ...array]
```
4. `Error`

**Câu 8:** Giá trị của a trong ví dụ sau?
```jsx
function mystery(...params) {
	return params
}
let a = mystery(1, 23, 4);
```
2. `[1, 23, 4]`


**Câu 9:** Giá trị của biểu thức sau?
```jsx
[...[..."..."]].length
```
1. `3`

**Câu 10:** Giá trị của a và b với ví dụ sau?
```jsx
let a = 12, b = 3;
[a, b] = [b, a];
```
2. a = 3, b = 12


**Câu 11** Giá trị của obj sau trong ví dụ sau?
```jsx
const obj = {
	name: "MindX"
}
const sayHello = (x) => {
	let {name} = x
  name = "Code Intensive"
}
sayHellO(obj)
```
1. `{name: “MindX”}`<br>
*Nếu call function sayHellO ở trên cố tình viết sai thì sẽ là Error*

**Câu 12:** Giá trị của biểu `arr` trong ví dụ sau?
```jsx
let arr = [1, 2, 3, 4, 5]
arr.map(item => {
  if (item % 2 === 0) {
		return item;
  }
	return item * 2;
})
```
2. `[2, 2, 6, 4, 10]`


**Câu 13:** Giá trị của `total` trong ví dụ sau?
```jsx
const arr = [1, 2, 3, 4, 5]
const total = arr.filter(item => item % 2 === 0)
								 .reduce((value, item) => value + item , 10)
```
4. `16`