/**
 * 객체에 값을 추가하는 함수 정의
 * 
 * CRUD 프로그램(create,replace,Update,Delete)
 */

import { deleteValue,getvalue,setvalue,updateValue } from "../commons/object.js";



const hong ={
    name:'홍길동',
    age:30
}
const apple = {
    name:'사과',
    color:'발강',
    size:'중간'
}


//property value 추가
setvalue(hong,'address','서울시 강남구')
console.log(hong)
console.log('------------')
getvalue(hong,'name')
// console.log(hong)
console.log(getvalue(hong,'name'))


updateValue(apple,'name','망고')
console.log(apple)
deleteValue(hong,'address')
console.log(hong)