const certifications = [
	{
		title: 'Grant Writing Class',
		issuer: 'Research, Innovation and International Cooperation, Babcock University',
		period: 'Jun 2025',
		description: 'Training focused on proposal development, research communication, and funding readiness.'
	},
	{
		title: 'Deep Learning With PyTorch',
		issuer: 'OpenCV.org',
		period: 'Jan 2024',
		description: 'Practical deep learning training using PyTorch for model development and experimentation.'
	},
	{
		title: 'Convolutional Neural Networks in TensorFlow',
		issuer: 'DeepLearning.AI',
		period: 'Oct 2021',
		description: 'Applied CNN concepts, image workflows, and TensorFlow-based deep learning implementation.'
	},
	{
		title: 'Introduction to AI, ML and DL',
		issuer: 'DeepLearning.AI',
		period: 'Sep 2021',
		description: 'Foundational overview of artificial intelligence, machine learning, and deep learning systems.'
	},
	{
		title: 'Machine Learning with Python',
		issuer: 'CognitiveClass.ai',
		period: 'Jul 2020',
		description: 'Introductory machine learning coursework covering core concepts and Python-based workflows.'
	},
	{
		title: 'Computer Vision for Faces',
		issuer: 'Big Vision LLC / LearnOpenCV',
		period: 'Oct 2018',
		description: 'Covered image processing, OpenCV, Dlib, machine learning, and face recognition system development.'
	}
];

const Certifications = () => {
	return (
		<section id="certifications" data-aos="fade-up" className="portfolio-section relative mt-8">
			<div className="section-shell p-6 md:p-10">
				<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
					<div className="max-w-3xl">
						<p className="section-kicker">Certifications</p>
						<h2 className="section-title mt-4 text-3xl md:text-4xl font-bold">
							Courses and certifications that have shaped my technical background.
						</h2>
						<p className="muted-copy mt-4 text-base md:text-lg leading-8">
							Here are some of the courses and training I have completed over the years.
						</p>
					</div>
					<div className="surface-card p-6 lg:max-w-sm">
						<p className="text-sm uppercase tracking-widest text-blue-600 font-bold">Training areas</p>
						<p className="mt-3 text-black font-bold text-lg">
							Deep learning, computer vision, machine learning fundamentals, and research writing.
						</p>
					</div>
				</div>

				<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
					{certifications.map((certification) => (
						<div key={`${certification.title}-${certification.period}`} className="surface-card p-6">
							<div className="flex flex-col gap-2">
								<div className="flex flex-wrap gap-3 items-center">
									<h3 className="text-xl text-black font-bold">{certification.title}</h3>
									<span className="inline-flex rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-bold">
										{certification.period}
									</span>
								</div>
								<p className="text-blue-700 font-bold">{certification.issuer}</p>
							</div>
							<p className="mt-4 muted-copy leading-7">{certification.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Certifications;
