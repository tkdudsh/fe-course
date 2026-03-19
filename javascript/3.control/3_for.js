/**
 * 
 * 제어문: 반복 실행
 * for : 반복 횟수를 알고 있는 경우
 * whille : 종료 시점을 알고 있는 경우.
 * 
 * for(초기값; 조건절; 증가값){
 *      실행문;
 * }
 */

for(let i=1;i<=10;i++){
    console.log(`i=${i}`);
}

//숫자 배열을 생성하고 내용을 출력
const array=[12,3,4,2,55,6,]

for(let i=0;i<array.length; i++){
    console.log(`array${i}의 값은 ${array[i]}`)
}


console.log()
let fruit=['apple','orange','lemon','mango','banana']
let emojis=['🍎','🍊','🍋','🥭','🍌']


for(let i=0;i<fruit.length;i++){
    if(fruit[i]=='lemon'){
        console.log(`${fruit[i]}의 이모지: ${emojis[i]}`)
        break;
    }
    
}