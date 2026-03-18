// <!-- primitive datatype

// 정수형: integer: 100,200 (-2**32 ~~ 2**31-1)
// 실수형: float,Double: 3.14
// 문자형(Character: '',"")
// 불린형(Boolean): true(1)/false(0)
// 정수형의 범위를 넘어서면 heap에 저장됨
// 실수형,문자형ㅇ은 heap에 저장 후 포인터(변수)는 stack frame에 선언

//  reference datatype

//  객체형(object), 배열(array), 크래스(class), json
 
// -->

let inumber1=2**31-1;
let inumber2=2**31;
console.log(inumber1,inumber2)


//실수형
let fnumber1=1234.12345678;
console.log(fnumber1)

//문자형
let name="홍길동"
console.log(name)

//불린형
let bool=true;
console.log(bool)

//배열
let nameArray=['사','영','노']
console.log(nameArray)

let obj={
    "name":'사영노',
    "age" : 27
}
console.log(obj)

// JSON
let jsonObj = {
    "name": '홍길동',
    "score":[1,2,3]
}
console.log(jsonObj)

//초기화 값, 객체

let x=undefined; //Primitive 초기화
let y=null; //Reference 초기화


//typeof: 데이터 비교

let xx=10;
let xxx=10;
let yy='10'
let oo={'name':'oject'}

//데이터 타입 확인
console.log(xx,typeof xx)
console.log(yy,typeof yy)
console.log(oo,typeof oo)
// 데이터 타입 확인 및 비교
console.log(typeof xx == typeof xxx)
console.log(typeof xx == typeof yy)
console.log(xx== yy)
console.log(xx=== yy)
