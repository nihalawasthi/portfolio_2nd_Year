import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Home = () => {
  const [typedText, setTypedText] = useState('');

  const textToType = `I  am a Full-Stack developer based in Indore, India. I am Pursuing Cyber Security Masters from VIT-Bhopal. I am very passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites using Html5, CSS3 and Javascript coding languages. Working for myself to improve my skills.`;

  useEffect(() => {
    let currentIndex = 0;
  
    const typingInterval = setInterval(() => {
      setTypedText((prevText) => prevText + textToType[currentIndex]);
      currentIndex++;
  
      if (currentIndex === textToType.length) {
        clearInterval(typingInterval);
        currentIndex = 0;
      }
    }, 50);
  
    return () => clearInterval(typingInterval);
  }, [textToType]);  

  return (
    <div className='bg-primary/60 h-full'>
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center typewriter flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
          <motion.h1 variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden' className='h1'>
            Hii There <br /> I am
            <span className='text-accent'> DevSecOps</span>
          </motion.h1>

          <p className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>{typedText}</p>
        </div>
      </div>
      <div className='w-[100%] h-full absolute right-0 bottom-0'>
        <div>
          <ParticlesContainer />
        </div>

        <motion.div
          className='w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]'
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;


{/*       
        <div className='flex justify-center xl:hidden relative '>
          <ProjectsBtn/>
        </div>
        <motion.div variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden' className='hidden xl:flex'>
          <ProjectsBtn/>
        </motion.div>

      <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'>
      </div>
*/}
