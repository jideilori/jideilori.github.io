import Socials from "./Socials";

const FeaturedDevCard = ({ stack, name, image, tagline, socialLinks }) => {
  return (
    <div className="w-full md:w-2/5 lg:w-1/5 p-4 md:pt-8 text-center">
      {stack && <h2 className="inline-block bg-black py-2 px-4 text-white">
        { stack }
      </h2>}
      <div className="relative py-4">
        {image && <img data-aos="zoom-in-left" src={image} alt={name} className="border-b-4 border-gray-200 p-2 rounded-full w-24 h-24 mx-auto" width="100%" />}

        {name && <div className="text-xl mt-2">
          { name }
        </div>}
        {tagline && <div className="text-center mt-3">
          { tagline }
        </div>}
        {socialLinks && <Socials socialMedia={socialLinks} />}
      </div>
    </div>
  )
}

export default FeaturedDevCard;