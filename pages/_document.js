import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html lang="en-US">
				<Head>
					<meta name="theme-color" content="" />
					<meta name="msapplication-TileColor" content="#ffffff" />
					{/* <meta name="msapplication-TileImage" content="/images/favicon/ms-icon-144x144.png" /> */}

					<meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
					<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
					<meta name="description" content="Oluwaseun Ilori Portfolio Website" />
					<meta property="og:description" name="description" content="Oluwaseun Ilori Portfolio Website" />
					<meta property="og:author" name="author" content="Oluwaseun Ilori" />
					<meta property="og:keywords" name="keywords" content="Web development,HTML,HTML5,CSS,CSS3,Javascript,JQuery,PHP,UX/UI Design,Blogging,Graphics Design,Frontend,Backend,NodeJs,ReactJs,VueJs,MongoDB,Python,MySQL,PostgresSQL,Docker,Kubernetes,AWS,Git,Laravel" />
					<meta property="og:image" name="image" content="/images/thumbnails/thumbnail.png" />

					<link rel="shortcut icon" href="/images/favicon/favicon.png" />
					{/* <script data-ad-client="ca-pub-3849094578303904" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> */}

					{/* Global site tag (gtag.js) - Google Analytics */}
					{/* <script async src="https://www.googletagmanager.com/gtag/js?id=UA-58774198-2"></script> */}
					{/* <script>
						window.dataLayer = window.dataLayer || [];
						function gtag() {
							dataLayer.push(arguments);
                    }
						gtag('js', new Date());
						gtag('config', 'UA-58774198-2');
					</script> */}
				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}