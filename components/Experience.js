const Experience = () => {
	const roles = [
		{
			company: 'MyLane.AI',
			title: 'Data Scientist',
			period: 'Jul 2024 - Present',
			highlights: [
				'Analyze U.S. labor market trends using job postings data, BLS, and Census sources.',
				'Build forecasting models for workforce growth across healthcare specialties.',
				'Support compensation parsing systems for wage extraction and normalization.'
			]
		},
		{
			company: 'TalaNanu',
			title: 'Computer Vision Engineer',
			period: 'May 2023 - Jun 2024',
			highlights: [
				'Trained and deployed a fine-grained image classifier that reached 98% accuracy.',
				'Reduced OCR inference latency from over one minute to under 20 seconds.',
				'Delivered model training and deployment workflows with Docker, FastAPI, and GCP.'
			]
		},
		{
			company: 'Babcock University',
			title: 'Teaching Assistant and E-Tutor',
			period: 'Oct 2025 - Present',
			highlights: [
				'Teach machine learning, Linux system administration, C programming, and data management.',
				'Lead practical SQL sessions for Database Systems Design, Implementation and Management.'
			]
		},
		{
			company: 'Zummit Africa',
			title: 'Deep Learning Intern',
			period: 'Nov 2021 - Mar 2022',
			highlights: [
				'Led an emotion detection project from predictive modeling through deployment.',
				'Supported team members who were new to deep learning workflows.'
			]
		}
	];

	const achievements = [
		'Won the 2022 MathWorks MiniDrone Competition virtual round in the EMEA region, finishing ahead of 330+ teams.',
		'Published research spanning malaria detection, explainable AI in healthcare, and smart surveillance systems.',
		'Designed systems across diagnostics, OCR, object detection, segmentation, and forecasting.'
	];

	return (
		<section id="experience" data-aos="fade-up" className="portfolio-section relative mt-8">
			<div className="section-shell p-6 md:p-10">
				<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
					<div className="max-w-2xl">
						<p className="section-kicker">Experience</p>
						<h2 className="section-title mt-4 text-3xl md:text-4xl font-bold">
							Recent roles across data science, computer vision, teaching, and applied research.
						</h2>
						<p className="muted-copy mt-4 text-base md:text-lg leading-8">
							My background combines experimentation, production delivery, and technical communication. I work
							best on teams where insight quality matters as much as implementation quality.
						</p>
					</div>
					<div className="surface-card p-6 lg:max-w-md">
						<h3 className="text-xl font-bold text-black">Selected wins</h3>
						<ul className="mt-4 space-y-3 muted-copy">
							{achievements.map((item) => (
								<li key={item} className="leading-7">
									{item}
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
					{roles.map((role) => (
						<div key={`${role.company}-${role.title}`} className="surface-card p-6">
							<div className="flex flex-col gap-2">
								<div className="flex flex-wrap gap-3 items-center">
									<h3 className="text-2xl font-bold text-black">{role.company}</h3>
									<span className="inline-flex rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-bold">
										{role.period}
									</span>
								</div>
								<p className="text-blue-700 font-bold">{role.title}</p>
							</div>
							<ul className="mt-5 space-y-3 muted-copy">
								{role.highlights.map((highlight) => (
									<li key={highlight} className="leading-7">
										{highlight}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>

	)
}

export default Experience;
