import React from 'react'
import styles from "./layout.module.css";
import { Boxes, Catalogue, Cool, Holidays, Home } from '../Components'
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
    </div>
  )
}

export { Layout }
