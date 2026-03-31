

let numbers2=new Number(12345)

try {
    for(const number of numbers2){
        console.log(number)
    }
    
} catch (error) {
    console.log('오류')
    
} finally{
    console.log('num 실습')
}