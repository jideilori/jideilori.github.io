import Socials from "./Socials"

export default function About() {
	const socialLink = {
		facebook: 'astongemmy',
		email: 'astongemmy@gmail.com',
		github: 'astongemmy',
		twitter: 'astongemmy',
		linkedin: 'astongemmy'
	}

	return (
		<div id="about" data-aos="fade-up" className="portfolio-section flex flex-col md:flex-row relative mt-8">
			<div className="w-full md:w-3/5 lg:w-4/5 p-4 md:p-8">
				<h1 className="text-4xl text-black mb-4">About</h1>
				<div data-aos="" className="">
					Aston Gemmy is an astute web developer who has been creating amazing web presence
					for numerous brands over the years.
					<br />
					As a professional in his field, he takes out time to discuss in details with clients
					about their project in order to create interactive websites with high friendly user
					experience that is very easy to navigate.
				</div>
			</div>

			<div className="w-full md:w-2/5 lg:w-1/5 p-4 md:pt-8 text-center">
				<h2 className="">Meet Uwakmfon Akpan on Social Media</h2>
				<Socials socialMedia={socialLink} />
			</div>

		</div>

	)
}