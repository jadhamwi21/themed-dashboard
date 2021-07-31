import React from "react";
import styled from "styled-components";
import Card from "./Card";

interface Props {}

const DashboardCards = (props: Props) => {
	return (
		<CardsContainer>
			<Card
				cardTitle="Orders"
				cardValue="1,685"
				cardProgress="increasing"
				dateUpdated="Since last month"
				cardBadgeColor="#02a499"
				cardBadgeValue="+ 12%"
				cardLogo="https://themesbrand.com/veltrix/layouts/assets/images/services-icon/01.png"
			/>
			<Card
				cardTitle="Revenue"
				cardValue="52,368"
				cardProgress="decreasing"
				dateUpdated="Since last month"
				cardBadgeColor="#ec4561"
				cardBadgeValue="- 28%"
				cardLogo="https://themesbrand.com/veltrix/layouts/assets/images/services-icon/02.png"
			/>
			<Card
				cardTitle="Average Price"
				cardValue="15.8"
				cardProgress="increasing"
				dateUpdated="Since last month"
				cardBadgeColor="#38a4f8"
				cardBadgeValue="00%"
				cardLogo="https://themesbrand.com/veltrix/layouts/assets/images/services-icon/03.png"
			/>
			<Card
				cardTitle="Product Sold"
				cardValue="1,685"
				cardProgress="increasing"
				dateUpdated="Since last month"
				cardBadgeColor="#f8b425"
				cardBadgeValue="+ 84%"
				cardLogo="https://themesbrand.com/veltrix/layouts/assets/images/services-icon/04.png"
			/>
		</CardsContainer>
	);
};
const CardsContainer = styled.section`
	padding: 0px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	height: fit-content;
	width: fit-content;
	padding: 5px 0px;
	box-sizing: border-box;
	margin: 0 auto;
	@media (max-width: 768px) {
		flex-direction: column;
		width: 100%;
	}
`;

export default DashboardCards;
