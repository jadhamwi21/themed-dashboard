import React from "react";
import styled from "styled-components";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";
import LockOpenIcon from "@material-ui/icons/LockOpen";
interface Props {}

const AvatarList = (props: Props) => {
	return (
		<React.Fragment>
			<Row>
				<Icon>
					<AccountCircleIcon style={{ fill: "#495057" }} />
				</Icon>
				<IconLabel>Profile</IconLabel>
			</Row>
			<Row>
				<Icon>
					<AccountBalanceWalletIcon style={{ fill: "#495057" }} />
				</Icon>
				<IconLabel>My Wallet</IconLabel>
			</Row>
			<Row>
				<Icon>
					<SettingsIcon style={{ fill: "#495057" }} />
				</Icon>
				<IconLabel>Settings</IconLabel>
			</Row>
			<Row style={{ marginBottom: "8px" }}>
				<Icon>
					<LockOpenIcon style={{ fill: "#495057" }} />
				</Icon>
				<IconLabel>Lock screen</IconLabel>
			</Row>
		</React.Fragment>
	);
};
const Row = styled.div`
	height: 35px;
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	padding-left: 14px;
	box-sizing: border-box;
	font-size: 14px;
	color: #495057;

	&:hover {
		background-color: #f8f9fa;
		cursor: pointer;
	}
`;
const Icon = styled.div`
	position: relative;
	top: 2px;
	transform: scale(0.65);
`;
const IconLabel = styled.div`
	margin-left: 4px;
`;

export default AvatarList;
