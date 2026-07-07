import React from 'react'
import ProjectCard from "./ProjectCard"
import portfolioData from '../utility/portfolio-data'

const BlogPosts = () => {
	return (
		<section id="blog-posts" data-aos="fade-up" className="portfolio-section relative mt-8">
			<div className="section-shell p-6 md:p-10">
				<div className="max-w-3xl">
					<p className="section-kicker">Blog Posts</p>
					<h2 className="section-title mt-4 text-3xl md:text-4xl font-bold">
						Technical writing on computer vision, deployment, and applied ML.
					</h2>
					<p className="muted-copy mt-4 text-base md:text-lg leading-8">
						I write about ideas, experiments, and implementation details from
						my computer vision projects.
					</p>
				</div>

				<div className="mt-8">
					<BlogPostSection data={portfolioData.blogPosts} />
				</div>
			</div>
		</section>
	)
}

const BlogPostSection = ({ data }) => (
	<>
		{data.map(section => (
			<React.Fragment key={section.id}>
				<h3 className="text-xl text-black font-bold"> { section.title } </h3>
				<div className="grid grid-flow-rows grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 my-8">
					{section.items.map(post => (
						<ProjectCard
							key={post.name}
							name={post.name}
							description={post.description}
							url={post.url}
							image={post.image}
							imageFit={post.imageFit}
							track={post.track}
						/>
					))}
				</div>
			</React.Fragment>
		))}
	</>
)

export default BlogPosts;
