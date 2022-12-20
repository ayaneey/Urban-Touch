import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";
import "../../App.css";
import "../Slider/Slider.css";

const Container = styled.div`
	width: 100%;
	height: 100vh;
	margin-top: 2%;
	display: flex;
	background-color: #e3d5ca;
	position: relative;
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
`;

const Wrapper = styled.div`
	height: 100%;
`;

const Slide = styled.div`
	display: flex;
	align-items: center;
	width: 100vw;
	height: 100vh;
`;
const ImgContainer = styled.div`
	flex: 1;
	height: 100%;
	padding: 50px;
`;

const Image = styled.img`
	height: 80%;
	margin-top: 10%;
	margin-left: 10%;
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
	return (
		<Container>
			<Arrow direction="left">
				<ArrowLeftOutlined />
			</Arrow>
			<Wrapper>
				<Slide>
					<ImgContainer>
						<Image src="https://o.remove.bg/downloads/b9d9cd4f-dac4-4277-8bae-a25161220a1f/png-transparent-t-shirt-overcoat-outerwear-clothing-women-zipper-brown-women-accessories-thumbnail-removebg-preview.png" />
					</ImgContainer>
					<InfoContainer>
						<Title className="title">WINTER SALE!</Title>
						<Description>
							DON'T COMPROMISE ON STYLE! GET 30% DISCOUNT FOR ALL NEW ARRIVALS!
						</Description>
						<Button>SHOW NOW</Button>
					</InfoContainer>
				</Slide>
			</Wrapper>
			<Arrow direction="right">
				<ArrowRightOutlined />
			</Arrow>
		</Container>
	);
};

export default Slider;
