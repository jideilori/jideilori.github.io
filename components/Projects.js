import React from 'react'
import ProjectCard from "./ProjectCard"
import FeaturedDevCard from './FeaturedDevCard'
import featuredDevs from '../utility/featured-devs'
import portfolioData from '../utility/portfolio-data'

const Projects = () => {
	return (
		<div id="projects" data-aos="fade-up" className="portfolio-section flex flex-col md:flex-row relative mt-8">
			<div className="w-full md:w-3/5 lg:w-4/5 p-4 md:p-8">
				<h1 className="text-4xl text-black mb-4">Projects</h1>
				<div className="">
					<p className="mb-8">
						Here are some of my projects involving computer vision that makes use of both classical image processing 
						techniques and modern day deep learning approaches. 
					</p>
					
					<ProjectSection projects={portfolioData.projects} />
				</div>
			</div>

		</div>

	)
}

const ProjectSection = ({ projects }) => (
	<>
		{projects.map(category => (
			<React.Fragment key={category.id}>
				<h3 className="text-xl text-black"> { category.title } </h3>
				<div className="grid grid-flow-rows grid-cols-1 md:grid-cols-2 gap-4 my-8">
					{category.projects.map(project => (
						<ProjectCard key={project.name} name={project.name} description={project.description} url={project.url} image={project.image} />
					))}
				</div>
			</React.Fragment>
		))}
	</>
)

export default Projects;