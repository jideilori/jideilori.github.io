export default function useIntersectionObserver({ parentContainerRef }) {
	const observer = new IntersectionObserver(function (entries) {
		const targetId = entries[0].target.id
		const sectionActivator = document.querySelector(`[data-target="${targetId}"]`)
		if (entries[0].isIntersecting == true) {
			sectionActivator.classList.add('border-gray-400')
			scrollToActivator(sectionActivator)
		} else {
			sectionActivator.classList.remove('border-gray-400')
		}
	}, { threshold: [0.3] });

	const observed = parentContainerRef.current.childNodes
	observed.forEach(element => observer.observe(element))
}

const scrollToActivator = (activator) => {
	const activatorParent = activator.parentElement.parentElement
	const activatorParentRect = activatorParent.getBoundingClientRect();
	const activatorRect = activator.getBoundingClientRect();
	const activatorLeftOffset = activatorRect.left - activatorParentRect.left
	
	activatorParent.scrollTo({
		left: activatorLeftOffset - 20,
		behavior: 'smooth'
	})
}