/*****
 * 
 * 변수명 작성 규칙
 * -라틴어(0~9, a~z,A~Z)
 * -특수문자($ _ 사용가능, 이외의 특수문자는 사용 불가)
 * -Camel case : 첫글자 소문자로 시작, 단어의 첫 시작은 대문자. camelCase
 * -Pascal Case: 첫글자와 중간단어의 첫 시작은 대문제. Pascal Case
 * -Snake Case: 소문자로 시작, 중간 단어 연결시 _사용. snake_case
 * 
 * 
 * mdn 자바 스크립트 공식문서
 */

let myName=('홍길동')
let my_age=19;

let output="저으 ㅣ이름은 +"+my_age;
console.log(output)

// 템플릿 리터럴:   ` ㅁㅁㅁㅁ ${변수}`
let output2=`나의 이름은 ${myName} 나이는 ${my_age}`;
console.log(output2)