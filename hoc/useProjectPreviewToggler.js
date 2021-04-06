export default function useProjectPreviewToggler() {
    const toggleProjectOverview = (projects, projects_description) => {
        projects.forEach(project => {
            project.addEventListener('mouseenter', () => {      
                projects_description.forEach(description => {
                description.classList.add('-bottom-full')
                })
                project.querySelector('.description').classList.remove('-bottom-full')
                project.querySelector('.description').classList.add('bottom-0')
            })
            project.addEventListener('mouseleave', () => {      
                project.querySelector('.description').classList.add('-bottom-full')
            })
        })
    }
    return { toggleProjectOverview }
}