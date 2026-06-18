import Intro from "./Intro";
import ProfileName from "./ProfileName";
import Avatar from "./Avatar";

const Header = () => {
	return (
		<div className="relative bg-main bg-no-repeat bg-cover bg-top w-full overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 opacity-95"></div>
			<div className="absolute inset-0 bg-black opacity-25"></div>
			<div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-cyan-300 opacity-10 blur-3xl"></div>
			<div className="relative px-3 py-8 md:py-24 md:px-8 lg:px-32">
				<div className="flex flex-col md:flex-row items-center w-full max-w-7xl mx-auto">
					<Avatar />
					<div className="md:pl-20 w-full">
						<ProfileName />
						<Intro />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header;
