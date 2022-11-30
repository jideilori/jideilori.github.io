import { useState } from "react";

export default function useDisplayScrollers({ parentContainerRef }) {
	const [scrollers, setScrollers] = useState(false)

	const displayScrollers = () => {
		const target = parentContainerRef.current
		if (target.scrollWidth > target.clientWidth) {
			setScrollers(true)
		} else {
			setScrollers(false)
		}
	}

	return { scrollers, displayScrollers }
}