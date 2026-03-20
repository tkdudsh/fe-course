

// for(let i=2; i<10; i++){
//     console.log(i+'단')
//     for(let j=1; j<10;j++){

//         console.log(`${i} x ${j} = ${i*j}`)
//     }
//     console.log()
// } 

// for(let i=1; i<10; i++){
//     let output=''
//     for(let j=2; j<10;j++){

//         output += `${j} x ${i} = ${j*i} \t`
//     }
//     console.log(output)
// } 

// for(let i=1;i<=5; i++){
//     let output='';
//     // for(let j=0;j<i;j++){
//     //     output +='*'
//     // }
//     output += '*'.repeat(i);
//     console.log(output)
// }

// console.log()
// for(let i=1;i<=5; i++){
//     let output='';
//     for(let j=0;j<i;j++){
//         if(i==3){
//             output+='🍎'
//         }
//         else{
//             output +='🍏'
//         }
//     }
//     console.log(output)
// }

let space='';
for(let i=1;i<=5;i++){
    let output = '';
    let space= '';
    space +=' '.repeat(5-i)
    output +='🍏'.repeat(i)

    // console.log('====================================');
    console.log(space,output);
    // console.log('====================================');
}
for(let i=4;i>= 1;i--){
    let output = '';
    let space= '';
    space +=' '.repeat(5-i)
    output +='🍏'.repeat(i)

    // console.log('====================================');
    console.log(space,output);
    // console.log('====================================');
}