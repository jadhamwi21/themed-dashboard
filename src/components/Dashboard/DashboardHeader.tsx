import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import DropdownListComponent from "../DropdownList/DropdownListComponent";
import ActionList, { ListIndividualItem } from "../Lists/ActionList";
import SettingsIcon from "@material-ui/icons/Settings";
interface Props {}

const DashboardHeader = (props: Props) => {
	return (
		<DashboardHeaderContainer>
			<LeftFlexItem>
				<DashboardHeaderTitle>Dashboard</DashboardHeaderTitle>
				<DashboardHeaderContent>
					Welcome To Veltrix Dashboard
				</DashboardHeaderContent>
			</LeftFlexItem>
			<RightFlexItem>
				<DropdownListComponent
					ListAlignedTo="left"
					ListStyle={{ width: "175px" }}
					topbottomPadding={4}
					footer={<ListIndividualItem>Seperated Link</ListIndividualItem>}
					ListTogglerComponent={
						<SettingsButton>
							<SettingsIcon
								style={{
									fill: "white",
									marginRight: "4px",
									marginBottom: "1px",
									transform: "scale(0.6)",
								}}
							/>
							<div>Settings</div>
						</SettingsButton>
					}
				>
					<ActionList />
				</DropdownListComponent>
			</RightFlexItem>
		</DashboardHeaderContainer>
	);
};
const DashboardHeaderContainer = styled.section`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 1.5em;
	box-sizing: border-box;
	font-family: Sarabun, sans-serif !important;
`;
const LeftFlexItem = styled.div`
	width: fit-content;
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
`;
const DashboardHeaderTitle = styled.h6`
	margin: 0px;
	padding: 0px;
	margin-bottom: 6px;
	font-size: 18px;
	color: var(--dashboardTextColor);
`;
const DashboardHeaderContent = styled.p`
	display: block;
	margin: 0px;
	padding: 0px;
	font-size: 14px;
	letter-spacing: 0.75px;
	color: var(--dashboardTextColor);
`;
const RightFlexItem = styled.div`
	display: grid;
	place-items: center;
	height: fit-content;
	width: fit-content;
`;
export const SettingsButton = styled.button`
	border: initial;
	background-color: transparent;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background-color: #626ed4;
	padding: 6px 12px;
	color: white;
	transition: all 0.1s linear;
	border-radius: 6px;
	border: solid 2px transparent;
	&:focus {
		filter: brightness(90%);
		border: solid 2px #a2abfa;
	}
	&:hover {
		cursor: pointer;
	}
`;

export default DashboardHeader;
