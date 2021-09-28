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
	return (
		<div className='app'>
			<header className='app-header'>
				<img src={Logo} className='app-logo' alt='logo' />
				<h1>ReactJS Pagination</h1>
			</header>
			<main>
				{loading ? (
					<div className='loading'>
						<SpinningCircles
							height='8em'
							width='8em'
							fill='#003e6b'
							stroke='#003e6b'
							speed={1}
							fillOpacity={1}
							strokeWidth={2}
							strokeOpacity={0.725}
						/>
						<h4 className='loading-text'> L o a d i n g . . .</h4>
					</div>
				) : (
					<section className='followers'>
						<div className='container'>
							{followers.map(follower => {
								return <Follower key={follower.id} {...follower} />;
							})}
						</div>
					</section>
				)}
			</main>
		</div>
	);
}

export default App;
