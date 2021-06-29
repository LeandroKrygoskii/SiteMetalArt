import React from 'react';
import styles from '../styles/components/Footer.module.css';

import Image from 'next/image';
import navLogo from '../../public/logodv2.png';
import insta from '../../public/Vector-insta.svg';
import face from '../../public/Vector-fb.svg';
import mail from '../../public/msg.png';

export default function components() {
 return (
    
    <footer className={styles.siteFooter}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className={styles.footerLinks}>
              <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
              <li><a href="http://scanfcode.com/category/android/">Android</a></li>
              <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className={styles.footerLinks}>
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by 
            <a href="#"> R.M Metal Arte</a>.
            </p>
            <p>desenvolvido por 
            <a href="#"> KryTech</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className={styles.socialIcons}>
              <li>
                  <a className={styles.linkSocial} href="https://www.facebook.com/sos4patas.pr/?ref=page_internal">
                       <Image className={styles.imgSocial} src={face} alt="face"/>
                 </a>
              </li>

              <li> 
                 <a className={styles.linkSocial} href="https://www.instagram.com/adocaosos4patas.parana/">
                       <Image className={styles.imgSocial} src={insta} alt="insta"/>
                  </a>
              </li>
               
               <li>
                <a className={styles.linkSocial} href="https://www.instagram.com/adocaosos4patas.parana/">
                       <Image height={27} width={27} className={styles.imgSocial} src={mail} alt="nail"/>
                  </a>     
               </li>
            </ul>
          </div>
        </div>
      </div>
  </footer>
 );
}