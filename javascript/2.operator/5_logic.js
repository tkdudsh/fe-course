/**
 * 
 * 논리 연산자 : &&, ||
 * 
 * &&은 논리식이 모두 true일 때만 true 값
 * ||은 논리식이 하나만 true여도 true 값
 */

let a =3;
let b=7;
// true=1
//false=0
console.log('----- && : AND -----')

console.log((a>b)&&(a>b))
console.log((a<b)&&(a<b))
console.log((a==b)&&(a <b))
console.log((a<b)&&(a!==b))
console.log()

console.log((a>b)||(a>b))
console.log((a<b)||(a<b))
console.log((a==b)||(a <b))
console.log((a<b)||(a!==b))


//로그인 처리 (패스워드 && 아이디) 비교 로직 구현
let userID ="test"
let userPass="1234"
if(userID=='test' && userPass=='1234'){

}