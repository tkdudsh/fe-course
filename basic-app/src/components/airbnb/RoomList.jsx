import { useState,useEffect } from "react"
import RoomAvatar from "./RoomAvatar"
import {fetchData} from "../../util.js/fetch"



export default function RoomList(){

    //fetch를 통해 리스트 갖고오기
    const [list, setList]=useState([])
    useEffect(()=>{
        const loadData= async ()=>{
            const data= await fetchData("http://localhost:5173/data/airbnb.json")
            setList(data.roomList)
        }
        loadData()
    },[])
    

    return(
        <div style={{display:"flex"}}>

    {list.map((item,idx)=>
        <RoomAvatar
        key={idx}
        item={item}
        ></RoomAvatar>
    )}


        </div>
    )
}