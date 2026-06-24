const skillGroups = [
	{
		title: 'Programming and Data',
		items: ['Python', 'PostgreSQL', 'MATLAB/Simulink', 'NumPy', 'Pandas', 'Statsmodels', 'Prophet', 'Parquet', 'Web Scraping', 'Scrapy']
	},
	{
		title: 'Machine Learning and AI',
		items: ['PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn', 'OpenCV', 'spaCy', 'NLTK', 'Gensim']
	},
	{
		title: 'MLOps and Cloud',
		items: ['MLflow', 'Docker', 'FastAPI', 'Git', 'Google Cloud Platform', 'Google Cloud Storage', 'BigQuery', 'Airflow', 'dbt', 'Poetry', 'Azure ML Studio']
	},
	{
		title: 'Analytics and Visualization',
		items: ['Looker Studio', 'Matplotlib', 'Plotly', 'EDA', 'Forecasting', 'Compensation Parsing']
	}
];

const Skills = () => {
	return (
		<section id="skills" data-aos="fade-up" className="portfolio-section relative mt-8">
			<div className="section-shell p-6 md:p-10">
				<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
					<div className="max-w-3xl">
						<p className="section-kicker">Skills</p>
						<h2 className="section-title mt-4 text-3xl md:text-4xl font-bold">
							Tools and technologies I have used across data science, NLP, computer vision, and deployment.
						</h2>
						<p className="muted-copy mt-4 text-base md:text-lg leading-8">
							My work spans analytics, modeling, NLP, computer vision, and deployment, using tools that support both
							research and production delivery.
						</p>
					</div>
					<div className="surface-card p-6 lg:max-w-sm">
						<p className="text-sm uppercase tracking-widest text-blue-600 font-bold">Coverage</p>
						<p className="mt-3 text-black font-bold text-lg">
							Data analysis, forecasting, NLP, computer vision, APIs, cloud deployment, and research workflows.
						</p>
					</div>
				</div>

				<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
					{skillGroups.map((group) => (
						<div key={group.title} className="surface-card p-6">
							<h3 className="text-xl text-black font-bold">{group.title}</h3>
							<div className="mt-5 flex flex-wrap gap-3">
								{group.items.map((item) => (
									<span
										key={item}
										className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 px-4 py-2 text-sm font-bold"
									>
										{item}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Skills;
