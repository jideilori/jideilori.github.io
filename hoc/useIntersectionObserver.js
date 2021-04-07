export default function useIntersectionObserver(container) {
    const observer = new IntersectionObserver(function(entries) {
        const section_activator = document.querySelector(`a[href="#${entries[0].target.id}"]`)
        if (entries[0].isIntersecting == true) {
            section_activator.classList.add('border-gray-400')
        } else {
            section_activator.classList.remove('border-gray-400')
        }
    }, {threshold: [0.3]});
    container.forEach(element => observer.observe(element))
}
