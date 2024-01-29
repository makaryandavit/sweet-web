import React, { useEffect } from 'react'
import styles from "./cool.module.css";

import Lenta1 from "../../assets/box1Lent.svg";
import Lenta2 from "../../assets/box2Lent.svg";
import Lenta3 from "../../assets/box3Lent.svg";

import AOS from "aos"

const Cool = () => {

  useEffect(() => {
    AOS.init()
  },[])

  return (
    <section className={styles.section} id="cool">
      <p className={styles.title}>Акции</p>
      <div className={styles.inside}>
      <div className={`${styles.box}`} data-aos="zoom-out" data-aos-duration="7000" >
        <div className={`${styles.top} ${styles.top1}`}>
          <img src={Lenta1} className={styles.lenta} alt="" />
        </div>
        <div className={`${styles.bottom} ${styles.bottom1}`}>
          <p className={styles.text}>По СПб в районе КАД –  от <br/> 3000₽ <br/> По МСК – от 5000₽</p>
        </div>
      </div>
      <div className={`${styles.box}`}  data-aos="zoom-out" data-aos-duration="7000">
      <div className={`${styles.top} ${styles.top2}`}>
      <img src={Lenta2} className={styles.lenta} alt="" />
      </div>
        <div className={`${styles.bottom} ${styles.bottom2}`}>
          <p className={styles.text}>Шоколадное пирожное картошка на основе бисквита!</p>
        </div>
      </div>
      <div className={`${styles.box}`}  data-aos="zoom-out" data-aos-duration="7000">
      <div className={`${styles.top} ${styles.top3}`}>
      <img src={Lenta2} className={styles.lenta} alt="" />
      </div>
        <div className={`${styles.bottom} ${styles.bottom3}`}>
          <p className={styles.text}>Аппетитные конфеты на основе миндального печенья и крема</p>
        </div>
      </div>
      <div className={`${styles.box}`}  data-aos="zoom-out" data-aos-duration="7000">
      <div className={`${styles.top} ${styles.top4}`}>
      <img src={Lenta3} className={styles.lenta} alt="" />
      </div>
        <div className={`${styles.bottom} ${styles.bottom4}`}>
          <p className={styles.text}>Карамель на палочкеиз натуральных ингредиентов</p>
        </div>
      </div>
      </div>
    </section>
  )
}

export { Cool }
