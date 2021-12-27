/* 
	홈 페이지
*/

import Center from 'components/Center';
import SideBar from 'components/SideBar';

function Home() {
	return (
		<div className="bg-black h-screen overflow-hidden">
			<main className="flex">
				<SideBar />
				<Center />
			</main>

			<div>{/* Player */}</div>
		</div>
	);
}

export default Home;
