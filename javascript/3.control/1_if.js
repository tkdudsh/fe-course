/**
 * 단일 if
 * 
 * 삼항 연산자 : (조건절) ? statement1 : statement2; true일 때 statement 1 출력, false일 땐 statement2 출력
 * 
 */

//입력되는 과일 이름이 apple인 경우에만 이모지 출력

let fname='apple';

if(fname=='apple'){
    console.log('🍎')
}else{
    console.log(fname);
}

let result=(fname=='apple') ? '🍎' : 'fname';

console.log("결과 값은 :"+result)

// 선택한 메뉴를 출력
let menus = ['pizza','hotdog','coffee']
if(menus[1]=='pizza'){
    console.log('🍕')
}
else if(menus[1]){
    console.log('🌭')
}
else if(menus[2]){
    console.log('☕')
}
else{
    console.log('메뉴를 선택해 주세요')
}

//홀수이면 사과 짝수면 오렌지

let number=undefined;
number=232 ;

if(!(number%2)){// 조건식의 결과가 0/1이면, 자바스크립트에서는 boolean타입을 자동 변환
    console.log('🍎')
}
else{
    console.log('오렌지')
}
let fruit=undefined;

let a= (!(number%2)) ? fruit='🍎' : fruit='오렌지';
console.log(a)

console.log(`결과값은: ${fruit}`)