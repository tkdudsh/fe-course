/**
 * 
 * 함수는 객체이고 힙에 저장됨
 * 
 * 일반적인 함수 형식(function)으로 선언되면, 호이스팅 되어 전역으로 맨 먼저 힙에 저장된다.
 * 
 */
import { toNumber } from "../commons/utils.js"



function add(num1,num2){
    let obj=toNumber(num1,num2);
    console.log(`sum= ${obj.num1 + obj.num2}`)
}

add(100,'200')

