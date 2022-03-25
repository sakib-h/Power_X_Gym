import React from "react";
import NavBar from "../../NavBar/NavBar";
import "./CardioTraining.css";

const CardioTraining = () => {
	return (
		<div>
			<header className="classHeader">
				<NavBar className="navBar" />
				<h1>Cardio Training</h1>
				<div className="headerBg"></div>
				<div className="overlay"></div>
			</header>
		</div>
	);
};

export default CardioTraining;
