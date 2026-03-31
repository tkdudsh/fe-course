/**
 * 
 * destructure object : 구조분해 할당.
 * 객체의 구조를 분해하여 변수에 자동으로 할당.
 * 
 */

//1. 배열 객체
let numbers= [1,2,3,4,5]
let aa =numbers[0];
let bb =numbers[1];

let [a,b,...nlist] = numbers;
console.log(a,b,nlist)
let hong = {
    name:'홍길동',
    age: 30,
    job : '개발자'
}
let name=hong.name;
let age=hong.age;
let job=hong.job;
console.log(name,age,job)
//2. 오브젝트 리터럴

const createObj=()=>{
    return {
        aname:'apple',
        color:'red',
        emoji:'🍎'
    }
}

let {aname,color,emoji}=createObj();
console.clear()
console.log(aname,color,emoji)
