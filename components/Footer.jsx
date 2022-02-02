import Image from 'next/image'
import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
           <div className={styles.item}>
              <Image src="/img/sh1.jpg" alt="" layout="fill" />
           </div>
           <div className={styles.item}>
              <div className={styles.card}>
                  <h2 className={styles.motto}>
                      OH YES, WE DID.THE ZAPPA PIZZA, WELL BAKED SLICE OF PIZZA
                  </h2>
              </div>
              <div className={styles.card}>
                  <h1 className={styles.title}>FIND OUR RESTAURENT</h1>
                  <p className={styles.text}>
                      25 Rue de Nancy.
                      <br /> Paris, 54200
                      <br /> (075) 823-298
                  </p>
                  <p className={styles.text}>
                      9 Res du Parc.
                      <br /> Paris, 32000
                      <br /> (075) 234-894
                  </p>
                  <p className={styles.text}>
                      44 Rue de Molitor.
                      <br /> Paris, 35400
                      <br /> (075) 784-298
                  </p>
                  <p className={styles.text}>
                      29 Rue de Lyon
                      <br /> Paris, 35400
                      <br /> (075) 988-625
                  </p>
                  <div className={styles.date}>
                  <span>zappa © {new Date().getFullYear()}</span>
              </div>
              </div>
              <div className={styles.card}>
                 <h1 className={styles.title}>WORKING HOURS</h1>
                 <p className={styles.text}>
                     MONDAY UNTILL FRIDAY
                     <br /> 9:00 - 22:00
                 </p>
                 <p className={styles.text}>
                     SATURDAY TO SUNDAY
                     <br /> 12:00 - 24:00
                 </p>
              </div>
              
           </div>
           

        </div>
    )
}

export default Footer
