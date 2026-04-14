import AvatarImage from "../commons/AvatarImage"

export default function Logo({img,alt,style}){

    return(
        <>
        <div className="header-logo">
            <AvatarImage img={img} alt={alt} style={style}/>
        <h1 class="header-logo-title">Judy</h1>
        </div>
        
        </>
    )
}