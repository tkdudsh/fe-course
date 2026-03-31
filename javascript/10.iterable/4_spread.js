/**
 * 
 * Spread Operator
 * 
 * -객체가 가지고 있는 요소를 펼쳐 놓음
 * iterable object, object literal
 * 함수 호출 : 예) myFunction(...객체명)
 * 배열,스트링,오브젝트 리터럴 : 예) let testArray = [...객체명]
 */

let numbers= [1,2,3,4,5];
let copyNumbers=[...numbers] // Array.from() 주소 공유를 하지 않아 별도의 객체 생성인
let copyNumbers1=[...numbers,100,...copyNumbers]

console.log(numbers, typeof numbers)
console.log(copyNumbers, typeof copyNumbers)
console.log(copyNumbers1, typeof copyNumbers1)

//오브젝트 리터럴 복사

let fruit = {
    name:'apple',
    emoji:'🍏'
}

let copyFruit = {...fruit}

let updateFruit={ 
    ...fruit,
    color:'red'
}
console.log(fruit,typeof fruit)
console.log(copyFruit,typeof copyFruit)
console.log(updateFruit, typeof updateFruit)

let list=[
    {...fruit},
    {...copyFruit}
]
console.log(list)