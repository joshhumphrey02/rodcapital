import prisma from '@/lib/prisma';
import Image from 'next/image';
import './style.css';
import { logout } from '@/lib/auth/actions';
import Logout from '@/components/logout';

const Home = async () => {
	const userInfo = await prisma.user.findMany();
	return (
		<div className="w-full">
			<div className="bg-[rgba(16,20,73,0.884)]">
				<div className="container mx-auto">
					<header className="flex p-8">
						<div className="flex-1">
							<Image height={40} width={40} src="/logo.jpg" alt="logo" />
						</div>
						<nav className="flex-3">
							<ul className="flex justify-between space-x-8 text-white">
								<li>
									<a href="#" className="hover:text-orange-500">
										Home
									</a>
								</li>
								<li>
									<a href="#about" className="hover:text-orange-500">
										About
									</a>
								</li>
								<li>
									<a href="#investment" className="hover:text-orange-500">
										Investment Plans
									</a>
								</li>
								<li>
									<a href="#invest" className="hover:text-orange-500">
										Invest
									</a>
								</li>
								<li>
									<a href="#contact" className="hover:text-orange-500">
										Contact Us
									</a>
								</li>
								<li>
									<Logout />
								</li>
							</ul>
						</nav>
					</header>

					<div className="flex flex-col md:flex-row items-center p-8">
						<div className="md:w-1/2 text-white">
							<p>
								Investing now is your key to unlocking future success. The
								market is full of opportunities, and acting quickly allows you
								to take advantage of favorable conditions and potential growth.
								Delaying could mean missing out on significant returns. By
								investing today, you position yourself to benefit from
								compounding gains and emerging trends. Don’t wait—seize the
								moment and start building your financial future now for a more
								secure tomorrow...
							</p>
						</div>
						<div className="md:w-1/2">
							<Image height={40} width={40} src="/bannerimg.png" alt="banner" />
						</div>
					</div>

					<div
						id="about"
						className="flex flex-col md:flex-row items-center p-8 bg-gray-900 text-white">
						<div className="md:w-1/2">
							<Image height={40} width={40} src="/btc.png" alt="btc" />
						</div>
						<div className="md:w-3/4">
							<p className="text-3xl font-bold mb-8 text-orange-500">
								About Us
							</p>
							<p className="mb-8">
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
							<div className="flex space-x-8">
								<div className="flex space-x-4">
									<Image
										height={40}
										width={40}
										src="/envelop.png"
										alt="envelop"
									/>
									<p>
										At Rod Investment Company, our vision is to drive
										transformative growth by identifying and nurturing
										high-potential opportunities. We aim to deliver exceptional
										returns while fostering innovation and sustainability,
										empowering our clients to achieve lasting financial success
										and impact.
									</p>
								</div>
								<div className="flex space-x-4">
									<Image
										height={40}
										width={40}
										src="/envelop.png"
										alt="envelop"
									/>
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

					<div
						id="investment"
						className="p-8 text-center bg-gray-800 text-white">
						<p className="text-3xl font-bold mb-4 text-orange-500">
							Our Investment Plans
						</p>
						<p>
							Explore our top three investment options designed to meet diverse
							financial goals. Whether you're seeking steady income, high growth
							potential, or a balanced approach, our curated choices offer
							tailored strategies to help you achieve your objectives and secure
							your future.
						</p>
						<div className="flex flex-col md:flex-row justify-around mt-12">
							<div className="text-center">
								<Image
									height={40}
									width={40}
									src="/money.png"
									alt="money"
									className="w-24 mb-4 mx-auto"
								/>
								<p className="text-xl font-bold mb-4">
									Type <span className="text-orange-500">A</span> Mining
								</p>
								<p>
									This investment plan offers a flexible range from $50 to
									$1,000 for a duration of 1 week, featuring a competitive 100%
									interest rate every 12 hours. This plan ensures rapid growth
									on your investment, allowing you to maximize returns with
									frequent compounding benefits.
								</p>
							</div>
							<div className="text-center">
								<Image
									height={40}
									width={40}
									src="/money.png"
									alt="money"
									className="w-24 mb-4 mx-auto"
								/>
								<p className="text-xl font-bold mb-4">
									Type <span className="text-orange-500">B</span> Mining
								</p>
								<p>
									This investment plan, ranging from $1,000 to $10,000 for a
									duration of 1 month, provides an impressive 150% interest rate
									daily. This plan delivers substantial returns with frequent
									compounding, making it ideal for those seeking significant
									growth and robust financial advancement.
								</p>
							</div>
							<div className="text-center">
								<Image
									height={40}
									width={40}
									src="/money.png"
									alt="money"
									className="w-24 mb-4 mx-auto"
								/>
								<p className="text-xl font-bold mb-4">
									Type <span className="text-orange-500">C</span> Mining
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

					<div id="invest" className="p-8 text-center bg-gray-700 text-white">
						<div className="bg-gray-900 p-4 rounded">
							<p className="mb-4">
								You have made a smart choice now to continue your application.
								Make your deposit to the following Trc20 USDT Address:{' '}
								<span className="text-orange-500">
									TSFj6dZbHLmEoBrW9mNL4gYBU6FfX7NZpr
								</span>
							</p>
							<p className="italic text-sm">
								Make sure to deposit to the TRC20 USDT address as Rod Capital
								will not be liable for Incorrect Transfer
							</p>
						</div>
						<p className="text-3xl font-bold mt-8 text-orange-500">
							Invest Now!
						</p>
						<p>Fund Your Account</p>
						<div className="flex flex-col md:flex-row justify-between mt-8">
							<div className="text-left">
								<p className="mb-4 text-orange-500">Mining Plan:</p>
								<div className="flex flex-col space-y-4">
									<label>
										<input
											type="checkbox"
											name="Type A"
											id="typeA"
											className="mr-2"
										/>
										Type A
									</label>
									<label>
										<input
											type="checkbox"
											name="Type B"
											id="typeB"
											className="mr-2"
										/>
										Type B
									</label>
									<label>
										<input
											type="checkbox"
											name="Type C"
											id="typeC"
											className="mr-2"
										/>
										Type C
									</label>
								</div>
							</div>
							<div className="text-left flex flex-col space-y-4">
								<div className="flex items-center">
									<Image
										height={40}
										width={40}
										src="/percent.svg"
										alt="percent"
										className="w-10"
									/>
									<div className="ml-4">
										<p className="mb-2">Deposit</p>
										<span className="text-2xl">0</span>
									</div>
								</div>
								<div className="flex items-center">
									<Image
										height={40}
										width={40}
										src="/percent.svg"
										alt="percent"
										className="w-10"
									/>
									<div className="ml-4">
										<p className="mb-2">Return Action</p>
										<span className="text-2xl">0</span>
									</div>
								</div>
								<div className="flex items-center">
									<Image
										height={40}
										width={40}
										src="/percent.svg"
										alt="percent"
										className="w-10"
									/>
									<div className="ml-4">
										<p className="mb-2">Net Profit</p>
										<span className="text-2xl">0</span>
									</div>
								</div>
								<div className="flex items-center">
									<Image
										height={40}
										width={40}
										src="/percent.svg"
										alt="percent"
										className="w-10"
									/>
									<div className="ml-4">
										<p className="mb-2">Balance</p>
										<span className="text-2xl">0</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div id="contact" className="p-8 bg-gray-800 text-white">
						<p className="text-3xl font-bold mb-4 text-orange-500">
							Contact Us
						</p>
						<p>
							We would love to hear from you! For any inquiries or questions,
							please fill out the form below or reach out to us directly.
						</p>
						<form className="flex flex-col mt-8 space-y-4">
							<input
								type="text"
								placeholder="Full Name"
								className="p-2 rounded bg-gray-700"
							/>
							<input
								type="email"
								placeholder="Email"
								className="p-2 rounded bg-gray-700"
							/>
							<textarea
								placeholder="Message"
								className="p-2 rounded bg-gray-700 h-32"></textarea>
							<button
								type="submit"
								className="p-2 bg-orange-500 rounded text-white">
								Send
							</button>
						</form>
					</div>

					<footer className="p-8 bg-gray-900 text-white text-center">
						<p>&copy; 2024 Rod Capital Management. All rights reserved.</p>
					</footer>
				</div>
			</div>
		</div>
	);
};

export default Home;
