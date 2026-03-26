/**
 * MDN 사이트에서 Array 클래스 메소드 확인
 * push(), pop()
 */

let numbers=[1,2,3,4,5]

let fruits=new Array('🍋','🍎','🐕','🍊','🍈')

//요소 추가
numbers.push(6)
fruits.push('😁')

console.log(numbers)
console.log(fruits)

//keys()
let itNumbers = numbers.keys();
console.log(itNumbers)

for(const key of itNumbers){
    console.log(key)
}


// 마지막 인덱스 삭제
numbers.pop()
fruits.pop()
console.log(numbers)
console.log(fruits)

//선택적으로 삭제 및 교체
//splice(시작인덱스, 삭제갯수, 교체아이템)
console.log(fruits)
fruits.splice(0,2,'😁')
console.log(fruits)


//요소 추출 slice는 새로운 배열에 저장 후 출력

let num2=numbers.slice(1,3)
console.log(num2 )


console.log()
//얕은 복사.
const sfruits=['🍋','🍎','🐕']
const sfruitsCopy=sfruits.slice(0,sfruits.length)
const sfruitsCopy2=Array.from(sfruits)

//sfruits의 0번째 과일을 딸기로 변경.

sfruits.splice(0,1,'🍓')
console.log(sfruits)
console.log(sfruitsCopy)
console.log(sfruitsCopy2)

const sfruitObj=[
    {name:'r',emoji:'a'},
    {name:'w',emoji:'az'},
    {name:'q',emoji:'axx'}
]

const sfruitObjCopy=sfruitObj.slice(0,sfruitObj.length)
const sfruitObjCopy2= Array.from(sfruitObj)

console.log()

sfruitObjCopy[0].name='tkdudsh'

console.log(sfruitObj)
console.log(sfruitObjCopy)
console.log(sfruitObjCopy2)

let arr1=[1,2,3]
let arr2=[4,5,6]

let arr3=arr1.concat(arr2)

console.log(arr3)

console.clear()
console.log(arr3)

let joins=arr3.join('-')
console.log(joins)
