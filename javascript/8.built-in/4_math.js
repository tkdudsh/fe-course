/**
 * 
 * Math클래스 - 모든 메소드와 속성이 static으로 정의되어 있음
 * - 호출 : Math.메소드명(), Math.속성 
 */
 
let a= -1234.56789;

console.log(Math.abs(a))// 절대값
console.log(Math.floor(a))//
console.log(Math.trunc(a))// 소수점 삭제
console.log(Math.round(a))// 소수점 반올림 후 출력.
console.log(a.toFixed(2))// n번 째 자리수 까지 출력(반올림 후.) 
console.log(Math.min(1,2,3,4,5))// 1
console.log(Math.max(1,2,3,4,5))//5
console.log(Math.random())// n번 째 자리수 까지 출력(반올림 후.) 

let ran=Math.random()*100+1 //0~1까지의 숫자출력 *100 +1
console.log(parseInt(ran))

const rand=()=>{
    return parseInt(Math.random()*100+1)
}

console.log()
console.log(rand())

