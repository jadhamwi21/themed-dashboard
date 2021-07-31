import React from "react";
import styled from "styled-components";
import Container from "./Container";
import TodayIcon from "@material-ui/icons/Today";
import ChartistGraph from "react-chartist";
import { useMediaQuery } from "@react-hook/media-query";
import { Breakpoint } from "../../helpers/constants";
interface Props {}

const SalesReport = (props: Props) => {
	const matches = useMediaQuery(Breakpoint);
	return (
		<Container ContainerName="Sales Report" Height="fit-content" Width="18%">
			<SalesReportContainer>
				<SalesReportHeader>
					<SalesReportDate>
						<TodayIconWrapper>
							<TodayIcon style={{ fill: "#4444ec" }} />
						</TodayIconWrapper>
						<span>Jan 01 - Jan 31</span>
					</SalesReportDate>
					<h3>$4320</h3>
				</SalesReportHeader>
				<PieContainer>
					<ChartistGraph
						className="ct-golden-section"
						type="Pie"
						options={{
							donut: true,
							donutWidth: 14,
							donutSolid: true,
							startAngle: 0,
							width: "100%",
							showLabel: false,
						}}
						data={{
							series: [
								{ value: 54, className: "stroke1" },
								{ value: 28, className: "stroke2" },
								{ value: 17, className: "stroke3" },
							],
						}}
					/>
				</PieContainer>
			</SalesReportContainer>
			<Table>
				<TableRow>
					<TableData>
						<DeviceNameWrapper backgroundColor="#626ed4">
							Desk
						</DeviceNameWrapper>
					</TableData>
					<TableData>Desktop</TableData>
					<TableData>54.5%</TableData>
				</TableRow>
				<TableRow>
					<TableData>
						<DeviceNameWrapper backgroundColor="#02a499">Mob</DeviceNameWrapper>
					</TableData>
					<TableData>Mobile</TableData>
					<TableData>28.0%</TableData>
				</TableRow>
				<TableRow>
					<TableData>
						<DeviceNameWrapper backgroundColor="#f8b425">Tab</DeviceNameWrapper>
					</TableData>
					<TableData>Tablets</TableData>
					<TableData>17.5%</TableData>
				</TableRow>
			</Table>
		</Container>
	);
};
const SalesReportContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
`;
const PieContainer = styled.div`
	height: 200px;
	width: 250px;
	padding-top: 20px;
	@media (max-width: 768px) {
		height: 100%;
		width: 100%;
	}
`;
const SalesReportHeader = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 10px 0px !important;
	box-sizing: border-box;
	& h3 {
		margin: 0px;
	}
`;
const SalesReportDate = styled.div`
	font-size: 14px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;
const TodayIconWrapper = styled.div`
	height: fit-content;
	width: fit-content;
	transform: scale(0.65);
	position: relative;
	top: 2px;
`;
const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
	margin: 0 auto;
`;
const TableRow = styled.tr`
	border-bottom: solid 0.5px rgba(0, 0, 0, 0.1);
`;
const TableData = styled.td`
	width: fit-content;
	text-align: center;
	padding: 14px 0px;
	height: fit-content;
	font-size: 14px;
`;
const DeviceNameWrapper = styled.div<{ backgroundColor: string }>`
	height: fit-content;
	width: fit-content;
	line-height: 1;
	color: white;
	background-color: ${(props) => props.backgroundColor};
	font-size: 11px !important;
	border-radius: 4px;
	padding: 4px;
	padding-top: 0px;
	text-align: center;
	margin: 4px auto;
	margin-bottom: 0px;
`;

export default SalesReport;
