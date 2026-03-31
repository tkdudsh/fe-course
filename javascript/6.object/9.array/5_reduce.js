/**
 * 
 * 배열의 누적합을 구하는 메소드
 * 배열객체.reduce(callback)
 * 
 * 4개의 인자를 가진다
 * acc,cur,idx,src
 */

const numbers= [1,2,13,4,5];
let sum=0;

sum=numbers.reduce((acc,cur)=>{return acc +cur})//배열을 돌면서 누적값인 acc에 cur를 계속 더해준다.
console.log(sum)


let max=numbers.reduce((acc,cur)=>{return Math.max( acc ,cur)})
console.log(max)