import React from 'react';
import Header from '../../components/header/header';
import './styles.css'
import Video from '../../assets/akatsukitrailer.mp4'
import Cards from '../../components/cards';
import Footer from '../../components/footer/footer';

function Home() {
  return (
    <>
     <Header />
     <div id='banner'></div>
     <div id='trailer-container'>
      <div className='content'>
        <video controls className='trailer'>
           <source src={Video} />
           Seu navegador não possui suporte para Vídeos
        </video>
        <div id='sinopse'>
          <p className='description'>
          Akatsuki é a organização de mercenários e vilões de Naruto. Mesmo que tenham sido os principais
                    antagonistas do anime, é quase impossível
                    ter acompanhado as aventuras dos shinobis de Konoha e não ter se apaixonado ou, no mínimo,
                    simpatizado com a Akatsuki.
          </p>
          <button className='button'>Assistir</button>
        </div>
      </div>
    </div>
    <Cards />
    <Footer />
    </>
  );
}

export default Home;