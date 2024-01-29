import React, { useEffect } from 'react'
import styles from "./news.module.css";

import Background1 from "../../assets/background1.png"
import Background2 from "../../assets/background2.png"
import Background3 from "../../assets/background3.png"
import AOS from "aos"

const News = () => {

    useEffect(() => {
        AOS.init()
      },[])

    const boxes = [
        {
            id: Math.random() * 64564,
            boxImg: Background1,
            date: '25.02.2023',
            title: 'Скоро главный праздник весны!',
            text: 'Девушки любят, когда вкусно, красиво и натурально. Смотрите больше наборов с десертами ручной работы',
        },
        {
            id: Math.random() * 64564,
            boxImg: Background2,
            date: '17.02.2023',
            title: 'Конкурс на 23 февраля!',
            text: 'День Защитника Отечества уже совсем скоро! Порадуйте своего сладкоежку с помощью аппетитных наборов от МакаронШоп',
        },
        {
            id: Math.random() * 64564,
            boxImg: Background3,
            date: '11.02.2023',
            title: 'Экспресс-конкурс ко дню Святого Валентина',
            text: 'Подарок уже через 2 дняДень всех влюблённых не за горами. Расскажи о своих чувствах с помощью сладкой валентинки от МакаронШоп',
        }
    ]

  return (
    <section className={styles.section} id='news'> 
    <p className={styles.sectionTitle}>Новости</p>
      <div className={styles.inside}>
        {
            boxes.map((item,index) => (
                <div className={styles.box} key={item.id} data-aos="zoom-in" data-aos-duration="15000">
                    <div className={styles.boxImg}>
                        <img src={item.boxImg} className={styles.nkara} alt="" />
                    </div>
                    <div className={styles.boxInfo}>
                        <p className={styles.date}>{item.date}</p>
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

export { News }
