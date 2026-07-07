import Head from 'next/head';
import Avatar from '../components/Avatar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div 
      className="min-h-screen text-white flex flex-col justify-between overflow-x-hidden relative"
      style={{ backgroundColor: '#030712' }}
    >
      <Head>
        <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
        <title>Oluwaseun Ilori — Data Scientist & Computer Vision Researcher</title>
      </Head>

      {/* Modern Radial Glow Backdrops */}
      <div 
        className="absolute rounded-full pointer-events-none opacity-20"
        style={{
          top: '-10%',
          left: '-10%',
          width: '60%',
          height: '60%',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.4) 0%, rgba(0, 0, 0, 0) 70%)',
          filter: 'blur(100px)',
        }}
      ></div>
      <div 
        className="absolute rounded-full pointer-events-none opacity-15"
        style={{
          bottom: '-10%',
          right: '-10%',
          width: '60%',
          height: '60%',
          background: 'radial-gradient(circle, rgba(13, 148, 136, 0.4) 0%, rgba(0, 0, 0, 0) 70%)',
          filter: 'blur(100px)',
        }}
      ></div>

      <main 
        className="flex-grow flex items-center justify-center py-16 md:py-28 px-4 sm:px-8 lg:px-16 w-full mx-auto"
        style={{ maxWidth: '1400px' }}
      >
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-20">
          
          {/* Left Column: Avatar & Glow */}
          <div className="flex-shrink-0 flex justify-center w-full lg:w-auto">
            <Avatar />
          </div>

          {/* Right Column: Name, Bio, and Pathway Navigation */}
          <div className="flex-grow flex flex-col justify-center space-y-8 text-center lg:text-left w-full lg:max-w-3xl" data-aos="fade-left">
            <div>
              <h1 className="mt-0 font-extrabold uppercase text-white text-4xl sm:text-5xl md:text-7xl tracking-wide leading-none">
                Oluwaseun Ilori
              </h1>
              
              <p className="mt-4 text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 via-indigo-300 to-teal-400 bg-clip-text text-transparent">
                MSc Computer Science (AI) · Data Scientist at MyLane.AI
              </p>
              
              <p className="mt-6 text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                I design analytics pipelines, forecasting engines, and deep learning systems. 
                Select a pathway below to view my specialized portfolios for industry data science roles or computer vision research.
              </p>

              {/* Social links */}
              <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
                <a className="flex justify-center items-center w-10 h-10 text-white text-xl rounded-full border transition-all duration-300" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', borderColor: 'rgba(239, 68, 68, 0.2)' }} href="mailto:jideilori77@gmail.com" aria-label="Email"><i className="fa fa-at"></i></a>
                <a className="flex justify-center items-center w-10 h-10 text-white text-xl rounded-full border transition-all duration-300" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(255, 255, 255, 0.1)' }} href="https://github.com/jideilori/" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
                <a className="flex justify-center items-center w-10 h-10 text-white text-xl rounded-full border transition-all duration-300" style={{ backgroundColor: 'rgba(96, 165, 250, 0.1)', borderColor: 'rgba(96, 165, 250, 0.2)' }} href="https://twitter.com/_jideilori" target="_blank" rel="noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a className="flex justify-center items-center w-10 h-10 text-white text-xl rounded-full border transition-all duration-300" style={{ backgroundColor: 'rgba(29, 78, 216, 0.1)', borderColor: 'rgba(29, 78, 216, 0.2)' }} href="https://www.linkedin.com/in/oluwaseun-Ilori/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                <a className="flex justify-center items-center w-10 h-10 text-white text-xl rounded-full border transition-all duration-300" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', borderColor: 'rgba(255, 255, 255, 0.05)' }} href="https://jideilori.medium.com/" target="_blank" rel="noreferrer" aria-label="Medium"><i className="fab fa-medium-m"></i></a>
              </div>
            </div>

            {/* Split cards for the two tracks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 w-full">
              {/* Data Science Card */}
              <a href="/data-science" className="group">
                <div 
                  className="h-full p-6 sm:p-8 border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col justify-between text-left"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.015)',
                    borderColor: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '24px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.015)';
                  }}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">Industry & ML</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      Data Science
                    </h2>
                    <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                      Analytics, forecasting models, automation pipelines, and production MLOps systems.
                    </p>
                  </div>
                  <span className="mt-6 text-sm text-blue-400 font-bold flex items-center gap-1 group-hover:underline">
                    Explore DS Work <i className="fa fa-arrow-right text-xs"></i>
                  </span>
                </div>
              </a>

              {/* Research Card */}
              <a href="/research" className="group">
                <div 
                  className="h-full p-6 sm:p-8 border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col justify-between text-left"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.015)',
                    borderColor: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '24px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(13, 148, 136, 0.4)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.015)';
                  }}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-teal-500"></span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-teal-400">Research & Vision</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300">
                      Computer Vision
                    </h2>
                    <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                      Object detection, semantic segmentation, medical AI diagnostics, and publications.
                    </p>
                  </div>
                  <span className="mt-6 text-sm text-teal-400 font-bold flex items-center gap-1 group-hover:underline">
                    Explore Research <i className="fa fa-arrow-right text-xs"></i>
                  </span>
                </div>
              </a>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
