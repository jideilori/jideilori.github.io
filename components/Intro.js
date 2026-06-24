import TagLine from "./TagLine";

const Intro = () => {
	const focusAreas = [
		'Data Science',
		'Computer Vision',
		'Natural Language Processing',
		'Explainable AI',
		'Forecasting',
		'MLOps & Deployment'
	];

	return (
		<div className="px-4 md:px-0 text-center md:text-left text-white text-lg">
			<TagLine />
			<div className="max-w-5xl rounded-3xl bg-black bg-opacity-25 px-5 py-6 md:px-8 md:py-8 lg:px-10">
				<p className="section-kicker mb-4">
					Applied AI for research and real-world systems
				</p>
				<h2 className="text-3xl md:text-5xl font-bold leading-snug md:leading-tight max-w-4xl">
					Data Scientist and AI Engineer building practical systems for real-world problems.
				</h2>
				<p className="mt-6 max-w-4xl text-base md:text-xl text-blue-50 leading-8 md:leading-9">
					I hold an MSc in Computer Science with an AI specialization and currently work as a Data Scientist at
					MyLane.AI. My work spans labor market analytics, computer vision systems, OCR pipelines, natural language
					processing, explainable AI, and research-driven product delivery.
				</p>

				<div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
					{focusAreas.map((area) => (
						<span key={area} className="hero-pill">
							{area}
						</span>
					))}
				</div>

				<div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
					<a
						href="#projects"
						className="inline-flex items-center rounded-full bg-white text-blue-700 px-6 py-3 font-bold shadow hover:text-blue-800"
					>
						View selected work
					</a>
					<a
						href="/cv/OLUWASEUN_ILORI_RESUME_26.pdf"
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center rounded-full border border-blue-100 border-opacity-40 bg-blue-900 bg-opacity-40 px-6 py-3 font-bold text-blue-50"
					>
						Download CV
					</a>
					<a
						href="https://www.linkedin.com/in/oluwaseun-Ilori/"
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center rounded-full border border-blue-100 border-opacity-40 bg-blue-900 bg-opacity-40 px-6 py-3 font-bold text-blue-50"
					>
						LinkedIn
					</a>
				</div>
			</div>
		</div>
	)
}

export default Intro;
