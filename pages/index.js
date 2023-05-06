import Head from 'next/head';
import { useRef } from 'react';

import useScrollToIntersectedItem from '../hoc/useScrollToIntersectedItem';

import Publications from '../components/Publications';
import Experience from '../components/Experience';
import Portfolio from '../components/Portfolio';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import About from '../components/About';

const Home = () => {
  const pageSectionParentRef = useRef(null);
  useScrollToIntersectedItem({
    targetRef: pageSectionParentRef,
    offset: 20
  });

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
        <title> Portfolio | Oluwaseun Ilori </title>
      </Head>

      <main>
        <div id="alert" className="fixed z-50 -top-32 rounded-xl left-2/4 transform -translate-x-2/4 bg-green-100 text-green-500 p-4 w-3/5 flex justify-between items-center">
          <span id="message">Message</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        
        <Header />
        <Navbar />
        <div ref={pageSectionParentRef} className="w-full xl:w-5/5 px-4 lg:px-16 xl:px-32 md:pb-12 overflow-hidden">
          <About />
          <Experience />
          <Portfolio />
          <Publications />
          <span className="hidden border-gray-400 -bottom-full bottom-0"></span>
        </div>					
      </main>      
      <Footer />
    </div>
  )
}

export default Home;