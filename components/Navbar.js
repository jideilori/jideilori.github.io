import { useEffect } from "react"
import NavbarLink from "./NavbarLink"
import useScrollToView from '../hoc/useScrollToView'
import useDisplayScrollers from '../hoc/useDisplayScrollers'
import useDirectionalScrollers from '../hoc/useDirectionalScrollers'

export default function Navbar() {
    const { scrollToView } = useScrollToView()
    const { scrollers, displayScrollers } = useDisplayScrollers()
    const { scrollLeft, scrollRight } = useDirectionalScrollers()

    useEffect(() => {
        const section_selectors = document.querySelectorAll('#navbar_links_wrapper a')
        const navbar_links_container = document.querySelector('#navbar_links')
        scrollToView(section_selectors)
        displayScrollers(navbar_links_container)
    })

    const navbar_links = [
        {text: 'About', href: 'about'},
        {text: 'Proficiency', href: 'proficiency'},
        {text: 'Projects', href: 'projects'},
        // {text: 'Testimonials', href: 'testimonials'},
        // {text: 'Partners', href: 'partners'},
        {text: 'Clients', href: 'clients'},
        // {text: 'Booking', href: 'booking'},
        // {text: 'Testify', href: 'testify'},
        // {text: 'Consultation', href: 'consultation'},
        // {text: 'Feedback', href: 'feedback'}
    ]

    return(
        <div className="sticky top-0 flex w-full py-3 items-center bg-white z-10 shadow">					
            {scrollers && (<div onClick={() => scrollLeft('navbar_links')} className="absolute left-2 bg-white shadow text-theme rounded-full flex justify-center items-center w-12 h-12"><i className="fa fa-arrow-left"></i></div>)}
            {scrollers && (<div onClick={() => scrollRight('navbar_links')} className="absolute right-2 bg-white shadow text-theme rounded-full flex justify-center items-center w-12 h-12"><i className="fa fa-arrow-right"></i></div>)}
            
            <div id="navbar_links" className="invisible-scrollbar flex items-center overflow-x-auto w-4/5 md:w-6/12 mx-auto">
                <div id="navbar_links_wrapper" className="flex flex-grow justify-between items-center px-4 mx-auto">
                    {navbar_links.map((link) => {
                        return(
                            <NavbarLink key={link.text} text={link.text} href={link.href} />
                        )
                    })}
                </div>
            </div>					
        </div>
    )
}