import { useEffect } from "react"

const usePreviewer = () => {
	useEffect(() => {
		const previewActivators = document.querySelectorAll('[data-preview-target]')
		previewActivators.forEach(activator => {
			activator.addEventListener('mouseenter', () => {
				const previewTarget = activator.dataset.previewTarget
				if (!previewTarget) return
				const elemToPreview = document.querySelector(`[data-preview='${previewTarget}']`)
				if (!elemToPreview) return
				elemToPreview.classList.remove('-bottom-full')
				elemToPreview.classList.add('bottom-0')
			})
			
			activator.addEventListener('mouseleave', () => {
				const previewTarget = activator.dataset.previewTarget
				if (!previewTarget) return
				const elemToPreview = document.querySelector(`[data-preview='${previewTarget}']`)
				if (!elemToPreview) return
				elemToPreview.classList.remove('bottom-0')
				elemToPreview.classList.add('-bottom-full')
			})
		})
	}, [])
}

export default usePreviewer;