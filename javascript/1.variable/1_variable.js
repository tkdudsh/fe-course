/*
ES6기준 문법형식 적용
변수: 데이터를 메모리에 저장하는 공간
변수 선언하는 키워드 :var(잘 안씀), let, const(상수)
-var를 사용하여 진행하는 경우, 중복된 변수가 사용될 수 있으므로 권장 X
-let 변수 선언, 선언한 데이터 수정 가능
-const 상수 선언, 선언한 데이터 수정 불가능

문법: [변수 선언 키워드] 변수명 = 데이터;
*/


//name이라는 변수에 홍길동 데이터 저장
let name='홍길동';
let name2='활빈당';

console.log(name,name2)
console.log(name2)

//number 변수에 정수 100을 저장
let number=100;
console.log(number)

//flag 변수에 true 값을 저장

let flag=true;
console.log(flag)

//cname 변수에 상수로 이순신 저장

const cname='이순신';
console.log(cname)

//동기식: 순차적으로 읽어오면서 실행하는 방법.


