import TagLine from "./TagLine";

const Intro = () => {
	const dsAreas = [
		'Analytics & Forecasting',
		'Data Pipelines',
		'NLP',
		'MLOps & Deployment'
	];

	const cvAreas = [
		'Object Detection',
		'Semantic Segmentation',
		'OCR Systems',
		'Explainable AI',
		'Edge AI'
	];

	return (
		<div className="px-4 md:px-0 text-center md:text-left text-white text-lg">
			<TagLine />
			<div className="max-w-5xl rounded-3xl bg-black bg-opacity-25 px-5 py-6 md:px-8 md:py-8 lg:px-10">
				<p className="section-kicker mb-4">
					Applied AI for industry and research
				</p>
				<h2 className="text-3xl md:text-5xl font-bold leading-snug md:leading-tight max-w-4xl">
					Data Scientist. Computer Vision Researcher.
				</h2>
				<p className="mt-6 max-w-4xl text-base md:text-xl text-blue-50 leading-8 md:leading-9">
					I build data systems for real-world impact and research vision models for trustworthy AI.
					My industry work sharpens my research, and my research deepens my engineering. I hold an
					MSc in Computer Science with an AI specialization and currently work as a Data Scientist
					at MyLane.AI.
				</p>

				{/* Dual-track focus areas */}
				<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<p className="hero-track-label text-blue-300 flex items-center gap-2">
							<span className="track-ds-dot"></span>
							Data Science
						</p>
						<div className="flex flex-wrap gap-2">
							{dsAreas.map((area) => (
								<span key={area} className="hero-pill track-ds-pill">
									{area}
								</span>
							))}
						</div>
					</div>
					<div>
						<p className="hero-track-label text-teal-300 flex items-center gap-2">
							<span className="track-cv-dot"></span>
							Computer Vision
						</p>
						<div className="flex flex-wrap gap-2">
							{cvAreas.map((area) => (
								<span key={area} className="hero-pill track-cv-pill">
									{area}
								</span>
							))}
						</div>
					</div>
				</div>

				<div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
					<a
						href="#data-science-projects"
						className="inline-flex items-center gap-2 rounded-full bg-white text-blue-700 px-6 py-3 font-bold shadow hover:text-blue-800"
					>
						<span className="track-ds-dot"></span>
						View Data Science Work
					</a>
					<a
						href="#cv-research-projects"
						className="inline-flex items-center gap-2 rounded-full bg-teal-50 text-teal-700 px-6 py-3 font-bold shadow hover:text-teal-800"
					>
						<span className="track-cv-dot"></span>
						View Research Portfolio
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
