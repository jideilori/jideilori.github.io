const Footer = ({ crossLink }) => {
	return (
		<footer className="text-center py-10 text-sm muted-copy space-y-3">
			{crossLink && (
				<p>
					{crossLink.prefix}{' '}
					<a href={crossLink.href} className="text-blue-700 font-bold hover:underline">
						{crossLink.text} →
					</a>
				</p>
			)}
			<p>
				Built and maintained by <span className="text-blue-700 font-bold">Oluwaseun Ilori</span> {new Date().getFullYear()}
			</p>
		</footer>
	)
}

export default Footer;
