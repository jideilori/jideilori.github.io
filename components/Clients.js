import Socials from "./Socials"

export default function Clients() {

    const social_links = {
        email: 'gillgreg314@gmail.com',
    }

    return (
        <div id="clients" data-aos="fade-up" className="portfolio-section flex flex-col md:flex-row relative mt-8">
            <div className="w-full md:w-3/5 lg:w-4/5 p-4 md:p-8">
                <h1 className="text-4xl text-black mb-4">Clients</h1>
                <div className="grid grid-flow-rows grid-cols-1 md:grid-cols-3 gap-4 my-8">
                    <div data-aos="fade-up" data-aos-duration="500" className="bg-gray-200 border-gray-200 border-2 pt-2 rounded-lg overflow-hidden">
                        <img src="images/clients/vxTerminal.png" className="mx-auto mb-2 h-16" alt="vxTerminal" />                  
                        <div className="px-4 py-2 text-center bg-white text-red-400">vXTerminal</div>                  
                    </div>
                    <div data-aos="fade-up" data-aos-duration="600" className="bg-gray-200 border-gray-200 border-2 pt-2 rounded-lg overflow-hidden">
                        <img src="images/clients/sureTP.png" className="mx-auto mb-2 h-16" alt="SureTP" />                  
                        <div className="px-4 py-2 text-center bg-white text-blue-500">SureTP</div>                  
                    </div>
                    <div data-aos="fade-up" data-aos-duration="700" className="bg-gray-200 border-gray-200 border-2 pt-2 rounded-lg overflow-hidden">
                        <img src="images/clients/brand-amigo.png" className="mx-auto mb-2 h-16" alt="Brand Amigo" />                  
                        <div className="px-4 py-2 text-center bg-white text-pink-800">Brand Amigo</div>                  
                    </div>
                    <div data-aos="fade-up" data-aos-duration="800" className="bg-gray-200 border-gray-200 border-2 pt-2 rounded-lg overflow-hidden">
                        <img src="images/clients/coretell.png" className="mx-auto mb-2 h-16" alt="Coretell" />                  
                        <div className="px-4 py-2 text-center bg-white text-green-600">CoreTell</div>                  
                    </div>
                </div>
            </div>
            <div className="w-full md:w-2/5 lg:w-1/5 p-4 text-center">
                <h2 className="inline-block bg-black py-2 px-4 text-white">Copywriter</h2>
                <div className="relative py-4">
                    <img data-aos="zoom-in-left" src="images/advertisement/services/jeanecopywriter-gravatar.jpg" alt="Jeanecopywriter" className="border-b-4 border-gray-200 p-2 rounded-full w-24 h-24 mx-auto" width="100%" />
					
                    <div className="text-xl mt-2"> Jeanecopywriter </div>
                    <div className="text-center mt-3">
                        A seasoned copywriter there to add value to your works. 
                        Clicking the link below might be just about the best decision you've made in a while.<br/>
                        <a href="https://www.fiverr.com/jeanecopywriter?up_rollout=true">Visit </a> for all your copy/content gig or send a mail.
                    </div>
                    <Socials socialMedia={social_links} />
                </div>
            </div>
        </div>
    )
}