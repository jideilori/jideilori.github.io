export default function Socials(props) {
    return (
        <div data-aos="fade-left" className="flex flex-wrap justify-center px-4 py-4 md:px-0">
            {props.socialMedia.facebook && (<a className="flex justify-center items-center shadow w-8 h-8 text-white text-xl bg-blue-500 rounded-full" href={`https://facebook.com/${props.socialMedia.facebook}`}>
                <i className="fab fa-facebook-f"></i>
            </a>)}
            {props.socialMedia.email && (<a className="flex justify-center items-center shadow w-8 h-8 text-white text-xl ml-2 bg-red-400 rounded-full" href={`mailto:${props.socialMedia.email}`}>
                <i className="fa fa-at"></i>
            </a>)}
            {props.socialMedia.github && (<a className="flex justify-center items-center shadow w-8 h-8 text-black text-xl ml-2 bg-white rounded-full" href={`https://www.github.com/${props.socialMedia.github}`}>
                <i className="fab fa-github"></i>
            </a>)}
            {props.socialMedia.twitter && (<a className="flex justify-center items-center shadow w-8 h-8 text-white text-xl ml-2 bg-blue-400 rounded-full" href={`https://twitter.com/${props.socialMedia.twitter}`}>
                <i className="fab fa-twitter"></i>
            </a>)}
            {props.socialMedia.linkedin && (<a className="flex justify-center items-center shadow w-8 h-8 text-white text-xl ml-2 bg-blue-700 rounded-full" href={`https://www.linkedin.com/in/${props.socialMedia.linkedin}`}>
                <i className="fab fa-linkedin"></i>
            </a>)}
            {props.socialMedia.instagram && (<a className="flex justify-center items-center shadow w-8 h-8 text-white text-xl ml-2 bg-pink-500 rounded-full" href={`https://www.instagram.com/${props.socialMedia.instagram}`}>
                <i className="fab fa-instagram"></i>
            </a>)}
        </div>
    )
}