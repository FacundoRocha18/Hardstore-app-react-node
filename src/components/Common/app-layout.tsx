import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";

export const AppLayout = () => {
	return (
		<div className="layout">
			<header className="header">
				<Header />
			</header>
			<aside className='side-content'></aside>
			<main className="main-content" id="main-container">
				<Outlet />
			</main>
			<aside className='ad'></aside>
			<footer className="footer">
				<Footer />
			</footer>
		</div>
	);
};
