const ProfileName = () => {
	return (
		<div data-aos="slide-down" className="py-4 md:py-8 px-4 md:px-0 text-center md:text-left">
			<h1 className="font-bold uppercase animated animator text-white text-3xl md:text-6xl tracking-wide">
				Oluwaseun Ilori
			</h1>
			<p className="mt-3 text-blue-100 text-base md:text-xl font-bold tracking-wide flex items-center justify-center md:justify-start gap-3">
				<span className="flex items-center gap-2">
					<span className="track-ds-dot"></span>
					Data Scientist
				</span>
				<span className="text-blue-300 text-sm">·</span>
				<span className="flex items-center gap-2">
					<span className="track-cv-dot"></span>
					Computer Vision Researcher
				</span>
			</p>
		</div>
	)
}

export default ProfileName;
