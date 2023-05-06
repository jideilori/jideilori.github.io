import { useEffect } from "react";

const useScrollToIntersectedItem = ({ targetRef, offset = 20 }) => {
	const scrollToActivator = (activator, offset) => {
		const activatorParent = activator.parentElement.parentElement
		const activatorParentRect = activatorParent.getBoundingClientRect();
		const activatorRect = activator.getBoundingClientRect();
		const activatorLeftOffset = activatorRect.left - activatorParentRect.left
		
		activatorParent.scrollTo({
			left: activatorLeftOffset - offset,
			behavior: 'smooth'
		})
	}
	
	useEffect(() => {
		const observer = new IntersectionObserver(function (entries) {
			const targetId = entries[0].target.id
			const sectionActivator = document.querySelector(`[data-target="${targetId}"]`)
			if (!sectionActivator) return
			if (entries[0].isIntersecting == true) {
				sectionActivator.classList.add('border-gray-400')
				scrollToActivator(sectionActivator, offset)
			} else {
				sectionActivator.classList.remove('border-gray-400')
			}
		}, { threshold: [0.3] });
	
		const observed = targetRef.current.childNodes
		observed.forEach(element => observer.observe(element))
	}, [])
}

export default useScrollToIntersectedItem;