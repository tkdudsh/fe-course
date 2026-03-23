/**
 * 
 * 함수 생성 및 호출
 * 
 * 
 */
//데이터 타입에 상관없이 add 함수가 정상적으로 실행되도록 문자=>변환하는 함수 생성
import { toNumber } from "../commons/utils.js"
const convert=(a,b)=>{

    let obj=toNumber(a,b)
    console.log(`${obj.a + obj.b}`)
}

convert(2,1)

function toNumber(num1,num2){
    return {num1:parseInt(num1), num2:parseInt(num2)}
}
//두 수를 입력하여, 합계를 출력.


add(100,200);
add(100,234);

function add(a,b){ //a,b add 블록에서만 존재하는 지역변수로 선언
    console.log(a+b)// 호이스팅 방식.
}


//화살표 함수
//호이스팅 되지 않으므로, 반드시 선언 후에 호출되어야 함.
const add3=(num1,num2)=>{
    console.log(num1+num2)
}
add3(100,300)
add3(209,191)