import { useState } from "react";
import featuredDevs from "../utility/featured-devs";
import FeaturedDevCard from "./FeaturedDevCard";
import InputField from "./InputField";
import useSendMail from '../hoc/useSendMail';

const reviewFields = [
	{
		id: 'review-name',
		name: 'name',
		defaultValue: '',
		type: 'text',
		placeholder: 'Your name. Example: John Doe',
		icon: 'fa fa-user-alt',
		required: true
	}, {
		id: 'review-email',
		name: 'email',
		defaultValue: '',
		type: 'email',
		placeholder: 'Your email. Example: johndoe@email.com',
		icon: 'fa fa-at',
		required: true
	}, {
		id: 'review-location',
		name: 'location',
		defaultValue: '',
		type: 'text',
		placeholder: 'Your location. Example: New York',
		icon: 'fa fa-map-marker-alt',
		required: true
	}, {
		id: 'review-project',
		name: 'project',
		defaultValue: '',
		type: 'text',
		placeholder: 'Project name. Example: RESTful API',
		icon: 'fa fa-code',
		required: true
	}
]

const Reveiew = () => {
	const { progress, sendMail } = useSendMail()
	const [review, setReview] = useState({
		name: '',
		email: '',
		project: '',
		location: '',
		review: ''
	})

	const handleInputChange = (key, value) => {
    setReview(prevState => { return { ...prevState, [key]: value } })
  }

	return (
		<div id="feedback" data-aos="fade-up" className="portfolio-section flex flex-col md:flex-row relative mt-8">
			<div className="w-full md:w-3/5 lg:w-4/5 p-4 md:p-8">
				<h1 className="text-4xl text-black mb-4">Review</h1>
				<div className="text-black">
					Write a review on how your project with Uwakmfon Akpan went.
				</div>

				<div className="relative my-8">
					<form onSubmit={(e) => sendMail(e, '/api/reviews', review)}>
						<div className="grid grid-flow-rows grid-cols-1 md:grid-cols-2 gap-8">
							{reviewFields.map(field => <InputField key={field.id} getValue={(value) => handleInputChange(field.name, value)} {...field} />)}
						</div>

						<textarea name="review" onChange={(e) => handleInputChange('review', e.target.value)} className="relative block w-full h-56 my-8 border rounded-lg p-4 outline-none" placeholder="Write your review" required></textarea>
						
						<button type="submit" className="hover:bg-blue-600 shadow rounded-tl-lg inline-block rounded-tr-lg rounded-bl-xl rounded-br-3xl my-4 px-8 py-2 text-white bg-blue-500 transition-all duration-700">
							{ progress === 'idle' ? 'Send' : progress }
						</button>
					</form>
				</div>
			</div>

			<FeaturedDevCard {...featuredDevs.akpanNsikak} />
		</div>
	)
}

export default Reveiew;