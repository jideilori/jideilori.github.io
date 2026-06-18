import useScrollToView from '../hoc/useScrollToView'

const NavbarLink = ({ text, href, scrollable }) => {
	const scrollTargetToView = useScrollToView({ offset: 60 })

	return (
		<a className="whitespace-nowrap text-gray-600 font-bold border-b-2 border-transparent transition-all duration-300 hover:text-blue-700 hover:border-blue-200 pb-1"
			data-target={scrollable ? `#${href}` : href}
			href={scrollable ? `#${href}` : href}
			onClick={scrollTargetToView}>
			{text}
		</a>
	)
}

export default NavbarLink;
