import Image from 'next/image'
import React from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import {useSelector} from 'react-redux'

const Navbar = () => {

    const quantity = useSelector((state)=> state.cart.quantity)
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src="/img/telephone.png" alt="" width="32" height="32"/>
                </div>
                <div className={styles.texts}>
                   <div className={styles.text}>ORDER NOW</div>
                   <div className={styles.text}>075 429 2210</div>
                </div>
                
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                    <Link href="/" passHref>
                    Homepage
                    </Link>
                    
                    </li>
                    <li className={styles.listItem}>Products</li>
                    <li className={styles.listItem}>Menu</li>
                    <Link href="/" passHref >
                    <Image src="/img/zzz.png" alt="" width="140px" height="60px" className={styles.img} />
                    </Link>

                    <li className={styles.listItem}>Events</li>
                    <li className={styles.listItem}>Blog</li>
                    <li className={styles.listItem}>Contact</li>
                </ul>
            </div>
            <Link href="/cart" passHref>
            <div className={styles.item}>
                <div className={styles.cart}>
                   <Image src="/img/cart.png" alt="" width="30px" height="30px" className={styles.img} />
                   <div className={styles.counter}>{quantity}</div>
                </div>
                
            </div>
            </Link>
        </div>
    )
}

export default Navbar
