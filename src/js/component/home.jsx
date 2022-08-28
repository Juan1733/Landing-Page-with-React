import React from "react";
import { Navbar } from "./Navbar.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { Card } from "./Card.jsx";
import { Footer } from "./Footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron 
					title={"A Warm Welcome!"}
					text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
					btnContent={"Call to action!"}					
				/>
				<div className="d-flex justify-content-between mt-4" id="cards">
					<Card 
						linkImage={"https://picsum.photos/id/1002/4312/2868"}
						title={"Title"} 
						text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
						btnContent={"Go somewhere"}
					/>
					<Card 
						linkImage={"https://picsum.photos/id/1005/367/267"}
						title={"Card title"} 
						text={"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"}
						btnContent={"Find out more"}
					/>
					<Card 
						linkImage={"https://picsum.photos/id/1011/367/267"}
						title={"Card title"} 
						text={" Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
						btnContent={"Go somewhere"}
					/>
					<Card 
						linkImage={"https://picsum.photos/id/1015/367/267"}
						title={"Card title"} 
						text={"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"}
						btnContent={"Find out more"}
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
