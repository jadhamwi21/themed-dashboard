import React from "react";
import styled from "styled-components";
import Container from "./Container";
import MikasaAvatar from "../../assets/Mikasa.jpg";
import { SettingsButton as EditButton } from "./DashboardHeader";
const LatestTrasanction = () => {
	return (
		<Container
			ContainerName="Latest Transaction"
			Height="fit-content"
			Width="95%"
			ContainerStyle={{
				marginTop: "20px",
				overflowX: "scroll",
			}}
		>
			<Table>
				<thead>
					<TableRow>
						<TableHeader>(#) Id</TableHeader>
						<TableHeader>Name</TableHeader>
						<TableHeader>Date</TableHeader>
						<TableHeader>Amount</TableHeader>
						<TableHeader>Status</TableHeader>
					</TableRow>
				</thead>
				<tbody>
					<TableRow>
						<TableData>#14256</TableData>
						<TableData>
							<NameComponent Name="Mikasa Acherman" AvatarLink={MikasaAvatar} />
						</TableData>
						<TableData>15/1/2018</TableData>
						<TableData>$94</TableData>
						<TableData>
							<StatusComponent Content="Delivered" Color="#02a499" />
						</TableData>

						<TableData>
							<EditButton>Edit</EditButton>
						</TableData>
					</TableRow>
					<TableRow>
						<TableData>#14257</TableData>
						<TableData>
							<NameComponent Name="Mikasa Acherman" AvatarLink={MikasaAvatar} />
						</TableData>
						<TableData>16/1/2019</TableData>
						<TableData>$112</TableData>
						<TableData>
							<StatusComponent Content="Pending" Color="#f8b425" />
						</TableData>
						<TableData>
							<EditButton>Edit</EditButton>
						</TableData>
					</TableRow>
					<TableRow>
						<TableData>#14258</TableData>
						<TableData>
							<NameComponent Name="Mikasa Acherman" AvatarLink={MikasaAvatar} />
						</TableData>
						<TableData>17/1/2019</TableData>
						<TableData>$116</TableData>
						<TableData>
							<StatusComponent Content="Delivered" Color="#02a499" />
						</TableData>
						<TableData>
							<EditButton>Edit</EditButton>
						</TableData>
					</TableRow>
					<TableRow>
						<TableData>#14259</TableData>
						<TableData>
							<NameComponent Name="Mikasa Acherman" AvatarLink={MikasaAvatar} />
						</TableData>
						<TableData>18/1/2019</TableData>
						<TableData>$109</TableData>
						<TableData>
							<StatusComponent Content="Cancel" Color="#ec4561" />
						</TableData>
						<TableData>
							<EditButton>Edit</EditButton>
						</TableData>
					</TableRow>
					<TableRow>
						<TableData>#14260</TableData>
						<TableData>
							<NameComponent Name="Mikasa Acherman" AvatarLink={MikasaAvatar} />
						</TableData>
						<TableData>19/1/2018</TableData>
						<TableData>$112</TableData>
						<TableData>
							<StatusComponent Content="Delivered" Color="#02a499" />
						</TableData>
						<TableData>
							<EditButton>Edit</EditButton>
						</TableData>
					</TableRow>
					<TableRow>
						<TableData>#14256</TableData>
						<TableData>
							<NameComponent Name="Mikasa Acherman" AvatarLink={MikasaAvatar} />
						</TableData>
						<TableData>15/1/2018</TableData>
						<TableData>$94</TableData>
						<TableData>
							<StatusComponent Content="Pending" Color="#f8b425" />
						</TableData>
						<TableData>
							<EditButton>Edit</EditButton>
						</TableData>
					</TableRow>
				</tbody>
			</Table>
		</Container>
	);
};
const Table = styled.table`
	border-collapse: collapse;
	width: 100%;
	box-sizing: border-box;
	height: fit-content;
	& td {
		padding: 14px;
		font-size: 14px;
	}
	& th {
		padding: 14px;
		font-size: 14px;
		color: var(--dashboardTextColor);
	}
	& tbody > tr:hover {
		background-color: rgba(221, 221, 221, 0.2);
	}
`;
const TableRow = styled.tr`
	width: 100%;
	height: fit-content;
	text-align: left;
`;
const TableData = styled.td`
	text-align: center;
	border: solid 1px rgb(233, 236, 239);
	border-left: none;
	border-right: none;
	text-align: left;
`;
const TableHeader = styled.th`
	font-weight: initial;

	color: black;
	text-align: left;
	font-size: 14px;
`;
const NameTableElement = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
`;
const Avatar = styled.img`
	height: 35px;
	width: 35px;
	border-radius: 50%;
	margin-right: 10px;
`;
const NameComponent = ({
	Name,
	AvatarLink,
}: {
	Name: string;
	AvatarLink: string;
}) => {
	return (
		<NameTableElement>
			<Avatar src={AvatarLink} />
			<span>{Name}</span>
		</NameTableElement>
	);
};
const StatusElement = styled.div<{ backgroundColor: string }>`
	line-height: 1;
	padding: 0px 1.5px 2.5px 1.5px;
	background-color: ${(props) => props.backgroundColor};
	font-size: 12px;
	color: white;
	border-radius: 4px;
	text-align: center;
`;

const StatusComponent = ({
	Content,
	Color,
}: {
	Content: string;
	Color: string;
}) => {
	return <StatusElement backgroundColor={Color}>{Content}</StatusElement>;
};

export default LatestTrasanction;
