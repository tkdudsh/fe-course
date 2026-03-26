/**
 * forEach 메서드. Iterator 심볼 객체를 상속한 객체에서 사용됨.
 */







let numbers = [1,2,3,4,5,6]

numbers.forEach((item)=>{console.log(item)})
numbers.forEach((item,idx)=>{console.log(item,idx)})//첫번째 인덱스는 요소. 두번째 인덱스는 요소의 인덱스  

let fruits= new Array('apple','mango','lemon','mango2','melon')

fruits.forEach((item)=>{console.log(item)})

fruits.forEach((item,idx)=>{

    if(item=='mango2'){
        fruits.splice(idx,1,'딸기')//idx번째의 요소 1개를 딸기로 변경
    }
    console.log(item)
})

console.log(fruits)

let idx=0
for(const item of fruits){
    if(item=='딸기'){
        fruits.splice(idx,1,'망고')//idx번째의 요소 1개를 딸기로 변경
    }
}
console.log(fruits)