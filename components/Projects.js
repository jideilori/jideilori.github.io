import Socials from "./Socials"

export default function Projects() {
	const socialLink = {
		facebook: 'mstgen2',
		email: 'andersonbanny@gmail.com',
		instagram: 'andy.banny',
		linkedin: 'banny-anderson-599310163'
	}

	return (
		<div id="projects" data-aos="fade-up" className="portfolio-section flex flex-col md:flex-row relative mt-8">
			<div className="w-full md:w-3/5 lg:w-4/5 p-4 md:p-8">
				<h1 className="text-4xl text-black mb-4">Projects</h1>
				<div className="">
					<p className="mb-8">
						Amongst some of his projects include Vxterminal, SureTp, CoreTell, Brand Amigo and many more.
					</p>
					<h3 className="text-xl text-black">Projects curently in progress</h3>

					<div className="grid grid-flow-rows grid-cols-1 md:grid-cols-2 gap-4 my-8">
						<div data-aos="fade-in" data-aos-duration="500" className="project relative overflow-hidden h-64 bg-400">
							<img src="images/projects/recent/vxTerminal.png" className="h-full" width="100%" alt="vxTerminal" />
							<div className="description transition-all duration-700 absolute -bottom-full left-0 px-8 flex flex-col justify-center items-center w-full h-full bg-black bg-opacity-75">
								<div className="relative mx-auto text-center">
									<h1 className="text-center text-xl text-white">
										<strong>vxTerminal</strong>
									</h1>
									<p className="text-center text-white">A powerful business merchants search engine for the 21st century</p>
									{/* <a href="Https://vxTerminal.000webhostapp.com" className="inline-block mt-4 border-4 text-white rounded-full px-4 py-2">Visit Site</a> */}
								</div>
							</div>
						</div>

						<div data-aos="fade-in" data-aos-duration="600" className="project relative overflow-hidden h-64 bg-400">
							<img src="images/projects/recent/sureTP.png" className="" alt="SureTP" />
							<div className="description transition-all duration-700 absolute -bottom-full left-0 px-8 flex flex-col justify-center items-center w-full h-full bg-black bg-opacity-75">
								<div className="relative mx-auto text-center">
									<h1 className="text-center text-xl text-white">
										<strong>SureTP</strong>
									</h1>
									<p className="text-center text-white">A commuter-freindly transportation system for pinging ride across cities</p>
									{/* <a href="Https://suretp.000webhostapp.com" className="inline-block mt-4 border-4 text-white rounded-full px-4 py-2">Visit Site</a> */}
								</div>
							</div>
						</div>

					</div>

					<h3 className="text-xl text-black">Most Recent projects</h3>

					<div className="grid grid-flow-rows grid-cols-1 md:grid-cols-2 gap-4 my-8">
						<div data-aos="fade-in" data-aos-duration="700" className="project relative overflow-hidden h-64 bg-400">
							<img src="images/projects/recent/coretell.png" className="h-full" width="100%" alt="Coretell" />
							<div className="description transition-all duration-700 absolute -bottom-full left-0 px-8 flex flex-col justify-center items-center w-full h-full bg-black bg-opacity-75">
								<div className="relative mx-auto text-center">
									<h1 className="text-center text-xl text-white">
										<strong>CoreTell</strong>
									</h1>
									<p className="text-center text-white">
										A new age blogging platform for latest tech updates.
									</p>
									<a href="https://coretell.blogspot.com" className="inline-block mt-4 border-4 text-white rounded-full px-4 py-2">Visit Site</a>
								</div>
							</div>
						</div>

						<div data-aos="fade-in" data-aos-duration="800" className="project relative overflow-hidden h-64 bg-400">
							<img src="images/projects/recent/brand-amigo.png" className="" alt="Brand Amigo" />
							<div className="description transition-all duration-700 absolute -bottom-full left-0 px-8 flex flex-col justify-center items-center w-full h-full bg-black bg-opacity-75">
								<div className="relative mx-auto text-center">
									<h1 className="text-center text-xl text-white">
										<strong>Brand Amigo</strong>
									</h1>
									<p className="text-center text-white">An inspirational / Motivational blogging platform.</p>
									<a href="https://brandamigo.wordpress.com" className="inline-block mt-4 border-4 text-white rounded-full px-4 py-2">See Project</a>
								</div>
							</div>
						</div>

						<div data-aos="fade-in" data-aos-duration="900" className="project relative overflow-hidden h-64 bg-400">
							<img src="images/projects/recent/career-strive.png" className="" alt="Career Strive" />
							<div className="description transition-all duration-700 absolute -bottom-full left-0 px-8 flex flex-col justify-center items-center w-full h-full bg-black bg-opacity-75">
								<div className="relative mx-auto text-center">
									<h1 className="text-center text-xl text-white">
										<strong>Career Strive</strong>
									</h1>
									<p className="text-center text-white">A computer based testing and selection system for employment.</p>
									{/* <a href="https://brandamigo.wordpress.com" className="inline-block mt-4 border-4 text-white rounded-full px-4 py-2">See Project</a> */}
								</div>
							</div>
						</div>

					</div>

				</div>
			</div>

			<div className="w-full md:w-2/5 lg:w-1/5 p-4 md:pt-8 text-center">
				<h2 className="inline-block bg-black py-2 px-4 text-white">Hardware Programmer</h2>
				<div className="relative py-4">
					<img data-aos="zoom-in-left" src="images/advertisement/services/banny-anderson-gravatar.jpg" alt="Banny Anderson" className="border-b-4 border-gray-200 p-2 rounded-full w-24 h-24 mx-auto" width="100%" />

					<div className="text-xl mt-2"> Banny Anderson </div>
					<div className="text-center mt-3">Graphics Designer || Hardware Programmer.</div>
					<Socials socialMedia={socialLink} />
				</div>
			</div>

		</div>

	)
}