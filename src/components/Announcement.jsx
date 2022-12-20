import styled from "styled-components";

const Container = styled.div`
	height: 30px;
	background-color: #e5989bff;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 14px;
	font-weight: 500;
`;

function Announcement() {
	return (
		<Container>Amazing Winter Deal! Free Shipping on Orders over £50</Container>
	);
}

export default Announcement;
