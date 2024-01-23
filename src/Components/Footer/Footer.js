import React from 'react';
import  styles  from "./footer.module.css";
import FooterLogo from "../../assets/footerLogo.svg";

const Footer = () => {
  return (
    <footer>
        <img src={FooterLogo} className={styles.footerLogo} alt="" />
        <p className={styles.creator}>Created By David Makaryan</p>
    </footer>
  )
}

export { Footer }
