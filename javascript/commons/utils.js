export function toNumber(num1,num2){
    return {num1:parseInt(num1), num2:parseInt(num2)}
}

export function singleGugudan(a){
    for(let i=1;i<10;i++){
        console.log(`${a}단 : ${a} x ${i}=${a*i}`)
    }
    console.log()
}

export function multiGugudan(a,b){
    
    for(let j=a; j<=b;j++){
        let rows='';
        for(let i=1;i<10; i++){
            
            rows=`${j}단 : ${j} x ${i}=${j*i}`
            console.log(rows)
        }
        console.log()
        
    }
}