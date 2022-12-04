const ProjectCard = ({ name, description, image, url }) => {
  return (
    <div data-aos="fade-in" data-aos-duration="700" className="shadow rounded-lg project relative overflow-hidden h-64 bg-400">
      <img src={image} className="h-full" width="100%" alt={name} />
      <div className="description transition-all duration-700 absolute -bottom-full left-0 px-8 flex flex-col justify-center items-center w-full h-full bg-black bg-opacity-75">
        <div className="relative mx-auto text-center">
          <h1 className="text-center text-xl text-white">
            <strong>
              {name}
            </strong>
          </h1>
          <p className="text-center text-white">
            { description }
          </p>
          {url && (
            <a href={url} className="inline-block mt-4 border-4 text-white rounded-full px-4 py-2">
              View Live
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;