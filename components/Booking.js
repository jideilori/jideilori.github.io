import Socials from "./Socials"

export default function Booking() {

    const social_links = {
        email: 'caitybrian808@gmail.com',
        twitter: 'idbrain',
        linkedin: 'idongesit-ansa-2a0874149'
    }

    return (
        <div id="booking" data-aos="fade-up" className="portfolio-section flex flex-col md:flex-row relative mt-8">
            <div className="w-full md:w-3/5 lg:w-4/5 p-4 md:p-8">
                <h1 className="text-4xl text-black mb-4">Booking</h1>
                <h2 className="text-xl text-gray-600">Business hours</h2>								
                <div className="text-black">
                    Mondays, Wednesdays & Fridays
                    <br/>
                    8am - 10am
                </div>

                <div className="relative my-8">
                    <form method="POST">
                        <div className="grid grid-flow-rows grid-cols-1 md:grid-cols-2 gap-8">                  
                            <div className="relative flex justify-between bg-gray-200 border-2 rounded-lg">
                                <span className="absolute top-0 left-0 flex justify-center items-center w-12 h-full bg-gray-200">
                                    <i className="fa fa-calendar-alt"></i>
                                </span>
                                <input type="date" className="outline-none w-full py-2 pl-14 pr-2 rounded-lg" />
                            </div>                  
                            <div className="relative flex justify-between bg-gray-200 border-2 rounded-lg">
                                <span className="absolute top-0 left-0 flex justify-center items-center w-12 h-full bg-gray-200">
                                    <i className="fa fa-user-alt"></i>
                                </span>
                                <input type="text" className="outline-none w-full py-2 pl-14 pr-2 rounded-lg" placeholder="Name" />
                            </div>                  
                            <div className="relative flex justify-between bg-gray-200 border-2 rounded-lg">
                                <span className="absolute top-0 left-0 flex justify-center items-center w-12 h-full bg-gray-200">
                                    <i className="fa fa-envelope"></i>
                                </span>
                                <input type="email" className="outline-none w-full py-2 pl-14 pr-2 rounded-lg" placeholder="@" />
                            </div>
                        </div>
                        <button type="submit" className="hover:bg-blue-600 shadow rounded-tl-lg rounded-tr-lg rounded-bl-xl rounded-br-3xl my-8 px-8 py-2 text-white bg-blue-400 transition-all duration-700">
                            Book Appointment
                        </button>
                    </form>
                </div>
            </div>

            <div className="w-full md:w-2/5 lg:w-1/5 p-4 text-center">
                <h2 className="inline-block bg-black py-2 px-4 text-white">Researcher & Data Scientist</h2>
                <div className="relative py-4">
                    <img data-aos="zoom-in-left" src="images/advertisement/services/idongesit-ansa-gravatar.jpg" alt="Idongesit Ansa" className="border-b-4 border-gray-200 p-2 rounded-full w-24 h-24 mx-auto" width="100%" />
					
                    <div className="text-xl mt-2"> Idongesit Ansa </div>
                    <div className="text-center mt-3">
                        Researcher || Machine Learning || Tutor (MATLAB/PYTHON)
                    </div>
                    <Socials socialMedia={social_links} />
                </div>
            </div>
        </div>
    )
}