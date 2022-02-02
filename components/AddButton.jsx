import React from 'react';
import styles from '../styles/Add.module.css'
import Link from 'next/link'

const AddButton = ({setClose}) => {
  return (
    <div className={styles.main}>
      <div 
      className={styles.mainAddButton}
      onClick={() => setClose(false)}
      >
          Add New Pizza
          

        </div>
        <div className={styles.mainAddButton}>
        <Link  href="/admin">
        Admin Page
        </Link>
        
        </div>
      </div>
  );
};

export default AddButton;
