import React from "react";
import LandingPage from "./LandingPage";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
		<div className="home">
		<LandingPage />
		</div>
		</>
	);
};

export default Home;
