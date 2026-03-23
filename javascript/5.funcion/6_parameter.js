/**
 * 
 * 함수 호출 --> 파라미터(인자, 입력되는 값) --> 함수의 변수에 자동 매핑
 * 
 * 래스트 파라미터(Rest Parameter): '...'
 */

console.log(add(1,2,3,4,5,6,7,8,9))
// console.log(add(1,2,3))
// console.log(add(1,2,3,4))

// function add(n1,n2){//매개변수,지역변수
//     return n1+n2
// }

// function add(n1,n2,n3){
//     return n1+n2+n3
// }
// function add(n1,n2,n3,n4){
//     return n1+n2+n3+n4
// }

function add(...args){//args는 배열임

    // let sum=0;
    // for(let i=0; i<args.length;i++){
    //     sum +=args[i];
    // }


    //reduce: 배열이 갖는 함수.
    let sum=  args.reduce((sum,curValue) => sum+curValue,0);
    return sum;
}

// console.log(add2(1,2,3,4,2,32))
// function add2(a,b,...args){
//     return args
// }
