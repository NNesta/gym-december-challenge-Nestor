import Head from 'next/head'
import { Inter } from '@next/font/google';
import HeroSection from '../components/sections/HeroSection';
import NewsSection from '../components/sections/NewsSection';
import DiscoverSection from '../components/sections/DiscoverSection';
import Card from '../components/ui/Card';
import TumNumber from '../components/sections/TumNumber';
import ActivitySection from '../components/sections/ActivitySection';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='w-full h-screen'>
     <HeroSection/> 
     <NewsSection/>
     <DiscoverSection/>
     <TumNumber/>
     <ActivitySection/>
      </main>
    </>
  )
}
