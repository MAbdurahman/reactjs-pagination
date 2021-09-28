import React, { useState, useEffect } from 'react';
import Logo from './../img/logo.svg';
import { useFetch } from './../utils/useFetch';
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

	return (
		<main className='app'>
			<header className='app-header'>
				<img src={Logo} className='app-logo' alt='logo' />
				<h1>ReactJS Pagination</h1>
			</header>
			<section className='followers'>
				{ loading ? <div className='loading'><section className='loading-circle'></section></div> :
				<div className='container'>
					{ followers.map(follower => {
						return <Follower key={follower.id} {...follower} />;
					})}
				</div>}
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
