/**
 * callback: 함수의 인자에 입력되는 함수로직,anonymous(무기명) 함수.
 * -setTimeout(callback,delay)
 */

function runDelay(callback,delay){
    setTimeout(callback,delay);
}

runDelay(()=>{
    console.log(`3초 후에 task queue에 저장`)
},3000) //3초 후에 task Queue에 저장, 콜스택이 callback 함수 실행(콘솔에 찍히는 시간이 3초가 아님.)

runDelay(function(){
    console.log(`task queue에 바로 저장`)//마찬가지로 console에 찍히는 시간이 아닌 task queue에 저장되는 시간이 0초임.
})

runDelay(()=>{
    console.log(`1초 후에 task queue에 저장`)
},1000)

console.log(`---프로그램 종료---`)