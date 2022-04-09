import s from './menu.module.css'
import {MenuItem} from "./menu_item/menu_item";



//@ts-ignore

let menuItems = 4;
//@ts-ignore

export const Menu = ({themes,active}) => {
    //@ts-ignore
    let menuItems = themes.map(theme => {
        if(active)
            return <MenuItem title={theme}></MenuItem>
    });


   // @ts-ignore
    return (

       <div className={!(active) ? s.__menu__ : s.__menu__active}>
           {menuItems}
       </div>
       )

}
