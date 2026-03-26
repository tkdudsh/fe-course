/**
 * String 문자열 클래스
 * 
 * -character를 하나씩 배열에 저장
 * splite(), slice(), charAt(), toUpperCase()
 */

let str='홍길동'
let strObj=new String('홍길동')
let str2="Tkdudsh HOeloow"
console.log(str2.split('d'))//d를 기준으로 나눈 후 배열에 저장.
console.log(str2.slice(2,3))//2~3미만 인덱스 출력.
console.log(str.charAt(2))//원하는 인덱스 출력
console.log(0)

console.log(str2.toUpperCase())
console.log(str2.toLowerCase())
console.log(str2.concat(', funck'))//concat 추가

let str3='          tkdudsh        '
console.log(str3)
console.log(str3.trim())//앞 공백 삭제
console.log(str3.trimEnd())//뒷 공백 삭제


//문자열 추출 substring(), slice()
let str4='hello javascript'
console.log(str4.substring(3,6))
console.log(str4.slice(3,6))

