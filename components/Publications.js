import React from 'react'
import ProjectCard from "./ProjectCard"
import portfolioData from '../utility/portfolio-data'

const Publications = () => {
	return (
		<section id="publications" data-aos="fade-up" className="portfolio-section relative mt-8 mb-12">
			<div className="section-shell p-6 md:p-10">
				<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
					<div className="max-w-3xl">
						<p className="section-kicker">Publications</p>
						<h2 className="section-title mt-4 text-3xl md:text-4xl font-bold">
							Research outputs that reflect my interest in trustworthy computer vision and applied AI.
						</h2>
						<p className="muted-copy mt-4 text-base md:text-lg leading-8">
							The publication section now mirrors the academic work on your CV, highlighting malaria detection,
							explainable AI in healthcare, and embedded surveillance systems.
						</p>
					</div>
					<div className="surface-card p-6 lg:max-w-sm">
						<p className="text-sm uppercase tracking-widest text-blue-600 font-bold">Research themes</p>
						<p className="mt-3 text-black font-bold text-lg">
							Computer vision, explainability, healthcare AI, and intelligent sensing systems.
						</p>
					</div>
				</div>

				<div className="mt-8">
					<PublicationSection data={portfolioData.publications} />
				</div>
			</div>
		</section>

	)
}

const PublicationSection = ({ data }) => (
	<>
		{data.map(section => (
			<React.Fragment key={section.id}>
				<h3 className="text-xl text-black font-bold"> { section.title } </h3>
				<div className="grid grid-flow-rows grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 my-8">
					{section.items.map(publication => (
						<ProjectCard key={publication.name} name={publication.name} description={publication.description} url={publication.url} image={publication.image} imageFit={publication.imageFit} />
					))}
				</div>
			</React.Fragment>
		))}
	</>
)

export default Publications;
