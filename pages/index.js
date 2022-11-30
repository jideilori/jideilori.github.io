import Head from 'next/head'
import { useEffect, useRef } from 'react';

import useIntersectionObserver from '../hoc/useIntersectionObserver'
import useProjectPreviewToggler from '../hoc/useProjectPreviewToggler'

import Header from '../components/Header';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';
import About from '../components/About';
import Proficiency from '../components/Proficiency';
import Clients from '../components/Clients';
// import Feedback from '../components/Feedback';
// import Testify from '../components/Testify';
import Projects from '../components/Projects';
// import Booking from '../components/Booking';

export default function Home() {
  const pageSectionParentRef = useRef(null)
  const { toggleProjectOverview } = useProjectPreviewToggler()

  useEffect(() => {
    const projects = document.querySelectorAll('.project')
    const projects_description = document.querySelectorAll('.project .description')
    
    useIntersectionObserver({
      parentContainerRef: pageSectionParentRef
    })
    toggleProjectOverview(projects, projects_description)
  })

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
        <title> Portfolio | Uwakmfon Akpan </title>
      </Head>

      <main>
        <Header />
        <Navbar />
        <div ref={pageSectionParentRef} className="w-full xl:w-5/5 px-4 lg:px-16 xl:px-32 md:pb-12">
          <About />
          <Proficiency />
          <Projects />
          <Clients />          
          {/* <Booking /> */}
          {/* <Testify /> */}
          {/* <Feedback /> */}
          <span className="hidden border-gray-400 -bottom-full bottom-0"></span>
        </div>					
      </main>      
      <Footer />
    </div>
  )
}
