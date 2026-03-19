/**
 * 
 * 제어문 : 조건 분기
 * 
 * switch(조건: 숫자 , 문자){
 *      case 숫자, 문자 : 
 *      실행문;
 *      break;
 * 
 *      case 숫자, 문자 : 
 *      실행문;
 *      break;
 * 
 *      case 숫자, 문자 : 
 *      실행문;
 *      break;
 * 
 *      default : 실행문;// case에 맞지않는 조건일 경우 default 실행.
 * }
 */

// 선택한 숫자에 해당하는 요일을 출력
// 0: 월요일 1:화요일 2: 수요일 3: 목요일 4: 금요일

let result=undefined;
switch(2){
    case 0:
        //console.log('월요일')
        result='월요일';
        break;
    case 1:
        //console.log('화요일')
        result='화요일';
        break;//break없을 시 수요일까지 출력된다.
    case 2:
        //console.log('수요일')
        result='수요일';
        break;

    default : //console.log('목금토일') 
    result='요일을 고르세요';
}

console.log(result)

console.log()
//입력받은 숫자가 홀수이면 사과, 짝수이면 오렌지

let number=100;

let fruit=undefined;

switch (number%2) {
    case 0:
        fruit='오렌지'
        break;

    default:
        fruit='사과'
        break;
}

console.log(fruit)