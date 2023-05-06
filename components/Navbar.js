import { useRef } from "react"
import NavbarLink from "./NavbarLink"
import useIsScrollableElement from '../hoc/useIsScrollableElement'
import useDirectionalScrollers from '../hoc/useDirectionalScrollers'

const Navbar = () => {
	const navbarRef = useRef(null)
	const isScrollable = useIsScrollableElement(navbarRef)
	const { scrollLeft, scrollRight } = useDirectionalScrollers({
		targetRef: navbarRef,
		step: 200
	})

	const navbarLinks = [
		{text: 'Bio', href: 'about', scrollable: true},
		{text: 'Experience', href: 'experience', scrollable: true},
		{text: 'Portfolio', href: 'portfolio', scrollable: true},
		{text: 'Publications', href: 'publications', scrollable: true},
		{text: 'Academic CV', href: '/cv/oluwaseun-ilori-cv.pdf', scrollable: false},
		// {text: 'Resume', href: 'resume', scrollable: true},

		// {text: 'Proficiency', href: 'proficiency'},
		// {text: 'Projects', href: 'projects'},
		// {text: 'Testimonials', href: 'testimonials'},
		// {text: 'Partners', href: 'partners'},
		// {text: 'Clients', href: 'clients' },
		// {text: 'Booking', href: 'booking'},
		// {text: 'Testify', href: 'testify'},
		// {text: 'Consultation', href: 'consultation'},
		// {text: 'Feedback', href: 'feedback'}
	]

	return (
		<div className="sticky top-0 w-full py-3 bg-white z-10 shadow">
			<div className="relative flex w-full lg:w-11/12 xl:w-11/12 px-0 xl:px-8 items-center mx-auto">
				{isScrollable && (<div onClick={scrollLeft} className="absolute left-2 lg:left-0 bg-white shadow text-theme rounded-full flex justify-center items-center w-12 h-12"><i className="fa fa-arrow-left"></i></div>)}
				{isScrollable && (<div onClick={scrollRight} className="absolute right-2 lg:right-0 bg-white shadow text-theme rounded-full flex justify-center items-center w-12 h-12"><i className="fa fa-arrow-right"></i></div>)}

				<div
					ref={navbarRef}
					className={`
						${(isScrollable && 'px-10 md:px-10 lg:px-6')}
						${(!isScrollable && 'md:px-3 lg:px-0')}
						invisible-scrollbar flex items-center overflow-x-auto xl:px-4 w-10/12 md:w-11/12 mx-auto`
					}
				>
					<div className="flex flex-grow gap-4 md:gap-8 items-center mx-auto">
						{navbarLinks.map((link) => <NavbarLink key={link.text} text={link.text} href={link.href} scrollable={link.scrollable} />)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar;