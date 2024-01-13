import FeaturedDevCard from "./FeaturedDevCard"
import featuredDevs from "../utility/featured-devs"

const Experience = () => {
	return (
		<div id="experience" data-aos="fade-up" className="portfolio-section flex flex-col md:flex-row relative mt-8">
			<div className="w-full md:w-3/5 lg:w-4/5 p-4 md:p-8">
				<h1 className="text-4xl text-black mb-4">Experience</h1>
				<div className="">
					<b className="text-black">TalaNanu </b> 
					Computer Vision Lead
					<b> [May 2023 - Present]</b>
					<br/>

					<b className="text-black">Team Tabono: </b> 
					MathWorks MiniDrone Competition	Winners of the virtual round EMEA, 2022.  
					<b> [Jun 22 - Oct 22]</b>
					<br/>
					
					<b className="text-black">Zummit Africa: </b> 
					Deep learning Intern
					<b> [Nov 21 - Mar 22]</b>
					<br/>

					<b className="text-black">Machine Learning Engineer: </b> 
					Freelance. 
					<b> [Sep 21 - Nov 21]</b>
					<br/>
					
					
				</div>
			</div>
			
		</div>

	)
}

export default Experience;