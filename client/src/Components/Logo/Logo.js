import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./logo.svg"
import "./logo.scss"


const Logo = (props) => {
	return (
		<div className={props.class}>
			<Link to="/">
				<img src={logo} alt="logo" height={props.height} width={props.width}/>
			</Link>
		</div>
	);
}

export default Logo;
