import Link from "next/link";

const Copyright = () => {
	return (
		<>
			<div className="copyright-area">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-8">
							<div className="copy-right-text">
								<p>
									© 2021 Gible. All Rights Reserved by{" "}
									<a href="https://hibootstrap.com/">
										HiBootstrap
									</a>
								</p>

								<ul className="copy-right-list">
									<li>
										<Link href="/terms-condition">
											<a>Terms & Conditions</a>
										</Link>
									</li>

									<li>
										<Link href="/privacy-policy">
											<a>Privacy Policy</a>
										</Link>
									</li>
								</ul>
							</div>
						</div>

						<div className="col-lg-4">
							<div className="copy-right-social">
								<ul className="social-link">
									<li>
										<a href="https://www.facebook.com/">
											<i className="ri-facebook-fill"></i>
										</a>
									</li>
									<li>
										<a href="https://www.instagram.com/">
											<i className="ri-instagram-fill"></i>
										</a>
									</li>
									<li>
										<a href="https://twitter.com/">
											<i className="ri-twitter-fill"></i>
										</a>
									</li>
									<li>
										<a href="https://www.linkedin.com/">
											<i className="ri-linkedin-fill"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Copyright;
