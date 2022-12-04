import featuredDevs from "../utility/featured-devs";
import portfolioData from "../utility/portfolio-data";
import FeaturedDevCard from "./FeaturedDevCard";


export default function Clients() {
	return (
		<div id="clients" data-aos="fade-up" className="portfolio-section flex flex-col md:flex-row relative mt-8">
			<div className="w-full md:w-3/5 lg:w-4/5 p-4 md:p-8">
				<h1 className="text-4xl text-black mb-4">Clients</h1>
				
				<div className="grid grid-flow-rows grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
					{portfolioData.clients.map((client, index) => (
						<div key={client.name} data-aos="fade-up"
							data-aos-duration={`${index + 1}00`}
							className={`
								${client.bgColor ? client.bgColor : 'bg-gray-200'}
								${client.borderColor ? client.borderColor : 'border-gray-200'}
								border-2 pt-2 rounded-lg overflow-hidden`
							}
						>
							<img src={client.image} className="mx-auto mb-2 h-16" alt={client.name} />
							<div className={`px-4 py-2 text-lg text-center bg-white ${client.color ? client.color : 'text-gray-200'}`}>
								{client.name}
							</div>
						</div>
					))}
				</div>
			</div>
			
			<FeaturedDevCard {...featuredDevs.jeaneCopywriter} />
		</div>
	)
}