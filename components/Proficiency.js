import FeaturedDevCard from "./FeaturedDevCard"
import featuredDevs from "../utility/featured-devs"

const Proficiency = () => {
	return (
		<div id="proficiency" data-aos="fade-up" className="portfolio-section flex flex-col md:flex-row relative mt-8">
			<div className="w-full md:w-3/5 lg:w-4/5 p-4 md:p-8">
				<h1 className="text-4xl text-black mb-4">Proficiency</h1>
				<div className="">
					{/* <h2>Level of skills acquired</h2> */}
					As a Full Stack developer, I possess great proficiency with tools such HTML5, Pug, Handlebars, Blade, and Jinja templating engines, CSS3, Vanilla Javascript, ReactJs, VueJs, Laravel, PHP, NodeJs, ExpressJs, Git, MongoDB, MySQL, PostgresSQL, Redis DB, etc.
					<br/>
					I can also boast of moderate capabilities with tools such as Python Flask, Docker, Kubernetes, AWS S3 bucket, AWS VPS, Material UI, etc.
				</div>
			</div>
			
			<FeaturedDevCard {...featuredDevs.oluwaseunIlori} />
		</div>

	)
}

export default Proficiency;