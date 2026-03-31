/**
 * 
 * 배열에서 검색하려는 첫번째 요소를 반환, 없으면 undefined 반환
 * 
 * 배열객체.find(callback)
 */

let fruits = new Array('apple','딸기','망고','포도','레몬')

let findObj=fruits.find((item)=>
        //let findObj=undefined;

item =='딸기'
    //return findObj;
)
console.log(findObj)
