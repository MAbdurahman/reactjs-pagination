import React, { useState, useEffect } from 'react'
import Logo from './../img/logo.svg';
import { useFetch } from './../utils/useFetch';
import paginate from './../utils/util';
import Follower from './../components/Follower';

function App() {
	return (
		<div className='app'>
			<header className='app-header'>
				<img src={Logo} className='app-logo' alt='logo' />
				<h1>ReactJS Pagination</h1>
			</header>
			<div className='app-editor'></div>
		</div>
	);
}

export default App;
