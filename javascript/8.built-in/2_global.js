/**
 * 전역 함수로 최상위 객체인 Window 객체에서 호출되는 함수.
 * -호출방법: window.함수명
 * -객체명을 생략가능.
 *  ex) window.alert(), window.confirm(), parseInt ( Number.parseInt/window.parseInt)
 * 
 *  window를 사용하려면 브라우저에서 실행할 때 사용. 
 * 
 * 전역객체
 * -encodeURI(), decodeURI()
 */

let number ='123.45667'
let intNum=Number.parseInt(number)
let intNum2=parseInt(number)

console.log(number)
console.log(intNum, typeof intNum)
console.log(intNum2,typeof intNum2)

//URI 주소 인코딩, 디코딩

let uri='http://www.naver.com?name=홍길동';
let encodeUri = encodeURI(uri);
let decodeUri = decodeURI(encodeUri);

console.log(uri)
console.log(encodeUri)
console.log(decodeUri)