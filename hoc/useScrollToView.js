//Scrolls to selected element when corresponding tag is clicked
const useScrollToView = ({ offset = 0 }) => {
	const scrollTargetToView = (e) => {
		const targetSelector = e.target.dataset.target

		if (targetSelector.includes('#')) {
			const targetElement = document.querySelector(targetSelector)
			if (!targetElement) return
			
			const scrollPosition = targetElement.offsetTop;
			document.documentElement.scrollTo({
				top: scrollPosition - offset,
				behavior: 'smooth'
			})
			
			e.preventDefault();
		}
	}

	return scrollTargetToView
}

export default useScrollToView;