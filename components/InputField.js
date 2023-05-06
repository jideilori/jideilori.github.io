const InputField = ({ type = text, defaultValue, getValue, placeholder, required, icon }) => (
	<div className="relative flex justify-between bg-gray-200 border rounded-lg overflow-hidden">
		<span className="absolute top-0 left-0 flex justify-center items-center w-12 h-full bg-gray-100">
			<i className={icon}></i>
		</span>
		<input defaultValue={defaultValue} onChange={(e) => getValue(e.target.value)} type={type} placeholder={placeholder} className="outline-none w-full py-2 pl-16 pr-2 rounded-lg" required={required} />
	</div>
)

export default InputField;