import Intro from "./Intro";
import ProfileName from "./ProfileName";
import ProfilePicture from "./ProfilePicture";

export default function Header() {
    return(
        <div className="relative bg-main bg-no-repeat bg-cover bg-top w-full min-h-320">          
            <div className="bg-gradient-to-b from-red-900 to-transparent p-2 md:py-16 md:px-8 lg:px-32">
				<div className="flex flex-col md:flex-row w-full">
                    <ProfilePicture />              								
                    <div className="md:pl-20">
                        <ProfileName />
                        <Intro />
                    </div>
                </div>
            </div>
        </div>
    )
}