import EffectCounter from "./components/effects/EffectCounter"

import EffectFetch from "./components/effects/EffectFetch"
import { useState } from "react"

export default function App(){
    const [show,setShow]=useState(true)

    return(

        <>
        {show && <EffectCounter></EffectCounter>}
        <button onClick={()=>{
            setShow(!show)
            
        }}>{ show ===true ?"감추기" : "보이기"
            }</button>

            <hr></hr>

            <EffectFetch></EffectFetch>
            
            
            
            
            </>


        
    )
}