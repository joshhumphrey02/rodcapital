import './home.css';

const Home = async () => {
	return (
		<div className="w-full">
			<div style={{ background: 'rgba(16, 20, 73, 0.884)' }}>
				<div className="container">
					<header className="text-white">
						<div className="" style={{ flex: 1, paddingLeft: '30px' }}>
							<img src="logo.jpg" alt="logo" />
						</div>
						<div className="navBar" style={{ flex: '3' }}>
							<ul>
								<li>
									<a className="text-white" href="#">
										Home
									</a>
								</li>

								<li>
									<a className="text-white" href="#about">
										About
									</a>
								</li>

								<li>
									<a className="text-white" href="#investment">
										Investment Plans
									</a>
								</li>
								<li>
									<a className="text-white" href="#invest">
										Invest
									</a>
								</li>

								<li>
									<a className="text-white" href="#contact">
										Contact Us
									</a>
								</li>
							</ul>
						</div>
					</header>

					<div className="banner">
						<div className="banner-left">
							Investing now is your key to unlocking future success. The market
							is full of opportunities, and acting quickly allows you to take
							advantage of favorable conditions and potential growth. Delaying
							could mean missing out on significant returns. By investing today,
							you position yourself to benefit from compounding gains and
							emerging trends. Don’t wait—seize the moment and start building
							your financial future now for a more secure tomorrow...
						</div>
						<div className="banner-img">
							<img src="bannerImg.png" />
						</div>
					</div>

					<div className="about" id="about">
						<div className="about-left">
							<img src="btc.png" />
						</div>
						<div className="about-right" style={{ flex: 3 }}>
							<p
								style={{
									fontSize: '35px',
									fontWeight: 'bold',
									marginBottom: '40px',
									color: 'orange',
								}}>
								About Us
							</p>
							<p style={{ marginBottom: '40px' }}>
								Rod Capital Management (RCM) is a long/short equity fund that
								targets deep value opportunities for its long-term portfolio and
								complements this by taking short-term positions in special
								situations. The fund takes concentrated high-conviction
								positions with a focus on fundamental and relative value. RCM
								hedges these positions by shorting companies identified as
								over-valued along with related indexes in order to manage risk
								and exposure. The fund is managed by Chief Investment Officer
								Perry Rod who brings over 20 years of experience in professional
								investing, research, and trading of financial markets. RCM's
								profits go towards the Paradise Project, our non-profit
								foundation that celebrates science, education, art, and
								philosophy.
							</p>
							<div style={{ display: 'flex' }} className="about-right-msg-div">
								<div className="about-right-message">
									<div style={{ flex: 1 }}>
										<img src="envelop.png" />
									</div>
									<div style={{ flex: 4 }}>
										<p>
											At Rod Investment Company, our vision is to drive
											transformative growth by identifying and nurturing
											high-potential opportunities. We aim to deliver
											exceptional returns while fostering innovation and
											sustainability, empowering our clients to achieve lasting
											financial success and impact.
										</p>
									</div>
								</div>
								<div className="about-right-message">
									<div style={{ flex: 1 }}>
										<img src="envelop.png" />
									</div>
									<div style={{ flex: 4 }}>
										<p>
											Rod Investment Company’s mission is to provide strategic,
											high-value investment solutions tailored to our clients’
											goals. We are committed to delivering superior performance
											through rigorous analysis, innovative strategies, and a
											dedication to integrity, ensuring long-term growth and
											financial stability.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="investment" id="investment">
						<p
							style={{
								fontSize: '35px',
								fontWeight: 'bold',
								marginBottom: '20px',
								color: 'orange',
							}}>
							Our Investment plans.
						</p>
						<p>
							Explore our top three investment options designed to meet diverse
							financial goals. Whether you're seeking steady income, high growth
							potential, or a balanced approach, our curated choices offer
							tailored strategies to help you achieve your objectives and secure
							your future.
						</p>
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-around',
								paddingTop: '50px',
							}}
							className="investment-card-div">
							<div className="investment-card">
								<img
									src="money.png"
									style={{ width: '100px', marginBottom: '10px' }}
								/>
								<p
									style={{
										fontSize: '24px',
										fontWeight: 'bold',
										marginBottom: '20px',
									}}>
									Type <span style={{ color: 'orange' }}>A</span> Mining
								</p>
								<p>
									This investment plan offers a flexible range from $50 to
									$1,000 for a duration of 1 week, featuring a competitive 100%
									interest rate every 12 hours. This plan ensures rapid growth
									on your investment, allowing you to maximize returns with
									frequent compounding benefits.
								</p>
							</div>
							<div className="investment-card">
								<img
									src="money.png"
									style={{ width: '100px', marginBottom: '10px' }}
								/>
								<p
									style={{
										fontSize: '24px',
										fontWeight: 'bold',
										marginBottom: '20px',
									}}>
									Type <span style={{ color: 'orange' }}>B</span> Mining
								</p>
								<p>
									This investment plan, ranging from $1,000 to $10,000 for a
									duration of 1 month, provides an impressive 150% interest rate
									daily. This plan delivers substantial returns with frequent
									compounding, making it ideal for those seeking significant
									growth and robust financial advancement.
								</p>
							</div>
							<div className="investment-card">
								<img
									src="money.png"
									style={{ width: '100px', marginBottom: '10px' }}
								/>
								<p
									style={{
										fontSize: '24px',
										fontWeight: 'bold',
										marginBottom: '20px',
									}}>
									Type <span style={{ color: 'orange' }}>C</span> Mining
								</p>
								<p>
									For investments ranging from $10,000 to $100,000 for a
									duration of 3 months, our plan offers an exceptional 200%
									interest rate weekly. This high-growth option maximizes your
									returns with aggressive compounding, designed to significantly
									boost your capital and achieve substantial financial gains.
								</p>
							</div>
						</div>
					</div>

					<div className="calculator" id="invest">
						<div className="popup">
							<div className="flex3">
								You have made a smart choice now to continue your application.
								Make your deposit to the following Trc20 USDT Address :
								<span style={{ color: 'orange' }}>
									TSFj6dZbHLmEoBrW9mNL4gYBU6FfX7NZpr
								</span>
							</div>
							<div
								className="flex1'
								style={{fontStyle: italic, fontSize: small, line-height: 20px">
								make sure to deposit to the trc20 usdt address as Rod Capital
								will not be liable to Incorrect Transfer
							</div>
						</div>
						<p className="recentP">Invest Now!</p>
						<p>Fund Your Account</p>
						<div className="investSection">
							<div className="calculator-left">
								<p style={{ marginBottom: '20px', color: 'orange' }}>
									Mining Plan:
								</p>
								<div
									style={{
										height: '200px',
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'space-around',
									}}
									className="types">
									<div>
										<input
											type="checkbox"
											name="Type A"
											id="typeA"
											className="toggleBtn"
										/>
										Type A
									</div>
									<div>
										<input
											type="checkbox"
											name="Type B"
											id="typeB"
											className="toggleBtn"
										/>
										Type B
									</div>
									<div>
										<input
											type="checkbox"
											name="Type C"
											id="typeC"
											className="toggleBtn"
										/>
										Type C
									</div>
								</div>
							</div>
							<div className="calculator-right">
								<div className="flex1 right-item">
									<div style={{ flex: 1 }}>
										<img src="percent.svg" style={{ width: '40px' }} />
									</div>
									<div style={{ flex: 3 }}>
										<p style={{ marginBottom: '10px' }}>Deposit</p>
										<span style={{ fontSize: '25px' }}>0</span>
									</div>
								</div>
								<div className="flex1 right-item">
									<div style={{ flex: 1 }}>
										<img src="percent.svg" style={{ width: '40px' }} />
									</div>
									<div style={{ flex: 3 }}>
										<p style={{ marginBottom: '10px' }}>Return Action</p>
										<span style={{ fontSize: '25px' }}>0</span>
									</div>
								</div>
								<div className="flex1 right-item">
									<div style={{ flex: 1 }}>
										<img src="percent.svg" style={{ width: '40px' }} />
									</div>
									<div style={{ flex: 3 }}>
										<p style={{ marginBottom: '10px' }}>Net Profit</p>
										<span style={{ fontSize: '25px' }}>0</span>
									</div>
								</div>
								<div className="flex1 right-item">
									<div style={{ flex: 1 }}>
										<img src="percent.svg" style={{ width: '40px' }} />
									</div>
									<div style={{ flex: 3 }}>
										<p style={{ marginBottom: '10px' }}>Total Return</p>
										<span style={{ fontSize: '25px' }}>0</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div
						className="recents"
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							paddingTop: '100px',
							width: '100vw',
							justifyContent: 'center',
						}}>
						<div>
							<p className="recentP">Recent Transactions</p>
						</div>
						<div>
							<p style={{ marginBottom: '40px' }}>
								Your Money Working Harder For You...
							</p>
						</div>

						<div className="recents-table">
							<table
								width="100%"
								style={{ marginLeft: 'auto', marginRight: 'auto' }}>
								<thead>
									<td className="thead-data">Name</td>
									<td className="thead-data">Amount</td>
									<td className="thead-data">Gateway</td>
									<td className="thead-data">Date</td>
									<td className="thead-data">Status</td>
								</thead>
								<tbody>
									<tr style={{ borderColor: 'orange' }}>
										<td>Omar</td>
										<td>$75,000</td>
										<td>CashApp</td>
										<td>19th Aug 2024</td>
										<td style={{ background: 'green' }}>Approved</td>
									</tr>
									<tr>
										<td>Hassan</td>
										<td>$14,000</td>
										<td>CashApp</td>
										<td>15th Aug 2024</td>
										<td style={{ background: 'green' }}>Approved</td>
									</tr>
									<tr>
										<td>Hopkins</td>
										<td>$6,200</td>
										<td>CashApp</td>
										<td>11th Aug 2024</td>
										<td style={{ background: 'rgb(192, 165, 47)' }}>Pending</td>
									</tr>
									<tr>
										<td>Lee</td>
										<td>$3,750</td>
										<td>CashApp</td>
										<td>8th Aug 2024</td>
										<td style={{ background: 'green' }}>Approved</td>
									</tr>
									<tr>
										<td>Faruk</td>
										<td>$30,150</td>
										<td>CashApp</td>
										<td>3rd Aug 2024</td>
										<td style={{ background: 'green' }}>Approved</td>
									</tr>
									<tr>
										<td>Ray</td>
										<td>$6,700</td>
										<td>CashApp</td>
										<td>29th Jul 2024</td>
										<td style={{ background: 'green' }}>Approved</td>
									</tr>
									<tr>
										<td>Fibika</td>
										<td>$2,000</td>
										<td>CashApp</td>
										<td>28th Jul 2024</td>
										<td style={{ background: 'green' }}>Approved</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					<div className="referral">
						<div>
							<p
								style={{
									fontSize: '40px',
									color: 'orange',
									marginBottom: '20px',
								}}>
								Your Referrals : 0
							</p>
						</div>
						<div style={{ fontSize: '20px', fontStyle: 'italic' }}>
							Earn $100 per referral when you invite your friends to invest on
							our platform
						</div>
					</div>

					<div className="investors">
						<div>
							<p
								style={{
									color: 'orange',
									fontSize: '35px',
									fontWeight: 'bold',
									marginBottom: '80px',
								}}>
								Top Investors
							</p>
						</div>
						<div>
							<p style={{ fontSize: '30px', marginBottom: '80px' }}>
								Meet Our Top <span style={{ color: 'orange' }}>Investors</span>
							</p>
						</div>
						<div className="flex card">
							<div className="flex border" style={{ gap: '10px' }}>
								<div style={{ flex: 1 }}>
									<img
										src="arabman2.jpg
                        "
										width="70px"
										style={{ borderRadius: '50%' }}
									/>
								</div>
								<div style={{ flex: 2 }}>
									<p style={{ marginBottom: '10px' }}>Ahmed Al-mansoori</p>
									<p>
										Rod Capital has exceeded my expectations. Their expertise
										and strategic insights have delivered impressive returns.
										Highly recommended!
									</p>
								</div>
							</div>
							<div className="flex border" style={{ gap: '10px' }}>
								<div style={{ flex: 1 }}>
									<img
										src="sarah.png
                        "
										width="70px"
									/>
								</div>
								<div style={{ flex: 2 }}>
									<p style={{ marginBottom: '10px' }}>Sarah Hopkins</p>
									<p>
										Hi, I'm Sarah. I put in my money and I have been reaping the
										benefits ever since
									</p>
								</div>
							</div>
							<div className="flex border" style={{ gap: '10px' }}>
								<div style={{ flex: 1 }}>
									<img
										src="arabman1.jpg
                        "
										width="70px"
										style={{ borderRadius: '50%' }}
									/>
								</div>
								<div style={{ flex: 2 }}>
									<p style={{ marginBottom: '10px' }}>Mohammed Al-Thani</p>
									<p>
										Investing with Rod Capital has been excellent. Their
										strategic approach has delivered strong returns, and I
										highly recommend their services.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="payment">
						<div
							style={{
								fontSize: '30px',
								fontWeight: 'bold',
								marginBottom: '100px',
							}}>
							Payment Method<span style={{ color: 'orange' }}>s</span>
						</div>
						<div style={{ marginBottom: '100px' }}>
							<img src="applepay.png" className="pay-img" />
						</div>
					</div>

					<footer>
						<div className="flex sponsors" style={{ marginBottom: '100px' }}>
							<div>
								<img src="sponsor.png" width="200px" />
							</div>
							<div>
								<img src="sponsor1.png" width="200px" />
							</div>
							<div>
								<img src="sponsor2.png" width="200px" />
							</div>
						</div>
						<div
							style={{
								width: '700px',
								margin: '0 auto',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'right',
							}}>
							<div
								style={{
									fontSize: '30px',
									fontWeight: 'bold',
									marginBottom: '50px',
								}}
								id="contact">
								CONTACT US
							</div>
							<div
								style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
								<div>
									<img
										src="location.png"
										width="30px"
										style={{ borderRadius: '50%' }}
									/>
								</div>
								<div>
									<p>Address</p>
									<p className="addressP">
										Rod Capital Level 10, City Center Doha Office 1002, Al-Hitmi
										Building West Bay, Doha, Qatar P.O. Box 12345
									</p>
								</div>
							</div>
							<div
								style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
								<div>
									<img
										src="phone.png"
										width="30px"
										style={{ borderRadius: '50%' }}
									/>
								</div>
								<div>
									<p>Phone</p>
									<p className="phone">
										<span style={{ marginRight: '20px' }}>(123) 456-7890</span>
										<span style={{ marginRight: '20px' }}>(555) 123-4567</span>
										<span>(987) 654-3210</span>
									</p>
								</div>
							</div>
							<div style={{ display: 'flex', gap: '20px' }}>
								<div>
									<img
										src="email.jpg"
										width="30px"
										style={{ borderRadius: '50%' }}
									/>
								</div>
								<div>
									<p>Email</p>
									<p className="email">therodinvestmentcompany@gmail.com</p>
								</div>
							</div>
						</div>
						<div style={{ textAlign: 'center', margin: '50px 0' }}>
							All Rights Reserved
						</div>
					</footer>
				</div>
			</div>
		</div>
	);
};

export default Home;
