/**
 * 
 * 비교 연산자 :> < <= >= == ===
 */

let a=3;
let b=8;

console.log(a>b)
console.log(a<b)
console.log(a>=b)
console.log(a<=b)
console.log(a==b)
console.log(a===b)
console.log()

const obj1 = {name:'홍길동', age:30}
const obj2= { name:'홍길동', age:'30'}

console.log(obj1 == obj2)
console.log(obj1 === obj2)
console.log(obj1.name == obj2.name)
console.log(obj1.age == obj2.age)
console.log(obj1.age === obj2.age)
console.log(typeof obj1.age, typeof obj2.age)