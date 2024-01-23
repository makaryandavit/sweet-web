import React from 'react';
import styles from "./home.module.css";
import HomeImg from "../../assets/homeImg.png";
import Cake1 from "../../assets/cake1.png"
import Cake2 from "../../assets/cake2.png"
import Cake3 from "../../assets/cake3.png"
import Cake4 from "../../assets/cake4.png"
import Title from "../../assets/footerLogo.svg";
import Klor1 from "../../assets/klor1.png";
import Klor2 from "../../assets/klor2.png";

const Home = () => {
  return (
    <div className={styles.section} id='home'>
        
      <div className={styles.sectionLeft}>
        <img src={HomeImg} className={styles.homeImg} alt="Candy" />
        <img src={Cake1} className={styles.cake1} alt="Cake" />
        <img src={Cake2} className={styles.cake2} alt="Cake" />
        <img src={Cake3} className={styles.cake3} alt="Cake" />
        <img src={Cake4} className={styles.cake4} alt="Cake" />
      </div>
      <div className={styles.sectionRight}>
      <img src={Klor1} className={`${styles.klor} ${styles.klor1}`} alt="" />
        <img src={Klor2} className={`${styles.klor} ${styles.klor2}`} alt="" />
        <img src={Title} className={styles.title} alt="" />
        <p className={styles.text1}>Настоящая любовь</p>
        <p className={styles.text2}>Пирожные макарон и другие десерты <br/> из натуральных ингредиентов, приготовленные с любовью</p>
      </div>
    </div>
  )
}

export { Home }
