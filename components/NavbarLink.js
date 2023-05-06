import useScrollToView from '../hoc/useScrollToView'

const NavbarLink = ({ text, href, scrollable }) => {
	const scrollTargetToView = useScrollToView({ offset: 60 })

	return (
		<a className="whitespace-nowrap text-gray-500 border-b-4 border-gray-200 transition-all duration-700"
			data-target={scrollable ? `#${href}` : href}
			href={scrollable ? `#${href}` : href}
			onClick={scrollTargetToView}>
			{text}
		</a>
	)
}

export default NavbarLink;