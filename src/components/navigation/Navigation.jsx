import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const getClassNameNavLink = ({ isActive }) => clsx(css.navLink, {
  [css.active]: isActive,})

const Navigation = () => {
	const addActiveClass = ({ isActive }) =>
		clsx(css.navLink, {
			[css.active]: isActive,
		});

	return (
    <div className={css.header}>
			<nav className={css.nav}>
				<NavLink to="/" className={addActiveClass}>
					Home
				</NavLink>
				<NavLink to="/movies" className={addActiveClass}>
					Movies
				</NavLink>
			</nav>
    </div>
	);
};

export default Navigation;
