export default function NavbarLink({ text, href }) {
	return (
		<a data-target={href} className="whitespace-nowrap text-gray-500 border-b-4 border-gray-200 transition-all duration-700" href={`#${href}`}>
			{text}
		</a>
	)
}