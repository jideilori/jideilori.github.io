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
					With so much learning, practice, and discoveries in the tech world over the years, I have vested myself with sound and impeccable intellect covering several web development technologies and infrastructures.
					<br/>
					I am an astute web developer who has been creating an amazing web presence for brands over the years.
					<br/>
					As a professional in this field, I have worked with many brands such as Designkago, Housezzy Studio, as well as individuals to transform their dreams and visions into reality. I take out time to discuss in detail with clients about their projects in order to create interactive websites with a friendly user experience that is very easy to navigate and use, while at the same time growing their business ultimately.
				</div>
			</div>

			<div className="w-full md:w-2/5 lg:w-1/5 p-4 md:pt-8 text-center">
				<h2 className="">Meet Uwakmfon Akpan on Social Media</h2>
				<Socials socialMedia={socialLink} />
			</div>

		</div>

	)
}