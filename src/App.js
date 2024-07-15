import './App.css';
import BtnLinks from './components/BtnLinks';
import { motion } from 'framer-motion';

function App() {



  return (
    <div>
      <header className="App-header">
        <div className="flex items-start justify-center bg-black bg-cover bg-center">
            <div className='flex z-0 justify-center items-center flex-col'> 
              <motion.img 
                src='/img.avif'
                alt="Adv" 
                className='lg:w-2/6 w-full ' 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 4 }}
              />
              
              <motion.img 
                src='/logo.svg' 
                alt="Logo" 
                className='w-64 sm:w-96 -mt-11 sm:-mt-14 z-50 '
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
              />
              
              <motion.p
                className='text-custom text-sm sm:text-lg py-4  tracking-widest' 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
              >
                DESIGNER DE SOBRANCELHA
              </motion.p>
              <BtnLinks />
              <div className='mt-6 justify-center items-center px-5 sm:px-20 flex flex-col gap-4'>
                <motion.img 
                  src='/link1.png'
                  alt="Link 1" 
                  className='w-full lg:w-2/6 cursor-pointer' 
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 1 }} 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  // onClick={() => window.location.href = '/link-1'}
                />
                <motion.img 
                  src='/link2.png'
                  alt="Link 2" 
                  className='w-full lg:w-2/6 cursor-pointer' 
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 1 }} 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => window.location.href = 'https://wa.me/5537988118274?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio'}
                />
                <motion.img 
                  src='/link3.png'
                  alt="Link 3" 
                  className='w-full lg:w-2/6 cursor-pointer' 
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 1 }} 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => window.location.href = 'https://wa.me/5537988118274?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20seu%20curso%20presencial'}
                />
                <motion.img 
                  src='/link4.png'
                  alt="Link 4" 
                  className='w-full lg:w-2/6 cursor-pointer' 
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 1 }} 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => window.location.href = 'https://www.instagram.com/cintiaresendedesigner?igsh=aXd6Zmpid2FqdWp4'}
                />
                <motion.img 
                  src='/link5.png'
                  alt="Link 5" 
                  className='w-full lg:w-2/6 cursor-pointer' 
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 1 }} 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  // onClick={() => window.location.href = '/link-5'}
                />
              </div>
              <div className='py-8'>
                <p className='text-white text-xs'>Todos os direitos Reservados por Cintia Resende ©</p>
              </div>
            </div>
        </div>
      </header>
    </div>
  );
}

export default App;