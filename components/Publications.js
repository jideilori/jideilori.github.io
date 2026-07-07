import React from 'react'
import ProjectCard from "./ProjectCard"
import portfolioData from '../utility/portfolio-data'

const Publications = () => {
	return (
		<section id="publications" data-aos="fade-up" className="portfolio-section relative mt-8 mb-12">
			<div className="section-shell p-6 md:p-10">
				<div className="max-w-3xl">
					<p className="section-kicker">Publications</p>
					<h2 className="section-title mt-4 text-3xl md:text-4xl font-bold">
						Research in computer vision, explainable AI, and intelligent systems.
					</h2>
					<p className="muted-copy mt-4 text-base md:text-lg leading-8">
						My published work spans malaria detection, explainable AI in healthcare, and embedded
						surveillance systems.
					</p>
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
				<h3 className="text-xl text-black font-bold">{section.title}</h3>
				<div className="grid grid-flow-rows grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 my-8">
					{section.items.map(publication => (
						<ProjectCard
							key={publication.name}
							name={publication.name}
							description={publication.description}
							url={publication.url}
							image={publication.image}
							imageFit={publication.imageFit}
							track={publication.track}
						/>
					))}
				</div>
			</React.Fragment>
		))}
	</>
)

export default Publications;
