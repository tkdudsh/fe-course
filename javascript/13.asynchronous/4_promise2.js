// 비동기식 함수를 포함하고 있을 때 동기식보다 비동기식을 먼저 출력하려면 await를 붙여준다 **async와 await는 반드시 같이 있어야함.
/**
 * async는 await를 포함한 함수 앞에 붙임
 * await는 실행되는 비동기 객체 앞에 붙임
 */
async function promiseTest(){
    let dataArray = null;

    let promise1 = new Promise((resolve,reject)=>{
        let numbers=[1,2,3,4,5]
        resolve(numbers)
    })

    await promise1
    .then((result)=> dataArray=result)
    .catch((error)=>{
        console.log('error')
    })

    console.log(dataArray)
}

promiseTest()