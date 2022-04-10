
import s from './main.module.css'
import tg from '../../img/tg.svg';
import vk from '../../img/vk.svg';

export const Main = () => {
    return (
        <main className = {s.main}>
            <aside className={s.adds}>
                <h1>PS -это бесплатный ресурс для изучений ЕГЭ-физики</h1>
            </aside>
        </main>
    )
}