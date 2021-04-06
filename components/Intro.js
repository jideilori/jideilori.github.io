import StackCloud from "./StackCloud";
import TagLine from "./TagLine";

export default function Intro() {
    return(
        <div className="px-4 md:px-0 text-center md:text-left text-white text-lg">
            <TagLine />
            <StackCloud />
        </div>
    )
}