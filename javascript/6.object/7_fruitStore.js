import { deleteObject, Fruit ,getObject,getObjects, setObject, setvalue } from "../commons/object.js";


//스토어 생성
let store=getObjects();
console.log(store)
//과일 생성
let apple=new Fruit ('apple','🍎')
let lemon=new Fruit ('lemon','🍋')

//스토어 게시
setObject('apple',apple)// 오브젝트안의 'apple'네임을 선언후 그 안의 프로퍼티(위에서 만든 생성자) 선언
setObject('lemon',lemon)// 오브젝트안의 'apple'네임을 선언후 그 안의 프로퍼티(위에서 만든 생성자) 선언
console.log(store)

setvalue(apple,'name','사과')
console.log(store)

//스토어 삭제
deleteObject('apple')   
console.log(store)
//지금 생성된 object는 apple이 프로퍼티고 그 이후가 밸류값임.
// objects={
//     apple:{
//         name:'apple',
//         emoji:'🍎'
//     }
// }


