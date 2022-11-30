//Scrolls to selected element when corresponding tag is clicked
export default function useScrollToView({ parentContainerRef }) {
	const scrollToView = () => {
		const targets = parentContainerRef.current.childNodes
		targets.forEach(target => {
			target.addEventListener('click', function (e) {
				const targetSection = this.dataset.target
				const targetElement = document.querySelector(`#${targetSection}`)
				if (!targetElement) return
				const scrollPosition = targetElement.offsetTop;
				document.documentElement.scrollTo({
					top: scrollPosition - 60,
					behavior: 'smooth'
				})
				e.preventDefault();
			})
		})
	}
	return { scrollToView }
}