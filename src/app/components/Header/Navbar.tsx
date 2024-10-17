import cssStyle from "./navbar.module.css"
import Link from "next/link";

export default function NavBar() {
    return (
        <nav className={cssStyle.nav}>
            <h1 className={cssStyle.h1}>NextJs</h1>
            <ul className={cssStyle.ul}>
                <li><Link href={"./"}>Home</Link></li>
                <li><Link href={"./about"}>About</Link></li>
                <li><Link href={"./contact"}>Contact</Link></li>
            <button className={cssStyle.button}>Sign up</button>
            </ul>
        </nav>
    )

}
