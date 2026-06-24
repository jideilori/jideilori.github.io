const ProjectCard = ({ name, description, image, url, imageFit = 'cover' }) => {
  const imageClassName = imageFit === 'contain'
    ? 'h-full w-full object-contain p-4 bg-white'
    : 'h-full w-full object-cover transform transition duration-700 group-hover:scale-105';

  if (!image) {
    return (
      <div
        data-aos="fade-in"
        data-aos-duration="700"
        className="surface-card rounded-2xl h-72 p-6 md:p-7 flex flex-col border border-slate-200"
      >
        <span className="inline-flex w-fit items-center rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-bold uppercase tracking-wide">
          Data Project
        </span>
        <h3 className="mt-5 text-2xl text-slate-900 font-bold leading-8">
          {name}
        </h3>
        <p className="mt-4 text-sm text-slate-600 leading-7">
          {description}
        </p>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center mt-auto pt-6 text-blue-700 font-bold"
          >
            View project
          </a>
        )}
      </div>
    )
  }

  return (
    <div
      data-aos="fade-in"
      data-aos-duration="700"
      className="project-card group rounded-2xl relative overflow-hidden h-72 bg-gray-900 border border-slate-200"
    >
      <img src={image} className={imageClassName} alt={name} />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.04) 0%, rgba(15, 23, 42, 0.74) 62%, rgba(15, 23, 42, 0.96) 100%)' }}
      ></div>
      <div className="absolute inset-0 px-6 py-6 flex flex-col justify-end">
        <div className="transform transition duration-500 group-hover:-translate-y-1 max-w-md">
          <h3 className="text-xl text-white font-bold leading-7">
            {name}
          </h3>
          <p className="mt-3 text-sm text-blue-50 line-clamp-4 leading-6">
            {description}
          </p>
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center mt-5 rounded-full bg-white text-blue-700 px-4 py-2 font-bold"
            >
              View project
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;
