const TagLine = () => {
	const profileMeta = [
		'MSc Computer Science (AI)',
		'Data Scientist at MyLane.AI',
		'Computer Vision Engineer',
		'Natural Language Processing'
	];

	return (
		<div>
			<div data-aos="zoom-in-left" className="flex flex-wrap gap-3 justify-center md:justify-start px-4 md:px-0">
				{/* <a className="flex justify-center items-center w-8 h-8 text-white text-xl md:mr-4 bg-blue-500 rounded-full" href="Https://facebook.com/astongemmy">
					<i className="fab fa-facebook-f"></i>
				</a> */}
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
