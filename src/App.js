import React, { useState, useEffect } from 'react';
import './App.css';
import BtnLinks from './components/BtnLinks';
import { motion } from 'framer-motion';

function App() {
  const [bgLoaded, setBgLoaded] = useState(false);
  const isMobile = window.innerWidth <= 640; 

  useEffect(() => {
    if (!isMobile) {
      const img = new Image();
      img.src = '/bg.png';
      img.onload = () => {
        setTimeout(() => {
          setBgLoaded(true);
        }, 1000); 
      };
    } else {
      setBgLoaded(true); 
    }
  }, [isMobile]);

  return (
    <div className={`App ${bgLoaded ? '' : 'hidden'}`}>
      <header className="App-header">
        <div className="flex items-start justify-center bg-black bg-cover bg-center" style={{ backgroundImage: isMobile ? '' : "url('/bg.png')" }}>
          {!bgLoaded && (
            <div className="loader">Loading...</div>
          )}
          {bgLoaded && (
            <div className='flex z-0 justify-center items-center flex-col'> 
              <motion.img 
                src='/img.png'
                alt="Adv" 
                className='w-112' 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 4 }}
              />
              
              <motion.img 
                src='/logo.svg' 
                alt="Logo" 
                className='w-64 -mt-11 sm:-mt-14 z-50 '
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
              />
              
              <motion.p
                className='text-custom text-sm py-4  tracking-widest' 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
              >
                DESIGNER DE SOBRANCELHA
              </motion.p>
              <BtnLinks />
              <div className='mt-6 flex flex-col gap-4'>
                <motion.img 
                  src='/link1.png'
                  alt="Link 1" 
                  className='w-80 cursor-pointer' 
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 1 }} 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
                <motion.img 
                  src='/link2.png'
                  alt="Link 2" 
                  className='w-80 cursor-pointer' 
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 1 }} 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
                <motion.img 
                  src='/link3.png'
                  alt="Link 3" 
                  className='w-80 cursor-pointer' 
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 1 }} 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
                <motion.img 
                  src='/link4.png'
                  alt="Link 4" 
                  className='w-80 cursor-pointer' 
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 1 }} 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
                <motion.img 
                  src='/link5.png'
                  alt="Link 5" 
                  className='w-80 cursor-pointer' 
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 1 }} 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
              </div>
              <div className='py-8'>
                <p className='text-white text-xs'>Todos os direitos Reservados por Cintia Resende ©</p>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
