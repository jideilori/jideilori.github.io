import { useState } from "react";
import StackCloud from "./StackCloud";
import StackByCategory from "./StackByCategory";
import TagLine from "./TagLine";

export default function Intro() {
	const [isStackCloud, setStackCloud] = useState(false)

	return (
		<div className="px-4 md:px-0 text-center md:text-left text-white text-lg">
			<TagLine />
			{isStackCloud && <StackCloud />}
			<StackByCategory toggleStackCloud={(status) => setStackCloud(status)} />
		</div>
	)
}