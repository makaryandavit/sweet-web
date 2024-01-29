import React from 'react'
import styles from "./holidays.module.css";

import CakeNkar1 from "../../assets/kanfet1.png"
import CakeNkar2 from "../../assets/kanfet2.png"
import CakeNkar3 from "../../assets/kanfet3.png"
import CakeNkar4 from "../../assets/kanfet4.png"
import CakeNkar5 from "../../assets/kanfet5.png"
import CakeNkar6 from "../../assets/kanfet6.png"


const Holidays = () => {

    const infoCakes = [
        {
            id: Math.random() * 2568,
            cakeNkar: CakeNkar1,
            text: 'Скоро День рождения близкого человека ',
        },
        {
            id: Math.random() * 2568,
            cakeNkar: CakeNkar2,
            text: '1 января Новый Год 2021',
        },
        {
            id: Math.random() * 2568,
            cakeNkar: CakeNkar3,
            text: '14 февраля День Святого Валентина',
        },
        {
            id: Math.random() * 2568,
            cakeNkar: CakeNkar4,
            text: '23 февраля День Защитника Отечества',
        },
        {
            id: Math.random() * 2568,
            cakeNkar: CakeNkar5,
            text: '8 марта Международный Женский День',
        },
        {
            id: Math.random() * 2568,
            cakeNkar: CakeNkar6,
            text: '9 марта День Сурка',
        },
    ]

  return (
    <section className={styles.section} id='holidays'>
      {
        infoCakes.map((item,index) => (
            <div className={styles.box} key={item.id}>
                <div className={styles.top}>
                    <img src={item.cakeNkar} className={styles.nkarCake} alt="" />
                </div>
                <div className={styles.bottom}>
                    <p className={styles.text}>{item.text}</p>
                </div>
            </div>
        ))
      }
    </section>
  )
}

export { Holidays }
