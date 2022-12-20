import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import "../../App.css";
import "../Slider/Slider.css";
import { sliderItems } from "../../../src/data";

const Container = styled.div`
	width: 100%;
	height: 100vh;
	margin-top: 2%;
	display: flex;
	background-color: #e3d5ca;
	position: relative;
	overflow: hidden;
`;

const Arrow = styled.div`
	width: 50px;
	height: 50px;
	background: #c5c4c4;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	bottom: 0;
	left: ${(props) => props.direction === "left" && "10px"};
	right: ${(props) => props.direction === "right" && "10px"};
	margin: auto;
	cursor: pointer;
	opacity: 0.5;
	z-index: 2;
`;

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
	display: flex;
	align-items: center;
	width: 100vw;
	height: 100vh;
	margin-right: 10%;
`;

const ImgContainer = styled.div`
	flex: 1;
	height: 100%;
	padding: 50px;
`;

const Image = styled.img`
	height: 80%;
	margin-top: 10%;
	margin-left: 15%;
`;

const InfoContainer = styled.div`
	flex: 1;
	padding: 50%;
`;

const Title = styled.h1`
	font-size: 70px;
`;
const Description = styled.h1`
	margin: 50px 0px;
	font-size: 20px;
	font-weight: 500;
	letter-spacing: 3px;
	animation: backwards;
`;

const Button = styled.h1`
	padding: 10px;
	font-size: 20px;
	background-color: transparent;
	cursor: pointer;
	border-radius: 3px;
	border-color: black;
	border-style: solid;
	text-align: center;
`;

const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(0);
	const handleClick = (direction) => {
		if (direction === "left") {
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
		} else {
			setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
		}
	};
	return (
		<Container>
			<Arrow direction="left" onClick={() => handleClick("left")}>
				<ArrowLeftOutlined />
			</Arrow>
			<Wrapper slideIndex={slideIndex}>
				{sliderItems.map((item) => (
					<Slide bg={item.bg}>
						<ImgContainer>
							<Image src={item.img} />
						</ImgContainer>
						<InfoContainer>
							<Title className="title">{item.title}</Title>
							<Description>{item.description}</Description>
							<Button>SHOW NOW</Button>
						</InfoContainer>
					</Slide>
				))}
			</Wrapper>
			<Arrow direction="right" onClick={() => handleClick("right")}>
				<ArrowRightOutlined />
			</Arrow>
		</Container>
	);
};

export default Slider;
