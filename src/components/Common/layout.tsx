import { Outlet } from 'react-router-dom'
import { Header } from './header';
import { Footer } from './footer';
import Grid from './Grid';

export const Layout = () => {
	return (
		<div className='layout'>
			<Grid columns={1} rows={3}>
				<header className='row-start-1'>
					<Header />
				</header>
				<main className='row-start-2' id='main-container'>
					<Outlet />
				</main>
				<footer className='row-start-3'>
					<Footer />
				</footer>
			</Grid>
		</div>
	);
};
