import React from 'react';
import styles from '../styles/components/ServicesCard.module.css';
import Image from 'next/image';
import img1 from '../../public/projectimgs/imagem1.jpeg'
import img2 from '../../public/projectimgs/imagem2.jpeg'
import img3 from '../../public/projectimgs/imagem3.jpeg'

export default function components() {
 return (
   <div className={styles.container}>
       <div className={styles.divImgs}>
          <div className={styles.divImg}>
          <Image className={styles.image} src={img1}  alt="img1"/>
          </div>  

        <div className={styles.content}>
             <p className={styles.contentTitle}>Artigos Decorativos</p>
             <p className={styles.textContent}>The CSS3 box-shadow property allows you to add depth to your website design</p>
         </div> 
       </div>

        <div className={styles.divImgs}>
         <div className={styles.divImg}>
          <Image className={styles.image} src={img2}  alt="img1"/>
         </div>
        
        <div className={styles.content}>
             <p className={styles.contentTitle}>Portões</p>
             <p className={styles.textContent}>The CSS3 box-shadow property allows you to add depth to your website design</p>
        </div> 

       </div>

       <div className={styles.divImgs}>
         <div className={styles.divImg}>
           <Image className={styles.image} src={img3}  alt="img1"/>
         </div>
        
         <div className={styles.content}>
             <p className={styles.contentTitle}>Móveis</p>
             <p className={styles.textContent}>The CSS3 box-shadow property allows you to add depth to your website design</p>
         </div> 

       </div>

   </div>
 );
}