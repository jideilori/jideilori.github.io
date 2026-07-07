const Avatar = () => {
	return (
		<div data-aos="slide-right" className="relative group flex-shrink-0 mx-auto mb-8 lg:mb-0 lg:m-4">
			{/* Soft halo glow behind the image */}
			<div 
				className="absolute rounded-full opacity-20 group-hover:opacity-30 transition duration-500"
				style={{
					top: '-12px',
					left: '-12px',
					right: '-12px',
					bottom: '-12px',
					background: 'linear-gradient(135deg, #2563eb, #0d9488)',
					filter: 'blur(24px)',
				}}
			></div>
			
			{/* Main glass frame card */}
			<div 
				className="relative border shadow-2xl overflow-hidden w-56 sm:w-64 md:w-72"
				style={{
					backgroundColor: 'rgba(255, 255, 255, 0.05)',
					borderColor: 'rgba(255, 255, 255, 0.1)',
					borderRadius: '2.2rem',
					backdropFilter: 'blur(16px)',
					WebkitBackdropFilter: 'blur(16px)',
					padding: '10px',
				}}
			>
				<img
					src="/images/avatars/avatar.jpg"
					className="block w-full h-auto"
					style={{ 
						display: 'block',
						width: '100%',
						height: 'auto',
						borderRadius: '1.6rem',
					}}
					alt="Oluwaseun Ilori Photo"
				/>
			</div>
		</div>
	)
}

export default Avatar;
