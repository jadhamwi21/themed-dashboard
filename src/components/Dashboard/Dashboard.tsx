import React from "react";
import styled from "styled-components";
import DashboardCards from "./DashboardCards";
import DashboardContent from "./DashboardContent";
import DashboardHeader from "./DashboardHeader";
const Dashboard = () => {
	return (
		<DashboardContainer>
			<DashboardHeader />
			<DashboardCards />
			<DashboardContent />
		</DashboardContainer>
	);
};
const DashboardContainer = styled.div`
	width: 100%;
	overflow-x: hidden;
`;

export default Dashboard;
