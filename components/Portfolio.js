import React from 'react'
import ProjectCard from "./ProjectCard"
import portfolioData from '../utility/portfolio-data'

const Portfolio = () => {
	return (
		<section id="projects" data-aos="fade-up" className="portfolio-section relative mt-8">
			<div className="section-shell p-6 md:p-10">
				<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
					<div className="max-w-3xl">
						<p className="section-kicker">Selected Projects</p>
						<h2 className="section-title mt-4 text-3xl md:text-4xl font-bold">
							Applied machine learning work across disease diagnostics, OCR, depth estimation, and scene understanding.
						</h2>
						<p className="muted-copy mt-4 text-base md:text-lg leading-8">
							These projects reflect the themes in my CV: strong computer vision foundations, end-to-end experimentation,
							and practical deployment choices for real users and real constraints.
						</p>
					</div>
					<div className="surface-card p-6 lg:max-w-sm">
						<p className="text-sm uppercase tracking-widest text-blue-600 font-bold">Focus</p>
						<p className="mt-3 text-black font-bold text-lg">
							Detection, OCR, segmentation, explainability, and deployment-ready APIs.
						</p>
					</div>
				</div>

				<div className="mt-8">
					<ProjectSection data={portfolioData.projects} />
				</div>
			</div>
		</section>

	)
}

const ProjectSection = ({ data }) => (
	<>
		{data.map(section => (
			<React.Fragment key={section.id}>
				{section.title && <h3 className="text-xl text-black font-bold"> { section.title } </h3>}
				<div className="grid grid-flow-rows grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 my-8">
					{section.items.map(project => (
						<ProjectCard key={project.name} name={project.name} description={project.description} url={project.url} image={project.image} imageFit={project.imageFit} />
					))}
				</div>
			</React.Fragment>
		))}
	</>
)

export default Portfolio;
