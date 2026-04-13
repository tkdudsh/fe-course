import { useEffect, useState } from "react"

export default function EffectCounter(){

    const [count,setCount]=useState(0)
    
    useEffect(()=>{
        console.log('mount')
        return ()=>{
            console.log('unmount')
        }
        
    },[count])
    return(
        <div  style={{width:'400px',
            textAlign:'center', border:'1px solid black'
        }}>
            <h1>{count}</h1>
            <button type="button" onClick={()=>setCount(count+1)}>증가</button>
            <button type="button" onClick={()=>setCount(count-1)}>감소</button>
        </div>
    )
}