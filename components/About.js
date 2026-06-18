const About = () => {
	const focusAreas = [
		{
			title: 'Research-led problem solving',
			description: 'I translate recent machine learning and computer vision research into practical systems, with special interest in explainability and robust deployment.'
		},
		{
			title: 'Analytics with real business context',
			description: 'My recent work includes labor market analysis, workforce forecasting, compensation parsing, data cleaning, and insight delivery for decision-making teams.'
		},
		{
			title: 'Production-minded AI delivery',
			description: 'I have built and deployed APIs, OCR workflows, and vision models using tools such as FastAPI, Docker, Google Cloud Platform, PyTorch, and TensorFlow.'
		},
		{
			title: 'Teaching and mentorship',
			description: 'Alongside hands-on engineering, I support learners through SQL practicals, machine learning instruction, Linux system administration, and C programming tutoring.'
		}
	];

	return (
		<section id="about" data-aos="fade-up" className="portfolio-section relative mt-8">
			<div className="section-shell p-6 md:p-10">
				<div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
					<div className="lg:col-span-2 surface-card-dark p-6 md:p-8 text-white">
						<p className="section-kicker bg-blue-100 text-blue-700">About</p>
						<h2 className="mt-5 text-3xl md:text-4xl font-bold leading-tight">
							AI engineer with a strong blend of research depth and delivery focus.
						</h2>
						<p className="mt-5 text-blue-100 leading-8">
							I work across computer vision, forecasting, machine learning, and data analytics, with a preference
							for projects that require rigorous experimentation and real operational value.
						</p>
						<div className="mt-6 space-y-4 text-sm md:text-base text-blue-100">
							<p>
								<strong className="text-white">Education:</strong> MSc Computer Science (AI specialization),
								Babcock University. B.Eng Electrical and Electronics Engineering, University of Uyo.
							</p>
							<p>
								<strong className="text-white">Research interests:</strong> Computer Vision, Edge AI, Machine Learning.
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
