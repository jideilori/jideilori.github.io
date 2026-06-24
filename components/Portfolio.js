import React from 'react'
import ProjectCard from "./ProjectCard"
import portfolioData from '../utility/portfolio-data'

const Portfolio = () => {
	return (
		<section id="projects" data-aos="fade-up" className="portfolio-section relative mt-8">
			<div className="section-shell p-6 md:p-10">
				<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
					<div className="max-w-3xl">
						<p className="section-kicker">Selected Projects</p>
						<h2 className="section-title mt-4 text-3xl md:text-4xl font-bold">
							Projects grouped by capability area so data work and computer vision work are easy to scan separately.
						</h2>
						<p className="muted-copy mt-4 text-base md:text-lg leading-8">
							The portfolio is organized to show the range of my work across analytics engineering, data pipelines,
							and computer vision systems.
						</p>
					</div>
					<div className="surface-card p-6 lg:max-w-sm">
						<p className="text-sm uppercase tracking-widest text-blue-600 font-bold">Focus Areas</p>
						<p className="mt-3 text-black font-bold text-lg leading-7">
							Data science, analytics pipelines, computer vision, OCR, and deployment workflows.
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
				{section.title && <h3 className="text-2xl text-black font-bold mt-2"> { section.title } </h3>}
				<div className="grid grid-flow-rows grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 my-6 md:my-8">
					{section.items.map(project => (
						<ProjectCard key={project.name} name={project.name} description={project.description} url={project.url} image={project.image} imageFit={project.imageFit} />
					))}
				</div>
			</React.Fragment>
		))}
	</>
)

export default Portfolio;
