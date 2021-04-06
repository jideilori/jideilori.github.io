export default function NavbarLink(props) {
    return(
        <a className="whitespace-nowrap mx-2 px-4 md:px-0 md:mx-0 text-gray-500 border-b-4 border-gray-200 transition-all duration-700" href={`#${props.href}`}>
            {props.text}
        </a>
    )
}