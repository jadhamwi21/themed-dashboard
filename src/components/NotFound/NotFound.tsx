import React from "react";
import styled from "styled-components";
import SmallDashboardLogo from "../../assets/DashboardLogo_Small.png";

const NotFound = () => {
	return (
		<GridContainer>
			<div>
				<img src={SmallDashboardLogo} />
				<div>Not Found</div>
			</div>
		</GridContainer>
	);
};
const GridContainer = styled.div`
	display: grid;
	place-items: center;
	height: 100%;
	width: 100%;
	text-align: center;
	color: #02a499;
	font-size: 30px;
	font-family: Sarabun, sans-serif;
	& div:last-child {
		margin-top: 20px;
	}
`;

export default NotFound;
