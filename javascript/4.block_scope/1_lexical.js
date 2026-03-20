/***
 * 
 * block 단위로 실행되는 lexical environment
 * 
 * 
 * {    전역변수
 * 
 *          {지역변수
 * 
 * 
 *              }
 * 
 * 
 * }
 */



{
    let a=10;//전역변수
    console.log(a)
    {
        let b=20//지역변수
        console.log(a,b)
        
        {
            let c=30//지역변수
            console.log(a,b,c)
        }//지역 스코프
    }//지역 스코프
}//전역 스코프