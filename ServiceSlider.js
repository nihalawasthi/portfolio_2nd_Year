import {
  RxArrowTopRight,
} from "react-icons/rx";

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from "swiper";

// data
export const serviceData = [
  {
    icon: <Image src={'/thumb1.jpg'} width={838} height={688} alt=""/>,
    title: 'Phablet',
    description: 'Phablet - A multi-layered encryption algorithm to safeguard plaintext data.',
    link: 'https://phablet.onrender.com/'
  },
  {
    icon: <Image src={'/thumb3.jpg'} width={838} height={688} alt=""/>,
    title: 'Wednesday',
    description: 'Wednesday - your AI companion redefining interaction!.',
    link: 'https://wednesday.onrender.com/'
  },
  {
    icon: <Image src={'/thumb4.jpg'} width={838} height={688} alt=""/>,
    title: 'Eclipse',
    description: 'Eclipse of Eternity : The Aetherium Chronicles - Classic Hack&slash game',
    link: 'https://eclipse.onrender.com/'
  },
  {
    icon: <Image src={'/thumb2.jpg'} width={838} height={688} alt=""/>,
    title: 'Games',
    description: 'Games - Your Personal Web Games List in a innovative way',
    link: 'https://github.com/nihalawasthi/Web_Extensions'
  },
  {
    icon: <Image src={'/thumb1.jpg'} width={838} height={688} alt=""/>,
    title: 'Minor Projects',
    description: 'A Collection of Web Pages, Games, Extensions and Many Cryptographic algorithms',
    link: 'https://github.com/nihalawasthi/'
  },
];

const ServiceSlider = () => {
  return <Swiper
  breakpoints={{
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
  }}
  FreeMode={true}
  Pagination={{
    clickable: true
  }}
  modules={{ FreeMode, Pagination}}
  className='h-[350px] sm-h-[380px]'>
    {
      serviceData.map((item,index)=> {
        return (
        <SwiperSlide key={index}>
          <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300]'>
            <div className='text-4xl mb-4 text-accent'>{item.icon}</div>
            <div className='mb-6'>
              <div className='mb-2 text-lg'>{item.title}</div>
              <p className='max-w-[350px] leading-normal'>{item.description}</p>
            </div>
            <div className='text-3xl'>
            <a href={item.link} target="_blank">
              <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
            </a>
            </div>
          </div>
        </SwiperSlide>
      )})
    }
  </Swiper>;
};

export default ServiceSlider;
