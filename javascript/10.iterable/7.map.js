/**
 * Map : key,value 를 한쌍의 데이터로 가지는 객체
 * 
 * set(key,value) :데이터 추가
 * get(key):데이터 반환
 * has(key): 데이터 체크
 * delete(key): 데이터 삭제
 */

let fruitsMap=new Map()

console.log(fruitsMap, typeof fruitsMap)

fruitsMap.set('lemon','aa');
console.log(fruitsMap.get('lemon'))

let emoji=(fruitsMap.has('lemon')? 'bb' : 'cc')

console.log(emoji)

//삭제
//데이터 x: 추가, 데이터 o : 삭제
//오렌지 삭제

if(fruitsMap.has('orange')){
    fruitsMap.delete('orange')
}
else{
    fruitsMap.set('orange')
}
console.log(fruitsMap)
