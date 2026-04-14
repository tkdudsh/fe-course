import Menu from "./Menu";

export default function MenuList({menus,style}){

    return
    <nav>
        <ul className={style}>
             {
        menus.map((menu,idx)=>{

            <li key={idx}>
                <Menu href={menu.href} className={menu.style} name={menu.name}></Menu>
            </li>
            


        })
    }
        </ul>
    </nav>

   
}