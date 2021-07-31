import React from "react";
import styled from "styled-components";
import Container from "./Container";
import { Sample1, Sample2, Sample3 } from "../../assets/svg/constants";
interface Props {}

const SalesAnalytics = (props: Props) => {
	return (
		<Container
			ContainerName="Sales Analytics"
			Height="fit-content"
			Width="19.5%"
			ContainerStyle={{ marginBottom: "15px" }}
		>
			<SalesAnalyticsContainer>
				<FlexItem Status="Online" Value="1,542" StatisticSVG={<Sample1 />} />
				<FlexItem Status="Offline" Value="6,451" StatisticSVG={<Sample2 />} />
				<FlexItem
					Status="Marketing"
					Value="84,574"
					StatisticSVG={<Sample3 />}
				/>
			</SalesAnalyticsContainer>
		</Container>
	);
};
const SalesAnalyticsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;
const FlexItemContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 30px 0px;
	border-bottom: solid 1px rgba(0, 0, 0, 0.1);
	& h3 {
		margin: 0px;
	}
	&:last-child {
		border-bottom: none;
	}
	@media (max-width: 768px) {
		flex-direction: column;
		align-items: flex-start;
		& > div:first-child > div {
			margin-top: 5px;
		}
		& > div:first-child > h3 {
			margin-top: 5px;
		}
		& > div:last-child {
			margin-top: 5px;
		}
	}
`;
const StatusAndValueContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	width: 100%;
	height: 100%;
	& > div {
		margin-bottom: 10px;
		font-size: 14px;
	}
	@media (max-width: 768px) {
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
	}
`;
const SVGWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	height: 100%;
	width: 100%;
`;
const FlexItem = ({
	Status,
	Value,
	StatisticSVG,
}: {
	Status: string;
	Value: string;
	StatisticSVG: React.ReactNode;
}) => (
	<FlexItemContainer>
		<StatusAndValueContainer>
			<div>{Status}</div>
			<h3>{Value}</h3>
		</StatusAndValueContainer>
		<SVGWrapper>{StatisticSVG}</SVGWrapper>
	</FlexItemContainer>
);
export default SalesAnalytics;
