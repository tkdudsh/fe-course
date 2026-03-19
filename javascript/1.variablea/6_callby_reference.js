/***
 * 
 * call by reference : 데이터 중복 시 주소 복제
 * - 값이 heap에 저장되어 있는 경우
 */

let name1='홍길동';
let name2=name1;
let name3=new String("홍길동");
let name4=name3

console.log(name1,typeof name1)
console.log(name2,typeof name2)
console.log(name3,typeof name3)
console.log(name1 === name2)
console.log(name1 === name3)
console.log(name4 === name3)

let nlist = [1,2,3,4,5];

let nlist2=nlist

console.log(nlist===nlist2)
console.log(nlist==nlist2)

let person={
    'name':'사영노',
    'age': 27
}

let person2=person

person2.name='이순신'
console.log(person.name,person2.name)// person2를 수정하여도 person은 바뀌지 않는다 주소만 복제되기때문.(인터프리터 실시간 변화되는 내용을 출력)