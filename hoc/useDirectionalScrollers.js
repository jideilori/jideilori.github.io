export default function useDirectionalScrollers() {
    const scrollLeft = (target_id) => {
        const target = document.querySelector(`#${target_id}`)
        target.scrollBy({
            left: 200,
            behavior: 'smooth'
        })
    }
    const scrollRight = (target_id) => {
        const target = document.querySelector(`#${target_id}`)
        target.scrollBy({
            left: -200,
            behavior: 'smooth'
        })
    }
    return { scrollLeft, scrollRight }
}