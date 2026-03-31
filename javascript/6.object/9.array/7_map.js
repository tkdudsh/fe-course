/**
 * 
 * 배열의 모든 요소를 순회하면서 콜백함수의 조건을 적용하여 새로운 배열 생성 후 반환.
 */

let numbers=[1,3,4,2,4,62,3,2]


let a=numbers.map((item)=>{
    return item*100
})

console.log(a)


let fnumbers=[1.3, 32.2 ,121.1]


let b=fnumbers.map(item => {parseInt(item)})
console.log(b)