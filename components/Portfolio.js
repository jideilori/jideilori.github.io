import React from 'react'
import ProjectCard from "./ProjectCard"

const Portfolio = ({ projects, heading, subheading }) => {
	return (
		<section id="projects" data-aos="fade-up" className="portfolio-section relative mt-8">
			<div className="section-shell p-6 md:p-10">
				<div className="max-w-3xl">
					<p className="section-kicker">Selected Projects</p>
					<h2 className="section-title mt-4 text-3xl md:text-4xl font-bold">
						{heading}
					</h2>
					{subheading && (
						<p className="muted-copy mt-4 text-base md:text-lg leading-8">
							{subheading}
						</p>
					)}
				</div>

				<div className="mt-8">
					<div className="grid grid-flow-rows grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 my-6 md:my-8">
						{projects.map(project => (
							<ProjectCard
								key={project.name}
								name={project.name}
								description={project.description}
								url={project.url}
								image={project.image}
								imageFit={project.imageFit}
								track={project.track}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Portfolio;
