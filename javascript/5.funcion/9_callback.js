/**
 * callback(콜백)함수 - 함수의 파라미터에 입력되는 익명함수
 * 
 * */

const job=(a,b,callback)=>{
    //console.log(a,b)
    callback(a,b)
}

job(1,2,(a,b) => {console.log(a,b)});
job(1,2,(a,b) => {console.log(a+b)});

console.clear();
console.log('로그출력 1');

//비동기식 함수:setTimeout(funRef(callback),delay)
//내장함수, 전역함수
setTimeout(()=>{console.log('settime 실행결과')},1000);//1초 후에 입력한 콜백함수를 실행하는 함

console.log('로그출력2');


