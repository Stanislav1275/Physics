import s from './burgerMenu.module.css'
//@ts-ignore
export const BurgerMenu = ({active})=>
    (
        <div className = {(active)?s.bgmenu_active:s.bgmenu}>
            <div className={(!active)?s.bgm_content:s.bgm_content_active}>
                <div className={s.bgm_content_item}>
                    <a href="">
                        <h6>Profile</h6>
                    </a>

                </div>
                <div className={s.bgm_content_item}>
                    <a href="">
                        <h6>Login</h6>
                    </a>
                </div>
                <div className={s.bgm_content_item}>
                    <a href="">
                        <h6>Sign Up</h6>
                    </a>
                </div>
            </div>
        </div>
    )