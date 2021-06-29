import Head from 'next/head'
import React, {useState} from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Container  } from 'reactstrap';
import Carrosel from '../components/Carousel';
import imgMain from '../../public/logo2bg.png';
import Card from '../components/ServicesCard';
import newimg from '../../public/mainbgimg.png';
import Footer from '../components/Footer';

import CardComponent from '../components/CardComponent';

export default function Home() {
    
  const [name, setName] = useState();
  const [about, setAbout] = useState();

  return (
    
    <Container  className={styles.container}>


        <div className={styles.mainImage}>
     
          <div className={styles.bgVideo}>
              <video
                  loop
                  autoPlay
                  muted
                  className={styles.video}
                
                  >
                    <source src="/video/bgvideo.mp4" type="video/mp4"/>
                </video>
                
                <div className={styles.contentMain}>
                  <Image width={200} height={200} src={imgMain} alt="logo"/>
                  {/* <h4 className={styles.title}>R.M Metal Art</h4> */}
                  {/* <h5 className={styles.subTitle}>Arte em Metal</h5> */}
                  <p className={styles.textContent}>Especializada na fabricação de móveis, artigos decorativos e de segurança em metal, a R.M. Metal Arte busca levar em seus produtos durabilidade, beleza e sofisticação. </p>
                  <div className={styles.btn}>
                      <span className={styles.txtBtn}>Saiba Mais</span>
                   </div>                 
                </div>
                
                           
           </div>
          

            <div className={styles.container2}>
                 <h2 className={styles.titlec2}>Alguns De Nossos Trabalhos</h2>
                 <p style={{color: '#2880fc'}}>alguns de nossos principais produtos e serviços</p>
                 <hr className={styles.line}/>
                 <div className={styles.rowc2}>
                      <CardComponent 
                        img="/projectimgs/imagem2.jpeg"
                        title="Móveis"
                        subTitle="Sob Medida"
                        content="Some quick example text to build on the card title and make up the bulk"
                      /> 

                      <CardComponent 
                      img="/projectimgs/imagem4.jpeg"
                      title="Portão"
                      subTitle="Segurança"
                      content="Some quick example text to build on the card title and make up the bulk"
                    />   

                    <CardComponent 
                      img="/projectimgs/imagem5.jpeg"
                      title="Decorativos"
                      subTitle="Artigos para Decoração"
                      content="Some quick example text to build on the card title and make up the bulk"
                    />           
                 </div>  
                 <hr className={styles.line}/> 

                 <section>
                   <main className={styles.mainForm}> 
                      <form>
                        <fieldset style={{border:0, marginBottom: 30}}>
                           <legend className={styles.legend}>Cadastrar uma nova Adoção</legend>
                           
                           <div className={styles.inputBlock}>
                              <label className={styles.inputLabel} htmlFor="name">Nome</label>
                              <input    
                                id="name"
                                value={name}
                                onChange={t => setName(t.target.value)}
                              />
                          </div>

                          <div className={styles.inputBlock}>
                              <label  className={styles.inputLabel} htmlFor="about">Conte a história do amiguinho(a) <span>Máximo de 300 caracteres</span></label>
                              <textarea className={styles.textArea} 
                              id="about" 
                              maxLength={300} 
                              value={about} 
                              onChange={event => setAbout(event.target.value)} />
                          </div>

                        </fieldset>
                      </form>
                   </main>
                 </section>              
            </div>

            
               
        </div>

        
        
    </Container>
    
  )
}
