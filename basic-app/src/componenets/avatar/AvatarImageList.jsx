import AvatarImage from "./AvatarImage"



export default function AvatarImageList({imgList}){

    return(
        <div>
            {
                imgList.map(img=>
                    <AvatarImage img={img}/>

                )
            }
        </div>
    )
}