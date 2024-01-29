import React, { useState } from 'react';
import  styles  from "./header.module.css";
import Logo from "../../assets/logo.svg";
import BurgerOpen from "../../assets/burgerOpen.svg";
import BurgerClose from "../../assets/burgerClose.svg";


const Header = () => {

  const [burgerBool, setBurgerBool] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false)
  window.addEventListener('scroll',function(){
    if(window.scrollY > 10){
      setHeaderFixed(true)
    }else{
      setHeaderFixed(false)
    }
  })

  return (
    <header >
      <div className={styles.headerInfo}>
        <ul className={styles.headerLists}>
          <li>Yerevan, Nor-Nork</li>
          <li>
            <a href="+(374)77-80-20-64">+(374)77-80-20-64</a>
          </li>
          <li>Instagram</li>
          <li>Facebook</li>
        </ul>
        <div className={styles.burgerMenu ? `${styles.headerFixedCla} ${styles.burgerMenu}` : `${styles.noHeaderFixed} ${styles.burgerMenu}`}>
          <img src={BurgerOpen} className={styles.burgerButton} alt="" onClick={() => {
            setBurgerBool(true)
          }} />
          <img src={Logo} className={styles.burgerLogo} alt="" />
          <div className={burgerBool ? `${styles.burgerDropdown} ${styles.burgerDropdownCome}` : `${styles.burgerDropdown}`}>
          {/* <img src={Logo} className={styles.burgerListLogo} alt="" /> */}
            <ul className={styles.burgerLists}>
              <li>
                <a href="#home" onClick={(e) => {
                  setBurgerBool(false);
                }}>Home</a>
              </li>
              <li>
                <a href="#catalogue" onClick={(e) => {
                  setBurgerBool(false);
                }}>Catalogue</a>
              </li>
              <li>
                <a href="#cool" onClick={(e) => {
                  setBurgerBool(false);
                }}>Cool</a>
              </li>
              <li>
                <a href="#holidays" onClick={(e) => {
                  setBurgerBool(false);
                }}>Holidays</a>
              </li>
              <li>
                <a href="#boxes" onClick={(e) => {
                  setBurgerBool(false);
                }}>Boxes</a>
              </li>
              <li>
                <a href="#news" onClick={(e) => {
                  setBurgerBool(false);
                }}>News</a>
              </li>
              <li>Yerevan, Nor-Nork</li>
              <li>
                <a href="+(374)77-80-20-64">+(374)77-80-20-64</a>
              </li>
              <li>Instagram</li>
              <li>Facebook</li>
            </ul>
            <img src={BurgerClose} className={styles.burgerButtonClose} alt="" onClick={() => {
              setBurgerBool(false)
            }} />
          </div>
        </div>
      </div>
      <div className={headerFixed ? `${styles.headerFixedCla} ${styles.headerNav}` : `${styles.noHeaderFixed} ${styles.headerNav}`}>
        <ul className={styles.headerNavLists}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#catalogue">Catalogue</a>
          </li>
          <li>
            <a href="#cool">Cool</a>
          </li>
          <li>
            <img src={Logo} className={styles.logo} alt="" onClick={() => {
              window.location.href = ''
            }} />
          </li>
          <li>
            <a href="#holidays">Holidays</a>
          </li>
          <li>
            <a href="#boxes">Boxes</a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export { Header }
