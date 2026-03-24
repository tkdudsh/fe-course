import { getObjects,createObject,deleteObject, getObject, setvalue, getvalue, updateValue, deleteValue } from "../commons/object.js";
// import * as object from "../commons/object.js";


//객체생성
let addressBook =getObjects();
createObject('hong')

//홍길동 주소 갖고오기
let hong=getObject('hong')

//3.name,age,address 추가

setvalue(hong,'name','홍길동')
setvalue(hong,'age',29)
setvalue(hong,'address','서울시')

//4. name,address 출력
console.log(getvalue(hong,'name'))
console.log();

console.log(addressBook)

//5.주소 업데이트

updateValue(hong,'address','부산시')

console.log(addressBook)
//6.주소 삭제

deleteValue(hong,'address')
console.log()
console.log(addressBook)

deleteObject('hong')
console.log('``````````  ````')
console.log(addressBook)


