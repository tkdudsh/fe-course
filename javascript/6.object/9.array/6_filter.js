/**
 * 
 * 배열객체에서 필터링을 진행한 후 shallow copy(얕은 복사 진행 후 리턴)
 * 
 * 배열 객체.filter(callback )
 */

let strList =['Saaa','Hong','kima','Lee']

let a=strList.filter((item)=>{
   return item.length>=4 })

console.log(a)

let fruits =['lemonw','Hong','lemon','Lee']

let lemons =fruits.filter((fruits) =>{
    return fruits=='lemon'
})

console.log(lemons)