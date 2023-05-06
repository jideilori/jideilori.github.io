const Socials = ({ socialMedia }) => {
	return (
		<div data-aos="fade-left" className="flex flex-wrap justify-center gap-2 px-4 py-4 md:px-0">
			{socialMedia.facebook && (
				<a href={`https://facebook.com/${socialMedia.facebook}`} className="flex justify-center items-center shadow w-8 h-8 text-white text-xl bg-blue-500 rounded-full">
					<i className="fab fa-facebook-f"></i>
				</a>
			)}
			{socialMedia.email && (
				<a href={`mailto:${socialMedia.email}`} className="flex justify-center items-center shadow w-8 h-8 text-white text-xl ml-2 bg-red-400 rounded-full">
					<i className="fa fa-at"></i>
				</a>
			)}
			{socialMedia.github && (
				<a href={`https://www.github.com/${socialMedia.github}`} className="flex justify-center items-center shadow w-8 h-8 text-black text-xl ml-2 bg-white rounded-full">
					<i className="fab fa-github"></i>
				</a>
			)}
			{socialMedia.twitter && (
				<a href={`https://twitter.com/${socialMedia.twitter}`} className="flex justify-center items-center shadow w-8 h-8 text-white text-xl ml-2 bg-blue-400 rounded-full">
					<i className="fab fa-twitter"></i>
				</a>
			)}
			{socialMedia.linkedin && (
				<a href={`https://www.linkedin.com/in/${socialMedia.linkedin}`} className="flex justify-center items-center shadow w-8 h-8 text-white text-xl ml-2 bg-blue-700 rounded-full">
					<i className="fab fa-linkedin"></i>
				</a>
			)}
			{socialMedia.instagram && (
				<a href={`https://www.instagram.com/${socialMedia.instagram}`} className="flex justify-center items-center shadow w-8 h-8 text-white text-xl ml-2 bg-pink-500 rounded-full">
					<i className="fab fa-instagram"></i>
				</a>
			)}
			{socialMedia.fiverr && (
				<a href={`https://www.fiverr.com/${socialMedia.fiverr}`} className="flex justify-center items-center shadow w-8 h-8 text-white text-xl ml-2 bg-green-500 rounded-full">
					<i className="fa fa-link"></i>
				</a>
			)}
		</div>
	)
}

export default Socials;