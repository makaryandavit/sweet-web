import React, { useEffect } from 'react'
import styles from "./catalogue.module.css";
import Box1Round from "../../assets/box1.svg"
import Box2Round from "../../assets/box2.svg"
import Box3Round from "../../assets/box3.svg"
import Box4Round from "../../assets/box4.svg"
import Box5Round from "../../assets/box5.svg"
import Box6Round from "../../assets/box6.svg"

import Back1 from "../../assets/back1.png"
import Back2 from "../../assets/back2.png"
import Back3 from "../../assets/back3.png"
import Back4 from "../../assets/back4.png"
import Back5 from "../../assets/back5.png"
import Back6 from "../../assets/back6.png"

import AOS from "aos"

const Catalogue = () => {

    useEffect(() => {
        AOS.init();
    },[])

    const boxesInfo = [
        {
            id: Math.floor(Math.random() * 6578),
            background: Back1,
            roundImg: Box1Round,
            title: 'Готовые наборы',
            text: 'Готовые наборы со скидкой. Вы можете подобрать набор на подходящий случай.',
        },
        {
            id: Math.floor(Math.random() * 6578),
            background: Back2,
            roundImg: Box2Round,
            title: 'Собрать свой набор',
            text: 'Выбрать количество макарун, и выбрать вкусы',
        },
        {
            id: Math.floor(Math.random() * 6578),
            background: Back3,
            roundImg: Box3Round,
            title: 'Набор с индивидуальной печатью',
            text: 'Собрать набор макарон с уникальным дизайном. ',
        },
        {
            id: Math.floor(Math.random() * 6578),
            background: Back4,
            roundImg: Box4Round,
            title: 'Свадебные предложения',
            text: 'Нежные пирожные макаронс с разными вкусами для украшения вашего свадебного торжества',
        },
        {
            id: Math.floor(Math.random() * 6578),
            background: Back5,
            roundImg: Box5Round,
            title: 'Корпоративные подарки',
            text: 'От 85 руб за шт. С уникальным дизайном. Приятный комплимент для коллег и партнеров',
        },
        {
            id: Math.floor(Math.random() * 6578),
            background: Back6,
            roundImg: Box6Round,
            title: 'Оптовые поставки',
            text: 'Предложение для кофеен, кафе, отелей и т.д. Посмотрите условия сотрудничества и отзывы.',
        },
    ]

  return (
    <section className={styles.section} id='catalogue'>
      {
        boxesInfo.map((item,index) => (
            <div className={`${styles.box}`} key={item.id} data-aos="zoom-in">
                <img src={item.background} className={styles.boxImg} alt="" />
                <img src={item.roundImg} className={styles.boxRound} alt="" />
                <p className={styles.text1}>{item.title}</p>
                <p className={styles.text2}>{item.text}</p>
            </div>
        ))
      }
    </section>
  )
}

export { Catalogue }
