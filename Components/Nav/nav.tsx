import s from './nav.module.css'
import icon from '../../img/icons/down.svg'
import ReactDOM from 'react-dom'
import {Menu} from "../../Components/UI/UX/Menu/menu";
import {useState} from 'react'

//@ts-ignore
export const Nav = ({themes}) => {
    const [active, setActive] = useState(false);
    return (
        <>
            <Menu  active = {active} themes={themes}></Menu>

            <nav
            className = {s.nav}
            onClick = {() => setActive(!active)}
        >

            <div
                className={s.left}
            >
                <h1>Каталог тем</h1>
            </div>
            <div className={s.right}>
                <div
                    className={s.__left__}

                >
                    <h1>Открыть</h1>
                </div>
                <div
                    className={(!active)?s.__right__:s.__right__active}

                >
                    <img src={icon} alt="^"/>
                </div>
            </div>
        </nav>
        </>
    )
}