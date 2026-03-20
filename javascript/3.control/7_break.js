/**
 * 반복문을 강제 종료하는 방법
 * -break : break를 만나면 바로 종료.
 * -조검식 : false 조건으로 만듦
 */

// 1~10까지 반복
for(let i=1; i<=10; i++){
    console.log(`i=${i}`);
    if(i==7){
        break;
    }
}