import { useState } from "react";
import useSendMail from "../hoc/useSendMail";
import featuredDevs from "../utility/featured-devs";
import FeaturedDevCard from "./FeaturedDevCard";
import InputField from "./InputField";

const bookingFields = [
	{
		id: 'booking-date',
		name: 'date',
		defaultValue: '',
		type: 'date',
		placeholder: '',
		icon: 'far fa-calendar-alt',
		required: true
	}, {
		id: 'booking-name',
		name: 'name',
		defaultValue: '',
		type: 'text',
		placeholder: 'Your name. Example: John Doe',
		icon: 'fa fa-user-alt',
		required: true
	}, {
		id: 'booking-email',
		name: 'email',
		defaultValue: '',
		type: 'email',
		placeholder: 'Your email. Example: johndoe@email.com',
		icon: 'fa fa-at',
		required: true
	}, {
		id: 'booking-purpose',
		name: 'purpose',
		defaultValue: '',
		type: 'text',
		placeholder: 'Your purpose. Example: Talk about a project',
		icon: 'far fa-lightbulb',
		required: true
	}
]

const Booking = () => {
  const { progress, sendMail } = useSendMail()
	const [booking, setBooking] = useState({
		date: '',
		name: '',
		email: '',
		purpose: ''
	})

	const handleInputChange = (key, value) => {
    setBooking(prevState => { return { ...prevState, [key]: value } })
  }

	return (
		<div id="booking" data-aos="fade-up" className="portfolio-section flex flex-col md:flex-row relative mt-8">
			<div className="w-full md:w-3/5 lg:w-4/5 p-4 md:p-8">
				<h1 className="text-4xl text-black mb-4">Booking</h1>
				<h2 className="text-xl text-gray-600">Business hours</h2>
				<div className="text-black">
					Mondays, Wednesdays & Fridays
					<br />
					8am - 10am
				</div>

				<div className="relative my-8">
					<form onSubmit={(e) => sendMail(e, '/api/bookings', booking)}>
						<div className="grid grid-flow-rows grid-cols-1 md:grid-cols-2 gap-8">
							{bookingFields.map(field => <InputField key={field.id} getValue={(value) => handleInputChange(field.name, value)} {...field} />)}
						</div>
						<button type="submit" className="hover:bg-blue-600 shadow rounded-tl-lg rounded-tr-lg rounded-bl-xl rounded-br-3xl my-8 px-8 py-2 text-white bg-blue-500 transition-all duration-700">
							{ progress === 'idle' ? 'Book Appointment' : progress }
						</button>
					</form>
				</div>
			</div>

			<FeaturedDevCard {...featuredDevs.idongesitAnsa} />
		</div>
	)
}

export default Booking;