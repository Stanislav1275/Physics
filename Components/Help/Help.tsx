import s from "./help.module.css"
import tg from "../../img/tg.svg";
import vk from "../../img/vk.svg";
export const Help = () =>{
    return (
        <aside className={s.help}>
            <div className={s.header}>
                <h1>
                    Если возникнут проблемы с учёбой
                </h1>
            </div>
            <div className={s.soc}>
                <div className={s.tg}>
                    <img width = "50px" src={tg} alt="tg"/>
                </div>
                <div className={s.vk}>
                    <img width = "50px" src = {vk} alt="vk"/>
                </div>
            </div>
        </aside>
    )
}