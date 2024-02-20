import featuredDevs from "../utility/featured-devs"
import FeaturedDevCard from "./FeaturedDevCard"

const About = () => {
	return (
		<div id="about" data-aos="fade-up" className="portfolio-section flex flex-col md:flex-row relative mt-8">
			<div className="w-full md:w-3/5 lg:w-4/5 p-4 md:p-8">
				<h1 className="text-4xl text-black mb-4">About</h1>
				<div data-aos="" className="">
				As a Machine Learning Engineer, I possess specialized skills in Computer Vision, backed by a robust background in developing, optimizing, and 
				deploying models for tasks such as image classification, object detection, tracking, and image segmentation.
				My expertise extends to both classical image processing methods and modern deep learning approaches, and I stay current with the latest research in the field.
					<br/>
					{/* <br/> */}
				</div>
			</div>

		</div>
	)
}

export default About;