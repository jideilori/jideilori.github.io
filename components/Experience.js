const Experience = ({ roles, achievements, heading, subheading }) => {
	return (
		<section id="experience" data-aos="fade-up" className="portfolio-section relative mt-8">
			<div className="section-shell p-6 md:p-10">
				<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
					<div className="max-w-2xl">
						<p className="section-kicker">Experience</p>
						<h2 className="section-title mt-4 text-3xl md:text-4xl font-bold">
							{heading}
						</h2>
						{subheading && (
							<p className="muted-copy mt-4 text-base md:text-lg leading-8">
								{subheading}
							</p>
						)}
					</div>
					{achievements && achievements.length > 0 && (
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
					)}
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
