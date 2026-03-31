/**
 * 
 * 중복된 배열 객체를 입력받아, 중복을 제거한 후 출력하는 함수 생성
 */

function filter(array){
    return new Set(array)//set 메소드는 중복되는 데이터를 지워줌.
}

let numbers=[1,1,3,4,1,4]
console.log(numbers)
console.log(filter(numbers))

/**
 * 구조 분해 할당
 */

const getObject1 =()=>{
    return{
        name: '홍길동',
        age: 30,
        job: '개발자',
        address: '서울시'
    }
}
const getObject2 =()=>{
    return [1,2,3,4,5]
}

let {name,age,job,address}=getObject1();
let[a,b,c,d,e]=getObject2();
console.log(getObject1())
console.log(getObject2())

//textList를 입력받아, 3글자 이상의 text이면 새로운 배열 생성

const textFilter=(a)=>{
    return a.filter(text=>text.length>=3)
}
  
let result = textFilter(['javascript','react','html','css','a'])


console.log(result)