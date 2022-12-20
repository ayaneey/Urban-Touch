import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
	width: 100%;
	height: 100vh;
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
	height: 70%;
	margin-top: 10%;
	margin-left: 10%;
`;

const InfoContainer = styled.div`
	flex: 1;
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
					<InfoContainer></InfoContainer>
				</Slide>
			</Wrapper>
			<Arrow direction="right">
				<ArrowRightOutlined />
			</Arrow>
		</Container>
	);
};

export default Slider;
