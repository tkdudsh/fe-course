/**
 * Set: 다양한 데이터 저장
 * add() : 데이터 추가
 * has() : epdlxj cpzm
 * delete() : 데이터삭제
 * 
 * 중복된 데이터는 자동 필터링됨.
 */

let mySet =new Set();

mySet.add(100)
mySet.add('홍길동')
mySet.add({name:'apple'})
mySet.add([1,2,3,4,5])
mySet.add('100')
//중복되는 데이터는 자동 필터링됨.
console.log(mySet)

for(const value of mySet){
    if(mySet.has('홍길동')){
            console.log(value);
    }
     

}