/**
 * Rest Parameter : 파라미터 인자를 배열로 저장.
 * 함수의 매개변수에 정의함
 * function 함수명(...Rest Parameter)
 * const 함수명 = (...Rest Parameter)
 */

function add( a,b, ...numbers){
    let sum = numbers.reduce((acc,cur)=>
        acc+cur
    )
    console.log(a,b,numbers,sum)
    return a+b+sum;
}

let result1=add(1,2,3,4,5)
let result2=add(1,2,3,4,5,6,5,3,2,3)
console.log(result1,result2)

const fadd= (f1, ...fruits)=>{
    console.log(f1,...fruits)
    //return {f1,...fruits}
    return [f1, ...fruits]
}

let fruits=['a','b','c']
let fobj=fadd('d',...fruits )
console.log(fobj)