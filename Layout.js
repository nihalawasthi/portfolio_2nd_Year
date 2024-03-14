import {Sora} from '@next/font/google';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100','200','300','400','500','600','700','800'],
});

import Nav from '../components/Nav'
import Head from 'next/head';
import Header from '../components/Header'

export const metadata = {
  title: 'Nihal Awasthi',
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/favicon.icns?v=4']
  },
  description: '',
}

const Layout = ({children}) => {
  return <div className={'page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative'}>
    <Head>
      <title>{metadata.title}</title>
      {metadata.icons && metadata.icons.icon && <link rel="icon" href={metadata.icons.icon[0]} />}
      {metadata.icons && metadata.icons.apple && <link rel="apple-touch-icon" href={metadata.icons.apple[0]} />}
    </Head>
    <Nav />
    <Header />
    {children}
  </div>;
};
export default Layout;
