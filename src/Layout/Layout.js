import React from 'react'
import styles from "./layout.module.css";
import { About, Boxes, Catalogue, Cool, Holidays, Home, News } from '../Components'
import { BiSolidArrowToTop } from "react-icons/bi";



const Layout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.toTop} onClick={() => {
        window.scrollTo(0,0,0)
      }}>
        <BiSolidArrowToTop className={styles.top} />
      </div>
      <Home />
      <Catalogue />
      <Cool />
      <Holidays />
      <Boxes />
      <News />
      <About />
    </div>
  )
}

export { Layout }
