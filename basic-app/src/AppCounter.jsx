import { useState } from 'react'
import BasicCounter from './componenets/counter/BasicCounter.jsx'

export default function App(){

    const [totalCount,setTotalCount] = useState(0)

    const handleTotalCount=(type)=>{
        if(type==="+"){
            setTotalCount(totalCount+1)
        }
        else{
            setTotalCount(totalCount-1)
        }
        

    }

    return (
        <div>
            <h1>Total Count::<span>{totalCount}</span></h1>

            <BasicCounter click={handleTotalCount} total={totalCount}></BasicCounter>
            <BasicCounter click={handleTotalCount} total={totalCount}></BasicCounter>
            <BasicCounter click={handleTotalCount} total={totalCount}></BasicCounter>
        

        </div>
        
    )
}