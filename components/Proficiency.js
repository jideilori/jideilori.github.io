import Socials from "./Socials"

export default function Proficiency() {

    const social_links = {
        facebook: 'oluwaseun.ilori',
        email: 'Jideilori77@gmail.com',
        twitter: 'jide_ilori',
        linkedin: 'oluwaseun-ilori'
    }

    return (
        <div id="proficiency" data-aos="fade-up" className="portfolio-section flex flex-col md:flex-row relative mt-8">
            <div className="w-full md:w-3/5 lg:w-4/5 p-4 md:p-8">
                <h1 className="text-4xl text-black mb-4">Proficiency</h1>
                <div className="">
                <h2>Level of skills acquired</h2>
				As a front end and back end developer, Mr. Aston specializes on conception, 
                mockup and further development of front end designs and backend functionalities 
                for both web pages and web applications. High end skills in CSS3, HTML5, JAVASCRIPT, 
                PHP, MYSQL and JQUERY are what makes him sought after in his niche.
                </div>
            </div>
            <div className="w-full md:w-2/5 lg:w-1/5 p-4 text-center">
                <h2 className="inline-block bg-black py-2 px-4 text-white">Python Developer</h2>
                <div className="relative py-4">
                    <img data-aos="zoom-in-left" src="images/advertisement/services/jide-ilori-gravatar.jpg" alt="Jide Ilori" className="border-b-4 border-gray-200 p-2 rounded-full w-24 h-24 mx-auto" width="100%" />					
                    <div className="text-xl mt-2"> Oluwaseun Ilori </div>
                    <div className="text-center mt-3">Computer vision ||  Web-scraping || Django || etc.</div>                    
                    <Socials socialMedia={social_links} />
                </div>
            </div>
        </div>

    )
}