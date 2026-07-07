const Skills = ({ skillGroups, heading, subheading }) => {
	const getTrackPillStyle = (track) => {
		if (track === 'computer-vision') {
			return {
				backgroundColor: 'rgba(13, 148, 136, 0.1)',
				color: '#0d9488',
				border: '1px solid rgba(13, 148, 136, 0.2)'
			};
		}
		if (track === 'shared') {
			return {
				backgroundColor: 'rgba(139, 92, 246, 0.1)',
				color: '#7c3aed',
				border: '1px solid rgba(139, 92, 246, 0.2)'
			};
		}
		return {
			backgroundColor: 'rgba(37, 99, 235, 0.1)',
			color: '#2563eb',
			border: '1px solid rgba(37, 99, 235, 0.2)'
		};
	};

	return (
		<section id="skills" data-aos="fade-up" className="portfolio-section relative mt-8">
			<div className="section-shell p-6 md:p-10">
				<div className="max-w-3xl">
					<p className="section-kicker">Skills</p>
					<h2 className="section-title mt-4 text-3xl md:text-4xl font-bold">
						{heading}
					</h2>
					{subheading && (
						<p className="muted-copy mt-4 text-base md:text-lg leading-8">
							{subheading}
						</p>
					)}
				</div>

				<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
					{skillGroups.map((group) => (
						<div key={group.title} className="surface-card p-6">
							<h3 className="text-xl text-black font-bold">{group.title}</h3>
							<div className="mt-5 flex flex-wrap gap-3">
								{group.items.map((item) => (
									<span
										key={item}
										className="inline-flex items-center rounded-full px-4 py-2 text-sm font-bold"
										style={getTrackPillStyle(group.track)}
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
