/**
 * Avatar.jsx - 아바타 이미지 + 이름
 */

import AvatarImage from "./AvatarImage.jsx"
import people1 from "../../assets/people1.webp"
import style from "./Avatar.module.css"

export default function Avatar({name,img}){

    return(

        <>
        <div className={style.avatar}>
            <AvatarImage img={img} style={style.avatar_img_circle}></AvatarImage>
        <p >{name}</p>
        </div>
        
        </>
    )
}


