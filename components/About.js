import featuredDevs from "../utility/featured-devs"
import FeaturedDevCard from "./FeaturedDevCard"

const About = () => {
	return (
		<div id="about" data-aos="fade-up" className="portfolio-section flex flex-col md:flex-row relative mt-8">
			<div className="w-full md:w-3/5 lg:w-4/5 p-4 md:p-8">
				<h1 className="text-4xl text-black mb-4">About</h1>
				<div data-aos="" className="">
					With so much learning and AI related projects over the years, I have acquired sound and impeccable knowledge covering several Ai technologies.
					<br/>
					{/* <br/> */}
				</div>
			</div>

		</div>
	)
}

export default About;