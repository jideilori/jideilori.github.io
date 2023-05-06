const useDirectionalScrollers = ({ targetRef, step = 200 }) => {
	const scrollLeft = () => {
		const target = targetRef.current
		target.scrollBy({
			left: -step,
			behavior: 'smooth'
		})
	}
	const scrollRight = () => {
		const target = targetRef.current
		target.scrollBy({
			left: step,
			behavior: 'smooth'
		})
	}
	return { scrollLeft, scrollRight }
}

export default useDirectionalScrollers;