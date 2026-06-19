import React from 'react'
import ProjectCard from "./ProjectCard"
import portfolioData from '../utility/portfolio-data'

const BlogPosts = () => {
	return (
		<section id="blog-posts" data-aos="fade-up" className="portfolio-section relative mt-8">
			<div className="section-shell p-6 md:p-10">
				<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
					<div className="max-w-3xl">
						<p className="section-kicker">Blog Posts</p>
						<h2 className="section-title mt-4 text-3xl md:text-4xl font-bold">
							Technical writing on computer vision, deployment, and machine learning workflows.
						</h2>
						<p className="muted-copy mt-4 text-base md:text-lg leading-8">
							I also write about ideas, experiments, and implementation details from projects I have worked on.
						</p>
					</div>
					<div className="surface-card p-6 lg:max-w-sm">
						<p className="text-sm uppercase tracking-widest text-blue-600 font-bold">Topics</p>
						<p className="mt-3 text-black font-bold text-lg">
							Image classification, OCR, OpenCV applications, and deployment workflows.
						</p>
					</div>
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
						<ProjectCard key={post.name} name={post.name} description={post.description} url={post.url} image={post.image} imageFit={post.imageFit} />
					))}
				</div>
			</React.Fragment>
		))}
	</>
)

export default BlogPosts;
