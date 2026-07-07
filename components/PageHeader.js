import Avatar from "./Avatar";

const PageHeader = ({ title, subtitle, bio, focusAreas, cvLink, variant = 'default' }) => {
	const gradientStyle = variant === 'research'
		? { background: 'linear-gradient(135deg, #111827 0%, #0f766e 50%, #1f2937 100%)' }
		: { background: 'linear-gradient(135deg, #111827 0%, #1e3a8a 50%, #1f2937 100%)' };

	const glowColor = variant === 'research'
		? 'rgba(13, 148, 136, 0.15)'
		: 'rgba(6, 182, 212, 0.15)';

	const pillClass = variant === 'research'
		? 'hero-pill track-cv-pill'
		: 'hero-pill track-ds-pill';

	return (
		<div className="relative bg-main bg-no-repeat bg-cover bg-top w-full overflow-hidden">
			<div className="absolute inset-0 opacity-95" style={gradientStyle}></div>
			<div className="absolute inset-0 bg-black opacity-25"></div>
			<div 
				className="absolute bottom-0 left-0 w-56 h-56 rounded-full blur-3xl"
				style={{ backgroundColor: glowColor }}
			></div>
			<div className="relative px-3 py-8 md:py-20 md:px-8 lg:px-32">
				<div className="flex flex-col md:flex-row items-center w-full max-w-7xl mx-auto">
					<Avatar />
					<div className="md:pl-20 w-full">
						<div className="px-4 md:px-0 text-center md:text-left text-white text-lg">
							{/* Social links */}
							<div className="flex flex-wrap gap-3 justify-center md:justify-start mb-6">
								<a className="flex justify-center items-center w-10 h-10 text-white text-xl bg-red-400 rounded-full" href="mailto:jideilori77@gmail.com" aria-label="Email"><i className="fa fa-at"></i></a>
								<a className="flex justify-center items-center w-10 h-10 text-black text-xl bg-white rounded-full" href="https://github.com/jideilori/" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
								<a className="flex justify-center items-center w-10 h-10 text-white text-xl bg-blue-400 rounded-full" href="https://twitter.com/_jideilori" target="_blank" rel="noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
								<a className="flex justify-center items-center w-10 h-10 text-white text-xl bg-blue-700 rounded-full" href="https://www.linkedin.com/in/oluwaseun-Ilori/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
								<a className="flex justify-center items-center w-10 h-10 text-white text-xl bg-black rounded-full" href="https://jideilori.medium.com/" target="_blank" rel="noreferrer" aria-label="Medium"><i className="fab fa-medium-m"></i></a>
							</div>

							{/* Name and title */}
							<h1 className="font-bold uppercase text-white text-3xl md:text-5xl tracking-wide">
								Oluwaseun Ilori
							</h1>
							<p className="mt-2 text-xl md:text-2xl text-blue-100 font-bold">
								{title}
							</p>
							{subtitle && (
								<p className="mt-1 text-sm text-blue-200">
									{subtitle}
								</p>
							)}

							{/* Bio */}
							<div className="mt-6 max-w-4xl rounded-2xl bg-black bg-opacity-20 px-5 py-5 md:px-8 md:py-6">
								<p className="text-base md:text-lg text-blue-50 leading-8">
									{bio}
								</p>

								{focusAreas && focusAreas.length > 0 && (
									<div className="mt-5 flex flex-wrap gap-2">
										{focusAreas.map((area) => (
											<span key={area} className={pillClass}>
												{area}
											</span>
										))}
									</div>
								)}

								<div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
									{cvLink && (
										<a
											href={cvLink}
											target="_blank"
											rel="noreferrer"
											className="inline-flex items-center rounded-full bg-white text-gray-800 px-6 py-3 font-bold shadow"
										>
											Download CV
										</a>
									)}
									<a
										href="https://www.linkedin.com/in/oluwaseun-Ilori/"
										target="_blank"
										rel="noreferrer"
										className="inline-flex items-center rounded-full border border-blue-100 border-opacity-40 bg-white bg-opacity-10 px-6 py-3 font-bold text-blue-50"
									>
										LinkedIn
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PageHeader;
