export default function useDirectionalScrollers({ parentContainerRef }) {
	const scrollLeft = () => {
		const target = parentContainerRef.current
		target.scrollBy({
			left: -200,
			behavior: 'smooth'
		})
	}
	const scrollRight = () => {
		const target = parentContainerRef.current
		target.scrollBy({
			left: 200,
			behavior: 'smooth'
		})
	}
	return { scrollLeft, scrollRight }
}