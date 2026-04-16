import { Title,SubTitle } from "./commons/Titles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faGithub,faLinkedin  } from "@fortawesome/free-brands-svg-icons"

export default function Footer({data}) {

    return (
        <footer id="contact" className="footer">
            <Title Title="Let's Talk"></Title>
            <SubTitle subTitle="com.developer.judy@gmail.com"></SubTitle>
        <ul className="contact-links">
            {data?.list?.map((item,idx)=>{
                return <li key={idx}>
                <a href={item.href} className="contact-link">
                    {item.icon==="faGithub" && <FontAwesomeIcon icon={faGithub}/>}
                    {item.icon==="faLinkedin" && <FontAwesomeIcon icon={faLinkedin}/>}
                    </a>
            </li>
            
            })}
        </ul>
        <p>Junior Software Engineer Judy's Portfolio - All right reserved</p>
    </footer>
    )
}