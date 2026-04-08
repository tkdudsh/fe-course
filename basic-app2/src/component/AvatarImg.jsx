// import People1 from '../assets/people1.webp'
import style from './Avatar.module.css'

export default function AvatarImg({img}){
    return(

        <div >
            <img className={style.avatar_img} src={img} alt="" />

        </div>
    )
}