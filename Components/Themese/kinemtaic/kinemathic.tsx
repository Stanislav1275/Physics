import s from './kinemathic.module.css'
import content1 from '../../../sod/kinemathic/img/Screen Shot 10.04.2022 at 18.02 - 2.png'
import content2 from '../../../sod/kinemathic/img/Screen Shot 10.04.2022 at 18.02 - 3.png'
import test1 from '../../../sod/kinemathic/img/1_test.png'

import {
    Link
} from "react-router-dom";

export const Kinemath = () => {
    return (
        <div className={s.content}>
            <div className={s.intro}>
                <div className={s.header}>
                    <h1>Кинематика</h1>
                </div>
                <div className={s.sub_header}>
                    <Link to="">
                        <h2>Равномерное движение</h2>
                    </Link>
                    <Link to="">
                        <h2>Равноускоренное прямолинейное движение</h2>
                    </Link>
                    <Link to="">
                        <h2>Движение по окружности</h2>
                    </Link>

                </div>
            </div>
            <div className={s.theme}>
                <div className={s.head}>
                    <h1>Равномерное движение</h1>
                </div>
                <div className={s.content}>
                    <h1>
                        Равномерное прямолинейное движение материальной точки — это движение,
                        при котором тело за равные промежутки времени совершает одинаковые перемещения.
                        Траектория при таком движении — прямая. Скорость тела постоянна v→=const.
                        Уравнение координаты материальной точки в проекциях на ось при равномерном движении
                    </h1>
                    <div className={s.img_content}>
                        <div>
                            <img src={content1} alt=""/>
                        </div>
                        <div>
                            <img src={content2} alt=""/>
                        </div>
                    </div>
                </div>
                <div className={s.sub_header}>
                    <Link to="">
                        <h2>Равномерное движение</h2>
                    </Link>
                    <Link to="">
                        <h2>Равноускоренное прямолинейное движение</h2>
                    </Link>
                    <Link to="">
                        <h2>Движение по окружности</h2>
                    </Link>

                </div>
            </div>
            <div className={s.test}>
                <div className={s.number}>

                </div>
                <div className={s.usl}>
                    <h1>На рисунке представлен график зависимости пути S,
                        пройденного материальной точкой, от времени t.
                        Определите скорость υ точки на интервале времени от 5 с до 7 с. (
                        Ответ дайте в м/с)

                    </h1>
                </div>
                <div className={s.usl_img}>
                    <img src={test1} alt="test1"/>
                </div>
                <div className={s.btn_resh}>
                    <button>
                        <h1>
                            Показать решение
                        </h1>
                    </button>
                </div>
            </div>

        </div>
    )
}