import { useEffect, useRef } from "react"
import NavbarLink from "./NavbarLink"
import useScrollToView from '../hoc/useScrollToView'
import useDisplayScrollers from '../hoc/useDisplayScrollers'
import useDirectionalScrollers from '../hoc/useDirectionalScrollers'

export default function Navbar() {
	const navbarLinkRef = useRef(null)
	const scrollToViewParentRef = useRef(null)

	const { scrollToView } = useScrollToView({
		parentContainerRef: scrollToViewParentRef
	})
	
	const { scrollers, displayScrollers } = useDisplayScrollers({
		parentContainerRef: navbarLinkRef
	})
	const { scrollLeft, scrollRight } = useDirectionalScrollers({
		parentContainerRef: navbarLinkRef
	})

	useEffect(() => {
		const section_selectors = document.querySelectorAll('#navbar_links_wrapper a')
		scrollToView(section_selectors)
		displayScrollers()
	})

	const navbarLinks = [
		{text: 'About', href: 'about'},
		{text: 'Proficiency', href: 'proficiency'},
		{text: 'Projects', href: 'projects'},
		// {text: 'Testimonials', href: 'testimonials'},
		// {text: 'Partners', href: 'partners'},
		{text: 'Clients', href: 'clients' },
		// {text: 'Booking', href: 'booking'},
		// {text: 'Testify', href: 'testify'},
		// {text: 'Consultation', href: 'consultation'},
		// {text: 'Feedback', href: 'feedback'}
	]

	return (
		<div className="sticky top-0 w-full py-3 bg-white z-10 shadow">
			<div className="relative flex w-full lg:w-11/12 xl:w-11/12 px-0 xl:px-8 items-center mx-auto">
				{scrollers && (<div onClick={scrollLeft} className="absolute left-2 lg:left-0 bg-white shadow text-theme rounded-full flex justify-center items-center w-12 h-12"><i className="fa fa-arrow-left"></i></div>)}
				{scrollers && (<div onClick={scrollRight} className="absolute right-2 lg:right-0 bg-white shadow text-theme rounded-full flex justify-center items-center w-12 h-12"><i className="fa fa-arrow-right"></i></div>)}

				<div ref={navbarLinkRef}
					className={`
						${(scrollers && 'px-10 md:px-10 lg:px-6')}
						${(!scrollers && 'md:px-3 lg:px-0')}
						invisible-scrollbar flex items-center overflow-x-auto xl:px-4 w-10/12 md:w-11/12 mx-auto`
					}
				>
					<div ref={scrollToViewParentRef} className="flex flex-grow gap-4 md:gap-8 items-center mx-auto">
						{navbarLinks.map((link) => <NavbarLink key={link.text} text={link.text} href={link.href} />)}
					</div>
				</div>
			</div>
		</div>
	)
}