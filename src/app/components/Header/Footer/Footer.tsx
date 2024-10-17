import cssStyle from "./footer.module.css"
export default function Footer(){
    return(
        <footer className={cssStyle.footer}>
            <ul className={cssStyle.ul}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <hr className={cssStyle.hr}></hr>
            <p className={cssStyle.p}>Copyright@Nextjs</p>
        </footer>

    )
}