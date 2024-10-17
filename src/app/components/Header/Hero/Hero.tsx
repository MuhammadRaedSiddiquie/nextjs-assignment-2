
import cssStyle from "./hero.module.css"
export default function Hero(prop: { heading: string | number | bigint | boolean | null}){
    return(
        <div className={cssStyle.div}>
            <span className={cssStyle.span}></span>
            <span className={cssStyle.span}></span>
            <span className={cssStyle.span}></span>
            <h1 className={cssStyle.h1}>{prop.heading}</h1>
        </div>
    )
}