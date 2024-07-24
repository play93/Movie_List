
# 알아두면 좋은 내용들 

```
// 화살표 함수 - 1
const add = (x, y) => {
	return x + y
};
console.log(add(2, 3)); // 5


// 화살표 함수 - 2
const add = (x, y) => x + y;
console.log(add(2, 3)); // 5
```
화살표 함수 1,2 의 차이점
=> 화살표 함수 2는 1과 달리 해당 줄의 표현식이 암묵적으로 반환 값이 되므로 'return'을 생략하고 함수 본문이 한줄로 작성되어야 함! 
