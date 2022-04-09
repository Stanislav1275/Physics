import s from './header.module.css'
import logo from "../../img/icons/logo.svg"
import auth from "../../img/icons/auth (2).svg"
import {useState} from 'react'
import {BurgerMenu} from "../BurgerMenu/BurgerMenu";
export const Header = () => {
    const [active, setActive] = useState(false);
    return (
      <header>
          <BurgerMenu active = {active}></BurgerMenu>
          <div className={s.logo}>
              <a href="/main">
                  <h1>PH</h1>
              </a>
                  <a href="/main">
                      <img src={logo} alt="logo"/>
                  </a>

          </div>
          <div
              onClick = {(e) => {
                  setActive(() => !active)
              }}
              className={(active)?s.auth__active:s.auth}
          >
              <img src={auth} alt="auth"/>
          </div>
      </header>
  )
}