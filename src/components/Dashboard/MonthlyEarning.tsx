import React from "react";
import ChartistGraph from "react-chartist";
import styled from "styled-components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Container from "./Container";
//@ts-ignore
import ChartistTooltip from "chartist-plugin-tooltips-updated";
import { useMediaQuery } from "@react-hook/media-query";
import { Breakpoint } from "../../helpers/constants";
const MonthlyEarning = () => {
	const matches = useMediaQuery(Breakpoint);
	return (
		<Container ContainerName="Monthly Earning" Height="fit-content" Width="70%">
			<MonthlyEarningContainer>
				<ChartContainer>
					<ChartistGraph
						className={"ct-golden-section"}
						type="Line"
						options={{
							high: 9,
							low: 0,

							color: "#626ed4",
							showArea: true,

							plugins: [
								ChartistTooltip({
									appendToBody: false,
								}),
							],
						}}
						data={{
							labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
							series: [[5, 9, 7, 8, 5, 3, 5, 4]],
						}}
					/>
				</ChartContainer>
				<EarningsWrapper>
					<EarningComponent
						headerValue="This month"
						earningValue="$34,252"
						earningContent="It will be as simple as in fact it will be occidental"
						circlePercentage={80}
					/>
					<EarningComponent
						headerValue="This month"
						earningValue="$34,252"
						earningContent="It will be as simple as in fact it will be occidental"
						circlePercentage={60}
					/>
				</EarningsWrapper>
			</MonthlyEarningContainer>
		</Container>
	);
};
const MonthlyEarningContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding-top: 40px;
	flex-wrap: wrap;
	@media (max-width: 768px) {
		flex-direction: column;
		margin: 10px 0px;
	}
`;
const ChartContainer = styled.div`
	height: 250px;
	width: 430px;
	@media (max-width: 768px) {
		height: 100%;
		width: 100%;
	}
	position: relative;
`;
const EarningsWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;
const EarningContainer = styled.div`
	height: fit-content;
	width: 150px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	& > div {
		margin: 10px 0px;
	}
`;

const EarningValueElement = styled.h2`
	margin: 0px;
	padding: 0px;
`;
const EarningComponent = ({
	headerValue,
	earningValue,
	earningContent,
	circlePercentage,
}: {
	headerValue: string;
	earningValue: string;
	earningContent: string;
	circlePercentage: number;
}) => (
	<EarningContainer>
		<div>{headerValue}</div>
		<EarningValueElement>{earningValue}</EarningValueElement>
		<div>{earningContent}</div>
		<div style={{ height: "65px", width: "65px" }}>
			<CircularProgressbar
				value={circlePercentage}
				text=""
				strokeWidth={10}
				styles={{
					path: {
						stroke: "rgb(2, 164, 153)",
						strokeLinecap: "butt",
					},
				}}
			/>
		</div>
	</EarningContainer>
);

export default MonthlyEarning;
