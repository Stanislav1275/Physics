import s from './menu_item.module.css';
import {
    Link
} from "react-router-dom";
//@ts-ignore
export const MenuItem = ({title}) => {
  return(
      <div className = {s.menu_item}>
          <a href={"/"+title.link}>{title.title}</a>


      </div>
  )
}