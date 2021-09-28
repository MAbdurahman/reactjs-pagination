import React, { useState, useEffect } from 'react';
import Logo from './../img/logo.svg';
import SpinningCircles from 'react-loading-icons';
import { useFetch } from './../utils/useFetch';
import paginate from './../utils/util';
import Follower from './../components/Follower';

function App() {
	//**************** variables ****************//
	const { loading, data } = useFetch();
	const [page, setPage] = useState(0);
	const [followers, setFollowers] = useState([]);

	//**************** functions ****************//
	useEffect(() => {
		if (loading) return;
		setFollowers(data[page]);
	}, [loading, page, data]);

	const nextPage = () => {
		setPage(oldPage => {
			let nextPage = oldPage + 1;
			if (nextPage > data.length - 1) {
				nextPage = 0;
			}
			return nextPage;
		});
	};
	const prevPage = () => {
		setPage(oldPage => {
			let prevPage = oldPage - 1;
			if (prevPage < 0) {
				prevPage = data.length - 1;
			}
			return prevPage;
		});
	};

	const handlePage = index => {
		setPage(index);
	};

	// if (loading) {
	// 	return (
	// 		<div className='loading'>
	// 			<SpinningCircles
	// 				height='8em'
	// 				width='8em'
	// 				fill='#003e6b'
	// 				stroke='#003e6b'
	// 				speed={1}
	// 				fillOpacity={1}
	// 				strokeWidth={2}
	// 				strokeOpacity={0.725}
	// 			/>
	// 			<h4 className='loading-text'> L o a d i n g . . .</h4>
	// 		</div>
	// 	);
	// }
	return (
		<main className='app'>
			<header className='app-header'>
				<img src={Logo} className='app-logo' alt='logo' />
				<h1>ReactJS Pagination</h1>
			</header>
			<section className='followers'>
				<div className='container'>
					{followers.map(follower => {
						return <Follower key={follower.id} {...follower} />;
					})}
				</div>
				{!loading && (
					<div className='btn-container'>
						<button className='prev-btn' onClick={prevPage}>
							prev
						</button>
						{data.map((item, index) => {
							return (
								<button
									key={index}
									className={`page-btn ${
										index === page ? 'active-btn' : null
									}`}
									onClick={() => handlePage(index)}
								>
									{index + 1}
								</button>
							);
						})}
						<button className='next-btn' onClick={nextPage}>
							next
						</button>
					</div>
				)}
			</section>
		</main>
	);
}

export default App;
