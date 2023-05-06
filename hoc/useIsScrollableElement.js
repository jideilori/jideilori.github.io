import { useEffect, useState } from "react";

const useDisplayScrollers = (targetRef) => {
	const [isScrollable, setIsScrollable] = useState(false)

	useEffect(() => {
		const target = targetRef.current
		if (target.scrollWidth > target.clientWidth) {
			setIsScrollable(true)
		} else {
			setIsScrollable(false)
		}
	}, [])
	
	return isScrollable
}

export default useDisplayScrollers;