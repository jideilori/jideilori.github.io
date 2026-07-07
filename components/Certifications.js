const Certifications = ({ certifications, heading, subheading }) => {
	return (
		<section id="certifications" data-aos="fade-up" className="portfolio-section relative mt-8">
			<div className="section-shell p-6 md:p-10">
				<div className="max-w-3xl">
					<p className="section-kicker">Certifications</p>
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
					{certifications.map((cert) => (
						<div key={`${cert.title}-${cert.period}`} className="surface-card p-6">
							<div className="flex flex-col gap-2">
								<div className="flex flex-wrap gap-3 items-center">
									<h3 className="text-xl text-black font-bold">{cert.title}</h3>
									<span className="inline-flex rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-bold">
										{cert.period}
									</span>
								</div>
								<p className="text-blue-700 font-bold">{cert.issuer}</p>
							</div>
							<p className="mt-4 muted-copy leading-7">{cert.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Certifications;
