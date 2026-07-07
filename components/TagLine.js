const TagLine = () => {
	const profileMeta = [
		'Data Scientist at MyLane.AI',
		'Computer Vision Researcher',
		'MSc Computer Science (AI)'
	];

	return (
		<div>
			<div data-aos="zoom-in-left" className="flex flex-wrap gap-3 justify-center md:justify-start px-4 md:px-0">
				<a
					className="flex justify-center items-center w-10 h-10 text-white text-xl bg-red-400 rounded-full"
					href="mailto:jideilori77@gmail.com"
					aria-label="Send email to Oluwaseun Ilori"
				>
					<i className="fa fa-at"></i>
				</a>
				<a
					className="flex justify-center items-center w-10 h-10 text-black text-xl bg-white rounded-full"
					href="https://github.com/jideilori/"
					target="_blank"
					rel="noreferrer"
					aria-label="View GitHub profile"
				>
					<i className="fab fa-github"></i>
				</a>
				<a
					className="flex justify-center items-center w-10 h-10 text-white text-xl bg-blue-400 rounded-full"
					href="https://twitter.com/_jideilori"
					target="_blank"
					rel="noreferrer"
					aria-label="View Twitter profile"
				>
					<i className="fab fa-twitter"></i>
				</a>
				<a
					className="flex justify-center items-center w-10 h-10 text-white text-xl bg-blue-700 rounded-full"
					href="https://www.linkedin.com/in/oluwaseun-Ilori/"
					target="_blank"
					rel="noreferrer"
					aria-label="View LinkedIn profile"
				>
					<i className="fab fa-linkedin-in"></i>
				</a>
				<a
					className="flex justify-center items-center w-10 h-10 text-white text-xl bg-black rounded-full"
					href="https://jideilori.medium.com/"
					target="_blank"
					rel="noreferrer"
					aria-label="View Medium profile"
				>
					<i className="fab fa-medium-m"></i>
				</a>
			</div>
			<div data-aos="slide-up" className="mt-5 mb-6 flex flex-wrap gap-3 justify-center md:justify-start">
				{profileMeta.map((item) => (
					<span key={item} className="meta-pill">
						{item}
					</span>
				))}
			</div>
		</div>
	)
}

export default TagLine;
