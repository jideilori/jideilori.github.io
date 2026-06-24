const About = () => {
	const focusAreas = [
		{
			title: 'Data science and analytics',
			description: 'My work includes labor market analysis, forecasting, compensation parsing, data cleaning, and turning raw data into reporting-ready outputs for decision making.'
		},
		{
			title: 'Computer vision and NLP',
			description: 'I work across computer vision and natural language processing, building systems for detection, OCR, image understanding, and language-driven data workflows.'
		},
		{
			title: 'Data and ML systems',
			description: 'I build end-to-end systems that go from data collection and validation to modeling, storage, cloud workflows, APIs, and analytics dashboards.'
		},
		{
			title: 'Research and teaching',
			description: 'Alongside hands-on engineering, I contribute through research, tutoring, SQL practicals, machine learning instruction, Linux system administration, and technical mentorship.'
		}
	];

	return (
		<section id="about" data-aos="fade-up" className="portfolio-section relative mt-8">
			<div className="section-shell p-6 md:p-10">
				<div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
					<div className="lg:col-span-2 surface-card-dark p-6 md:p-8 text-white">
						<p className="section-kicker bg-blue-100 text-blue-700">About</p>
						<h2 className="mt-5 text-3xl md:text-4xl font-bold leading-tight">
							Data scientist and AI engineer with a strong mix of research, analytics, and delivery experience.
						</h2>
						<p className="mt-5 text-blue-100 leading-8">
							I build systems and analysis workflows that connect data collection, modeling, experimentation, and
							deployment. My interests span data science, computer vision, NLP, forecasting, and practical machine
							learning for real-world problems.
						</p>
						<div className="mt-6 space-y-4 text-sm md:text-base text-blue-100">
							<p>
								<strong className="text-white">Education:</strong> MSc Computer Science (AI specialization),
								Babcock University. B.Eng Electrical and Electronics Engineering, University of Uyo.
							</p>
							<p>
								<strong className="text-white">Research interests:</strong> Computer Vision, Edge AI, Machine Learning, and Explainable AI.
							</p>
						</div>
					</div>

					<div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
						{focusAreas.map((area) => (
							<div key={area.title} className="surface-card p-6">
								<h3 className="text-xl text-black font-bold">{area.title}</h3>
								<p className="mt-3 muted-copy leading-7">{area.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default About;
