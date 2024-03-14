import Link from "next/link";
import {RiYoutubeLine, RiInstagramLine, RiGithubLine, RiLinkedinLine, RiTelegramLine} from 'react-icons/ri'
const Socials = () => {
  return (
    <div className='flex items-center text-lg gap-x-5'>
      <Link href={'https://github.com/nihalawasthi'} className='hover:text-accent transition-all duration-300'>
        <RiGithubLine />
      </Link>
      <Link href={'https://www.linkedin.com/in/nihal-awasthi-16a644251'} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinLine />
      </Link>
      <Link href={'https://www.instagram.com/_._akash_22'} className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
      <Link href={'/'} className='hover:text-accent transition-all duration-300'>
        <RiYoutubeLine />
      </Link>
    </div>
  );
};

export default Socials;
