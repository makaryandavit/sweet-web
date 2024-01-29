import React from 'react'
import styles from "./about.module.css";

import About1 from "../../assets/about1.png"
import About2 from "../../assets/about2.png"
import About3 from "../../assets/about3.png"
import About4 from "../../assets/about4.png"

const About = () => {

    const boxes = [
        {
            id: Math.random() * 4684,
            boxImg: About1,
            title: 'Лучшие ингрединты',
            text: 'Что-то про суперкачество, лучших поваров, свежесть и т.д.',
        },
        {
            id: Math.random() * 4684,
            boxImg: About2,
            title: 'Упаковка',
            text: 'Что-то про суперкоробочки и бантики и бла бла бла',
        },
        {
            id: Math.random() * 4684,
            boxImg: About3,
            title: 'Получение в день заказа',
            text: 'В день заказа доставка курьером или самовывоз',
        },
        {
            id: Math.random() * 4684,
            boxImg: About4,
            title: 'Анонимная доставка',
            text: 'Можем преподнести Ваш заказ как анонимный подарок',
        }
    ]
    
  return (
    <section className={styles.section}>
        <p className={styles.sectionTitle}>Мы обо всём позаботились</p>
        <div className={styles.inside}>
            {
                boxes.map(item => (
                    <div className={styles.box} key={item.id}>
                        <div className={styles.boxImg}>
                            <img src={item.boxImg} className={styles.img} alt="" />
                        </div>
                        <div className={styles.boxInfo}>
                            <p className={styles.title}>{item.title}</p>
                            <p className={styles.text}>{item.text}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export { About }
