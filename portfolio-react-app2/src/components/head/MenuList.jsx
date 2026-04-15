import Menu from "./Menu"
export default function MenuList({menu, listClass}){
    return(
        <nav>
            <ul className={listClass}>
                {menu.map((item, idx)=>(
                    <Menu key={idx} href={item.href} itemClass={item.style} name={item.name}/>
                ))}
            </ul>
        </nav>
    )
}