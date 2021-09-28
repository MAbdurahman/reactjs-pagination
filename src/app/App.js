import Logo from './../img/logo.svg';


function App() {
  return (
		<div className='app'>
			<header className='app-header'>
				<img src={Logo} className='app-logo' alt='logo' />
				<h1>ReactJS Pagination</h1>
			</header>
			<div className='app-editor'>

			</div>
		</div>
  );
}

export default App;
