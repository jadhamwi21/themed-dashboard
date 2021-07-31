import React from "react";
import styled from "styled-components";
import LatestTrasanction from "./LatestTrasanction";
import MonthlyEarning_SalesAnalytics_Component from "./MonthlyEarning_SalesAnalytics_Component";
import SalesReport_Activity_ClientReview_TopProductSale from "./SalesReport_Activity_ClientReview_TopProductSale";

interface Props {}

const DashboardContent = (props: Props) => {
	return (
		<ContentContainer>
			<MonthlyEarning_SalesAnalytics_Component />
			<SalesReport_Activity_ClientReview_TopProductSale />
			<LatestTrasanction />
		</ContentContainer>
	);
};
const ContentContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: flex-start;
	padding: 10px;
	box-sizing: border-box;
	flex-wrap: wrap;
	width: 100%;
	height: fit-content;
	& > div {
		margin: 0px 8px;
	}
	@media (max-width: 768px) {
		flex-direction: column;
		align-items: flex-start;

		& > div {
			width: 90% !important;
			margin: 20px 0px;
		}
	}
`;

export default DashboardContent;
