import React, { useEffect } from 'react'
import styles from "./boxes.module.css";

import AOS from "aos"

import { MdOutlineShoppingBag } from "react-icons/md";


import BoxNkar1 from "../../assets/boxNkar1.png"
import BoxNkar2 from "../../assets/boxNkar2.png"
import BoxNkar3 from "../../assets/boxNkar3.png"
import BoxNkar4 from "../../assets/boxNkar4.png"
import BoxNkar5 from "../../assets/boxNkar5.png"
import BoxNkar6 from "../../assets/boxNkar6.png"

const Boxes = () => {

    useEffect(() => {
        AOS.init()
      },[])

    const boxes = [
        {
            id: Math.random() * 1564,
            boxImg: BoxNkar1,
            title: 'Сердце',
            text: '24 штуки в коробке в виде сердца. Ассорти из 6 вкусов',
            price: '2800 руб',
        },
        {
            id: Math.random() * 1564,
            boxImg: BoxNkar2,
            title: 'Красота спасёт мир ',
            text: 'Набор 16 шт. Вкусы: клубника - базилик, кокос, голубой сыр, пармезан',
            price: '750 руб',
        },
        {
            id: Math.random() * 1564,
            boxImg: BoxNkar3,
            title: 'Круглый набор',
            text: '40 макаронс в круглой коробке с персональной надписью',
            price: '3900 руб',
        },
        {
            id: Math.random() * 1564,
            boxImg: BoxNkar4,
            title: 'Набор на 9',
            text: 'Набор из 9 штук в квадратной коробке. Вкусы: шоколад, фисташка, вишня',
            price: '950 руб',
        },
        {
            id: Math.random() * 1564,
            boxImg: BoxNkar5,
            title: 'Набор на 16',
            text: 'Набор 16 шт. Вкусы: соленая карамель, голубой сыр, пармезан, шоколад ',
            price: '1500 руб',
        },
        {
            id: Math.random() * 1564,
            boxImg: BoxNkar6,
            title: 'Сердце',
            text: '24 штуки в коробке в виде сердца. Ассорти из 6 вкусов ',
            price: '2500 руб',
        },
    ]

  return (
    <section className={styles.section} id='boxes'>
        <p className={styles.pageTitle}>Популярные наборы</p>
        <div className={styles.inside}>
            {
                boxes.map((item,index) => (
                    <div className={styles.box} key={item.id} data-aos="zoom-out" data-aos-duration="15000">
                        <div className={styles.forImg}>
                            <img src={item.boxImg} className={styles.img} alt="" />
                        </div>
                        <div className={styles.forInfo}>
                            <div className={styles.line}></div>
                            <p className={styles.title}>{item.title}</p>
                            <p className={styles.text}>{item.text}</p>
                            <div className={styles.priceAndButton}>
                                <p className={styles.price}>{item.price}</p>
                                <button className={styles.btn}> <MdOutlineShoppingBag className={styles.shop} /> В корзину</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export { Boxes }
