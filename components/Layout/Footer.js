import Link from "next/link";

const Footer = () => {
	return (
		<>
			<footer className="footer-area pt-100 pb-70">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-sm-8">
							<div className="footer-widget">
								<div className="footer-logo">
									<Link href="/">
										<a>
											<img
												src="../images/footer-logo.png"
												alt="Footer Logo"
											/>
										</a>
									</Link>
								</div>
								<p>Subscribe to our newsletter</p>
								<div className="newsletter-area">
									<form
										className="newsletter-form"
										data-toggle="validator"
										method="POST"
									>
										<input
											type="email"
											className="form-control"
											placeholder="Enter Your Email"
											name="EMAIL"
											required
											autoComplete="off"
										/>
										<button
											className="subscribe-btn"
											type="submit"
										>
											Subscribe Now
										</button>
										<div
											id="validator-newsletter"
											className="form-result"
										></div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="footer-shape">
					<div className="footer-shape1">
						<img src="../images/shape/shape-bg.png" alt="Images" />
					</div>

					<div className="footer-shape2">
						<img src="../images/shape/shape1.png" alt="Images" />
					</div>

					<div className="footer-shape3">
						<img src="../images/shape/shape2.png" alt="Images" />
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
