import { validateRequest } from '@/lib/auth/validate-request';
import './home.css';
import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import prisma from '@/lib/prisma';

interface Props {
	title: string;
}

function AlertDialogDemo({ title }: Props) {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<div className="flex items-center justify-start gap-2">
					<span className="text-sm ">{title}</span>
				</div>
			</AlertDialogTrigger>
			<AlertDialogContent className="bg-black">
				<AlertDialogHeader>
					<div className="grid space-y-2">
						<p className="text-sm">
							You have made a smart choice now to continue your application.
							Make your deposit to the following Trc20 USDT Address :
						</p>
						<p className="text-base text-orange-500">
							TSFj6dZbHLmEoBrW9mNL4gYBU6FfX7NZpr
						</p>
					</div>
					<div className="my-2 text-sm italic">
						make sure to deposit to the trc20 usdt address as Rod Capital will
						not be liable to Incorrect Transfer
					</div>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel className="hover:bg-orange-500 hover:text-white bg-gray-500 text-black border-0 rounded">
						Close
					</AlertDialogCancel>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}

const Home = async () => {
	const { user } = await validateRequest();
	const User = await prisma.user.findUnique({
		where: {
			id: user?.id,
		},
	});
	return (
		<div className="w-full">
			<div className="px-2" style={{ background: 'rgba(16, 20, 73, 0.884)' }}>
				<div className="container">
					<header>
						<div className="" style={{ flex: 1, paddingLeft: '30px' }}>
							<img src="logo.jpg" alt="logo" />
						</div>
						<div className="nav-bar" style={{ flex: 3 }}>
							<ul>
								<li>
									<a className="text-white" href="#">
										البيت
									</a>
								</li>

								<li>
									<a className="text-white" href="#about">
										معلومات عنا
									</a>
								</li>

								<li>
									<a className="text-white" href="#investment">
										خطط الاستثمار
									</a>
								</li>
								<li>
									<a className="text-white" href="#invest">
										استثمر
									</a>
								</li>

								<li>
									<a className="text-white" href="#contact">
										اتصل بنا
									</a>
								</li>
							</ul>
						</div>
					</header>

					<div className="banner">
						<div className="banner-left">
							الاستثمار الآن هو مفتاحك لتحقيق النجاح في المستقبل. السوق مليء
							بالفرص، والتصرف بسرعة يتيح لك الاستفادة من الظروف المواتية والنمو
							المحتمل. التأخير قد يعني فقدان عوائد كبيرة. من خلال الاستثمار
							اليوم، تضع نفسك في موقع الاستفادة من المكاسب المركبة والاتجاهات
							الناشئة. لا تنتظر—اغتنم الفرصة وابدأ في بناء مستقبلك المالي الآن
							من أجل غد أكثر أمانًا.
						</div>
						<div className="banner-img">
							<img className=" object-fill w-full h-full" src="bannerImg.png" />
						</div>
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
							من نحن
						</p>
						<p style={{ marginBottom: '40px' }}>
							الاستثمار الآن هو مفتاحك لتحقيق النجاح في المستقبل. السوق مليء
							بالفرص، والتصرف بسرعة يتيح لك الاستفادة من الظروف المواتية والنمو
							المحتمل. التأخير قد يعني فقدان عوائد كبيرة. من خلال الاستثمار
							اليوم، تضع نفسك في موقع الاستفادة من المكاسب المركبة والاتجاهات
							الناشئة. لا تنتظر—اغتنم الفرصة وابدأ في بناء مستقبلك المالي الآن
							من أجل غد أكثر أمانًا.
						</p>
						<div style={{ display: 'flex' }} className="about-right-msg-div">
							<div className="about-right-message">
								<div style={{ flex: 1 }}>
									<img src="envelop.png" />
								</div>
								<div style={{ flex: 4 }}>
									<p>
										في شركة رود للاستثمار، رؤيتنا هي قيادة النمو التحويلي من
										خلال تحديد الفرص ذات الإمكانات العالية وتنميتها. نهدف إلى
										تحقيق عوائد استثنائية مع تعزيز الابتكار والاستدامة، مما يمكن
										عملاءنا من تحقيق نجاح مالي دائم وتأثير مستدام.
									</p>
								</div>
							</div>
							<div className="about-right-message">
								<div style={{ flex: 1 }}>
									<img src="envelop.png" />
								</div>
								<div style={{ flex: 4 }}>
									<p>
										مهمة شركة رود للاستثمار هي تقديم حلول استثمارية استراتيجية
										وذات قيمة عالية تتناسب مع أهداف عملائنا. نحن ملتزمون بتقديم
										أداء متميز من خلال التحليل الدقيق والاستراتيجيات المبتكرة
										والالتزام بالنزاهة، مما يضمن النمو المستدام والاستقرار
										المالي على المدى الطويل.
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
						خطط الاستثمار لدينا
					</p>
					<p>
						استكشف أفضل ثلاثة خيارات استثمارية لدينا المصممة لتلبية أهداف مالية
						متنوعة. سواء كنت تبحث عن دخل ثابت، أو إمكانات نمو عالية، أو نهج
						متوازن، فإن اختياراتنا المنسقة توفر استراتيجيات مخصصة لمساعدتك على
						تحقيق أهدافك وتأمين مستقبلك.
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
								خيار <span style={{ color: 'orange' }}>واحد</span> تعدين
							</p>
							<p>
								يوفر هذا الخطة الاستثمارية نطاقًا مرنًا يتراوح من 50 دولارًا إلى
								1000 دولار لمدة أسبوع واحد، مع معدل فائدة تنافسي بنسبة 100% كل
								12 ساعة. تضمن هذه الخطة نموًا سريعًا لاستثمارك، مما يتيح لك
								تحقيق أقصى عائدات من خلال فوائد مركبة متكررة..
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
								خيار <span style={{ color: 'orange' }}>اثنان</span> تعدين
							</p>
							<p>
								هذه الخطة الاستثمارية، التي تتراوح من 1000 دولار إلى 10,000
								دولار لمدة شهر واحد، توفر معدل فائدة يومي مذهل بنسبة 150%. تقدم
								هذه الخطة عوائد كبيرة مع فوائد مركبة متكررة، مما يجعلها مثالية
								لأولئك الذين يسعون لتحقيق نمو كبير وتقدم مالي قوي.
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
								خيار <span style={{ color: 'orange' }}>ثلاثة</span> تعدين
							</p>
							<p>
								للاستثمارات التي تتراوح من 10,000 دولار إلى 100,000 دولار لمدة 3
								أشهر، تقدم خطتنا معدل فائدة استثنائي بنسبة 200% أسبوعيًا. يهدف
								هذا الخيار ذو النمو العالي إلى تحقيق أقصى عوائد لك من خلال
								الفوائد المركبة المكثفة، مما يعزز رأس مالك بشكل كبير ويحقق مكاسب
								مالية كبيرة.
							</p>
						</div>
					</div>
				</div>

				<div className="calculator" id="invest">
					<p className="recentP">استثمر الآن</p>
					<p>قم بتمويل حسابك</p>
					<div className="investSection">
						<div className="calculator-left mb-2">
							<p style={{ marginBottom: '20px', color: 'orange' }}>
								خطة التعدين{' '}
							</p>
							<div className="flex flex-col items-start gap-3 mt-3 mb-4">
								<div>
									<AlertDialogDemo title="الخيار 1" />
								</div>
								<div>
									<AlertDialogDemo title="الخيار 2" />
								</div>
								<div>
									<AlertDialogDemo title="الخيار 3" />
								</div>
							</div>
						</div>
						<div className="calculator-right">
							<div className=" flex1 right-item">
								<div style={{ flex: 1 }}>
									<img src="percent.svg" style={{ width: '40px' }} />
								</div>
								<div style={{ flex: 3 }}>
									<p style={{ marginBottom: '10px' }}>إيداع</p>
									<span style={{ fontSize: '25px' }}>{User?.deposit ?? 0}</span>
								</div>
							</div>
							<div className=" flex1 right-item">
								<div style={{ flex: 1 }}>
									<img src="percent.svg" style={{ width: '40px' }} />
								</div>
								<div style={{ flex: 3 }}>
									<p style={{ marginBottom: '10px' }}>إجراء الإرجاع</p>
									<span style={{ fontSize: '25px' }}>{0}</span>
								</div>
							</div>
							<div className=" flex1 right-item">
								<div style={{ flex: 1 }}>
									<img src="percent.svg" style={{ width: '40px' }} />
								</div>
								<div style={{ flex: 3 }}>
									<p style={{ marginBottom: '10px' }}>صافي الربح</p>
									<span style={{ fontSize: '25px' }}>{User?.profit ?? 0}</span>
								</div>
							</div>
							<div className=" flex1 right-item">
								<div style={{ flex: 1 }}>
									<img src="percent.svg" style={{ width: '40px' }} />
								</div>
								<div style={{ flex: 3 }}>
									<p style={{ marginBottom: '10px' }}>العائد الإجمالي</p>
									<span style={{ fontSize: '25px' }}>
										{User?.totalReturn ?? 0}
									</span>
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
						<p className="recentP">المعاملات الأخيرة</p>
					</div>
					<div>
						<p style={{ marginBottom: '40px' }}>أموالك تعمل بجد من أجلك</p>
					</div>

					<div className="recents-table">
						<table
							width="100%"
							style={{ marginLeft: 'auto', marginRight: 'auto' }}>
							<thead>
								<td className="thead-data">اسم</td>
								<td className="thead-data">المبلغ</td>
								<td className="hidden md:thead-data">بوابة</td>
								<td className=" hidden mb:thead-data">تاريخ</td>
								<td className="thead-data">حالة</td>
							</thead>
							<tbody>
								<tr style={{ borderColor: 'orange' }}>
									<td>Omar</td>
									<td>$75,000</td>
									<td>Binance</td>
									<td className="hidden md:table-cell">19th Aug 2024</td>
									<td>موافق عليه</td>
								</tr>
								<tr>
									<td>Hassan</td>
									<td>$14,000</td>
									<td>Trust Wallet</td>
									<td className="hidden md:table-cell">15th Aug 2024</td>
									<td>موافق عليه</td>
								</tr>
								<tr>
									<td>Hopkins</td>
									<td>$6,200</td>
									<td>Trust Wallet</td>
									<td className="hidden md:table-cell">11th Aug 2024</td>
									<td>قيد الانتظار </td>
								</tr>
								<tr>
									<td>Lee</td>
									<td>$3,750</td>
									<td>Trust Wallet</td>
									<td className="hidden md:table-cell">8th Aug 2024</td>
									<td>موافق عليه</td>
								</tr>
								<tr>
									<td>Faruk</td>
									<td>$30,150</td>
									<td>Bybit</td>
									<td className="hidden md:table-cell">3rd Aug 2024</td>
									<td>موافق عليه</td>
								</tr>
								<tr>
									<td>Ray</td>
									<td>$6,700</td>
									<td>Trust Wallet</td>
									<td className="hidden md:table-cell">29th Jul 2024</td>
									<td>موافق عليه</td>
								</tr>
								<tr>
									<td>Fibika</td>
									<td>$2,000</td>
									<td>CashApp</td>
									<td className="hidden md:table-cell">28th Jul 2024</td>
									<td>موافق عليه</td>
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
							الإحالات الخاصة بك: 0
						</p>
					</div>
					<div style={{ fontSize: '20px', fontStyle: 'italic' }}>
						اكسب 100 دولار عن كل إحالة عندما تدعو أصدقائك للاستثمار على منصتنا.
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
							أفضل المستثمرين
						</p>
					</div>
					<div>
						<p style={{ fontSize: '30px', marginBottom: '80px' }}>
							تعرف على أفضل لدينا{' '}
							<span style={{ color: 'orange' }}>المستثمرين</span>
						</p>
					</div>
					<div className="flex card" style={{ gap: '14px' }}>
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
									رود كابيتال قد تجاوزت توقعاتي. لقد أسفرت خبرتهم ورؤاهم
									الاستراتيجية عن عوائد مبهرة. أوصي بهم بشدة!
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
									مرحباً، أنا سارة. لقد استثمرت أموالي وكنت أجني الفوائد منذ ذلك
									الحين.
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
									الاستثمار مع رود كابيتال كان ممتازاً. لقد أسفرت استراتيجيتهم
									عن عوائد قوية، وأنا أوصي بشدة بخدماتهم.
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
							color: 'orange',
						}}>
						طرق الدفع
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
							تواصل معنا
						</div>
						<div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
							<div>
								<img
									src="location.png"
									width="30px"
									style={{ borderRadius: '50%' }}
								/>
							</div>
							<div>
								<p>عنوان</p>
								<p className="addressP">
									Rod Capital Level 10, City Center Doha Office 1002, Al-Hitmi
									Building West Bay, Doha, Qatar P.O. Box 12345
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
								<p>بريد إلكتروني</p>
								<p className="email">rodcapitalsmanagement@gmail.com</p>
							</div>
						</div>
					</div>
					<div style={{ textAlign: 'center', margin: '50px 0' }}>
						All Rights Reserved
					</div>
				</footer>
			</div>
		</div>
	);
};

export default Home;
