import React, {useState} from 'react';
import styles from '../styles/components/NavBar.module.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

import Image from 'next/image';
import navLogo from '../../public/logodv2.png';
import insta from '../../public/Vector-insta.svg';
import face from '../../public/Vector-fb.svg';
import mail from '../../public/msg.png';

export default function Components(props) {
  
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);


 return (
  <div>
    <Navbar  className={styles.container} dark expand="md">
      <NavbarBrand className={styles.logo} href="/">
         <Image width={70} height={70} className={styles.imgLogo} src={navLogo} alt="logo"/>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse className={styles.row}  isOpen={isOpen} navbar>
        <Nav className={styles.navList}  navbar>
          <NavItem className={styles.navItem}>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem className={styles.navItem}>
            <NavLink href="">Orçamentos</NavLink>
          </NavItem>
          <NavItem className={styles.navItem}>
            <NavLink href="">Sobre</NavLink>
          </NavItem>
          <NavItem className={styles.navItem}>
            <NavLink href="">Contato</NavLink>
          </NavItem>
        </Nav>  
         
         <div className={styles.navSocials}> 
                 <a className={styles.linkSocial} href="https://www.facebook.com/sos4patas.pr/?ref=page_internal">
                       <Image className={styles.imgSocial} src={face} alt="face"/>
                 </a>
                      
                  <a className={styles.linkSocial} href="https://www.instagram.com/adocaosos4patas.parana/">
                       <Image className={styles.imgSocial} src={insta} alt="insta"/>
                  </a>

                  <a className={styles.linkSocial} href="https://www.instagram.com/adocaosos4patas.parana/">
                       <Image height={27} width={27} className={styles.imgSocial} src={mail} alt="nail"/>
                  </a>          
         </div>
       
      </Collapse>
        
    </Navbar>
  </div>
 );
}