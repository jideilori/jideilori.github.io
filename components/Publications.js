import React from 'react'
import ProjectCard from "./ProjectCard"
import FeaturedDevCard from './FeaturedDevCard'
import featuredDevs from '../utility/featured-devs'
import portfolioData from '../utility/portfolio-data'

const Publications = () => {
	return (
		<div id="publications" data-aos="fade-up" className="portfolio-section flex flex-col md:flex-row relative mt-8">
			<div className="w-full md:w-3/5 lg:w-4/5 p-4 md:p-8">
				<h1 className="text-4xl text-black mb-4">Publications</h1>
				<div className="">
					{/* <p className="mb-8">
						Here are some of my projects involving computer vision that makes use of both classical image processing techniques and modern day deep learning approaches.
					</p> */}
					
					<PublicationSection data={portfolioData.publications} />
				</div>
			</div>

			{/* <FeaturedDevCard {...featuredDevs.bannyAnderson} /> */}
		</div>

	)
}

const PublicationSection = ({ data }) => (
	<>
		{data.map(section => (
			<React.Fragment key={section.id}>
				<h3 className="text-xl text-black"> { section.title } </h3>
				<div className="grid grid-flow-rows grid-cols-1 md:grid-cols-2 gap-4 my-8">
					{section.items.map(publication => (
						<ProjectCard key={publication.name} name={publication.name} description={publication.description} url={publication.url} image={publication.image} />
					))}
				</div>
			</React.Fragment>
		))}
	</>
)

export default Publications;