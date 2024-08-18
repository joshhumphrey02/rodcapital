import prisma from '@/lib/prisma';

const Home = async () => {
	const userInfo = await prisma.user.findMany();
	return (
		<div className="w-full flex flex-col p-5 ">
			<h1>Welcome to the Home Page</h1>
			{userInfo.map((user: any) => (
				<div key={user.id} className="mt-10 flex ">
					<h1>
						{user.firstName} {user.lastName}
					</h1>
				</div>
			))}
		</div>
	);
};

export default Home;
