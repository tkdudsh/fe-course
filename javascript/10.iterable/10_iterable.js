/**
 * Iterable: Iteration Protocal을 준수하는 객체
 * 
 * for ..of 구문
 * String, Array, Set, Map
 * 
 * ...(Spread Operator : 스프레드 연산자): 블록 안에서 객체의 데이터를 전개함
 * ...(Rest Parameter) : 매개변수 모든 값을 배열로 저장.
 * ...(Destructring object: 구조분해 할당) : 객체를 분해한 후 변수에 할당
 */

//String 개체 생성 후 for ...of 구문 사용

let strLIst = new String('Hello JavaScript')

for(let str of strLIst){
    console.log(str)
}

// let numbers =new Number(12345)

// for(let num of numbers){ 넘버 클래스는 for of 불가능
//     console.log(num)
// }

//Array 객체 생성 후 for...of 사용
let numbers = [1,2,3,4,5]
for(num of numbers){
    console.log(num)
}

console.log()
numbers.forEach(element => {
    console.log(element)
});

let findnum=numbers.find((item)=>{
    return item===3
})
console.log(findnum)

let filnum=numbers.filter((item)=>{
    return item%2==0
})

console.log(filnum)


//map() 모든 요소에 10 더하기

let plusNum=numbers.map((item)=>{
    return item+10;
})

console.log(plusNum)