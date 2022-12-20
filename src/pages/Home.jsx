// import { Slider } from "@material-ui/core";
import React from "react";
import Announcement from "../components/Announcement/Announcement";
import Navbar from "../components/Navbar/Navbar";
import Slider from "../components/Slider/Slider";
import "../../src/App.css";

function Home() {
	return (
		<div>
			<Announcement />
			<Navbar />
			<Slider />
		</div>
	);
}

export default Home;
