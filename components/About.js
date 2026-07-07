const About = () => {
	const tracks = [
		{
			title: 'Data Scientist',
			trackClass: 'track-card-ds',
			badgeClass: 'track-ds-badge',
			dotClass: 'track-ds-dot',
			label: 'Industry Track',
			audience: 'For teams building data-driven products',
			capabilities: [
				'Labor market analysis, forecasting, and compensation parsing',
				'Data pipelines with BigQuery, Airflow, dbt, and GCS',
				'Analytics dashboards and reporting-ready datasets',
				'Web scraping, data cleaning, and validation workflows'
			]
		},
		{
			title: 'Computer Vision Researcher',
			trackClass: 'track-card-cv',
			badgeClass: 'track-cv-badge',
			dotClass: 'track-cv-dot',
			label: 'Research Track',
			audience: 'For advancing trustworthy visual AI',
			capabilities: [
				'Object detection, segmentation, and depth estimation',
				'Custom OCR pipelines and license plate recognition',
				'Explainable AI for healthcare and diagnostics',
				'Edge deployment and embedded vision systems'
			]
		}
	];

	return (
		<section id="about" data-aos="fade-up" className="portfolio-section relative mt-8">
			<div className="section-shell p-6 md:p-10">
				<div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
					<div className="lg:col-span-2 surface-card-dark p-6 md:p-8 text-white">
						<p className="section-kicker bg-blue-100 text-blue-700">About</p>
						<h2 className="mt-5 text-3xl md:text-4xl font-bold leading-tight">
							I work at the intersection of data science and computer vision research.
						</h2>
						<p className="mt-5 text-blue-100 leading-8">
							My data science work solves immediate business problems — analytics, forecasting,
							pipeline engineering. My computer vision research tackles deeper questions — how
							models see, what they miss, and how we explain their decisions.
						</p>
						<div className="mt-6 space-y-4 text-sm md:text-base text-blue-100">
							<p>
								<strong className="text-white">Education:</strong> MSc Computer Science (AI specialization),
								Babcock University. B.Eng Electrical and Electronics Engineering, University of Uyo.
							</p>
							<p>
								<strong className="text-white">Research interests:</strong> Computer Vision, Edge AI,
								Explainable AI, and Medical Image Analysis.
							</p>
						</div>
					</div>

					<div className="lg:col-span-3 flex flex-col gap-5">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
							{tracks.map((track) => (
								<div key={track.title} className={`surface-card p-6 ${track.trackClass}`}>
									<div className="flex items-center gap-3 mb-1">
										<span className={track.badgeClass}>{track.label}</span>
									</div>
									<h3 className="text-xl text-black font-bold mt-3 flex items-center gap-2">
										<span className={track.dotClass}></span>
										{track.title}
									</h3>
									<p className="text-sm text-blue-600 font-bold mt-1">{track.audience}</p>
									<ul className="mt-4 space-y-2">
										{track.capabilities.map((cap) => (
											<li key={cap} className="muted-copy text-sm leading-6 flex items-start gap-2">
												<span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400"></span>
												{cap}
											</li>
										))}
									</ul>
								</div>
							))}
						</div>

						<div className="connection-statement">
							<p className="text-sm font-bold text-gray-800 flex items-center gap-2 mb-2">
								<span className="track-ds-dot"></span>
								<span className="text-gray-400">+</span>
								<span className="track-cv-dot"></span>
								How they connect
							</p>
							<p className="muted-copy text-sm leading-7">
								My industry data work gives me production discipline — shipping pipelines, maintaining
								systems, working under business constraints. My research gives me depth — understanding
								model internals, reading papers, designing experiments. Together they make me a stronger
								scientist and a more effective engineer.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About;
