/***
 * 
 * 
 * 함수는 기능을 구현하고 있는 자바스크립트 객체!!
 * 
 * 1. 일반적인 함수 정의(stack frame 생성되는 변수명은 '함수명')
 * function 함수명 (파라미터){
 *      실행문
 *      return 반환값;
 * }
 * 
 * 2. 화살표 함수(Arrow function) 정의
 * const 함수명=(파라미터)=>{ 
 *      실행문 
 *      return 반환값;
 * }
 * 
 * 3. 자바스크립트 엔진에는 빌트인 함수(내장 함수)가 포함되어 있음.
 * parseInt(),parseFloat()..
 * 
 * 4. 함수 호출 : 함수명(파라미터);
 * 
 * parseInt() 함수는 문자열 인자를 파싱하여 특정 진수의 정수형으로 자동 반환합니다
 * 

 */

let str1='110'
let str2='100.3'
let num1=parseInt(str1)
let num2=str2
console.log(num1, typeof num1)
console.log(num2,typeof num2)



//  function test(){
//     console.log(`test!!`)
// }

// const test=()=>{//화살표 함수
//     console.log('test2')
// }

//일반함수 선언

function func_sum(){
    console.log(10+20);
    
}


//화살표 함수 선언

const arrow_sum=()=>{
    console.log(10+20);
}

//함수 호출

func_sum()// 일반 함수는 위치 상관없이 배치하여도 상관없어진다
arrow_sum()//arrow함수는 인터프리터 동작으로 선언 후 배치되어야 함.

// ddd