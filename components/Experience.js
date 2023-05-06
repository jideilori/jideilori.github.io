import FeaturedDevCard from "./FeaturedDevCard"
import featuredDevs from "../utility/featured-devs"

const Experience = () => {
	return (
		<div id="experience" data-aos="fade-up" className="portfolio-section flex flex-col md:flex-row relative mt-8">
			<div className="w-full md:w-3/5 lg:w-4/5 p-4 md:p-8">
				<h1 className="text-4xl text-black mb-4">Experience</h1>
				<div className="">
					{/* <h2>Level of skills acquired</h2> */}
					<b className="text-black">Team Tabono: </b> 
					MathWorks MiniDrone Competition	Winners of the virtual round EMEA, 2022. - 
					<i> Jun 22 - Oct 22</i>
					<br/>
					<b className="text-black">Machine Learning Engineer: </b> 
					Freelance. - 
					<i> Sep 21 - Nov 21</i>
					<br/>
					<b className="text-black">Zummit Africa: </b> 
					Deep learning Intern - 
					<i> Nov 21 - Mar 22</i>
					<br/>
				</div>
			</div>
			
			<FeaturedDevCard {...featuredDevs.oluwaseunIlori} />
		</div>

	)
}

export default Experience;