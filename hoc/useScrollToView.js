//Scrolls to selected element when corresponding tag is clicked
export default function useScrollToView() {
    const scrollToView = (selectors) => {
        selectors.forEach(selector => {
            selector.addEventListener('click', function(e) {
                const target_section = this.getAttribute('href');
                const target_element = document.querySelector(target_section)
                const scroll_position = target_element.offsetTop;

                document.documentElement.scrollTo({
                    top: scroll_position - 60,
                    behavior: 'smooth'
                });
                e.preventDefault();
            })
        })
    }
    return { scrollToView }
}