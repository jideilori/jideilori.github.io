import Head from 'next/head'
import { useEffect } from 'react';

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
  const { toggleProjectOverview } = useProjectPreviewToggler()

  useEffect(() => {
    const projects = document.querySelectorAll('.project')
    const projects_description = document.querySelectorAll('.project .description')
    const portfolio_sections = document.querySelectorAll('.portfolio-section');

    useIntersectionObserver(portfolio_sections)
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
        <div className="w-full xl:w-4/5 px-4 lg:px-16 xl:px-32 md:py-12">          
          <About />
          <Proficiency />
          <Projects />
          <Clients />          
          {/* <Booking /> */}
          {/* <Testify /> */}
          {/* <Feedback /> */}
        </div>					
      </main>      
      <Footer />      
    </div>
  )
}