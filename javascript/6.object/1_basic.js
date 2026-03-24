/***
 * object : 
 * 
 * -{}, 다양한 데이터 타입을 저장
 * -object literal, {property(key) : value}
 * JSON 에서는 property(key)를 반드시 문자열로 정의
 */

const hong = { 
    name:'홍길동',
    age:30
}

hong.name='홍길순'
hong.age=23

console.log(hong)

//프로퍼티를 통한 값 삭제

delete hong.name;
console.log(hong);