export default function Menu({href, itemClass, name}){
    return(
        <li>
            <a href={href} className={itemClass}>{name}</a>
        </li>
    )
}