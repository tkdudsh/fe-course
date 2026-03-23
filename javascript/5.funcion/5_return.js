/**
 * return: 함수 실행 결과를 반환 키워드
 * 
 * 반환 결과가 1개 값=> 변수
 * 반환 결과가 1개 이상 값 => 객체
 */

function add1(){
    //console.log(`sum= ${1+2}`)
    return 1+2
}

add1();

console.log(add1());
let result=add1();
console.log(result)

function createObj(name,age){

    return{
        name:name,
        age:age
    }
}

let hong= createObj('홍길동',30) 
let lee= createObj('이순신',40) 
console.log(hong)
console.log(lee)

let ObjList=[
    createObj('홍',30),
    createObj('이',30),
    createObj('박',30)
]


console.log(ObjList)

console.log("-----------------");

for(let i=0;i<ObjList.length; i++){
    console.log(ObjList[i])
}