import { useMediaQuery } from "@react-hook/media-query";
import React from "react";
import styled from "styled-components";
import { Breakpoint } from "../../helpers/constants";
import DropdownListComponent from "../DropdownList/DropdownListComponent";
import NotificationList from "../Lists/NotificationList";
import NotificationToggler from "./ListTogglerComponents/NotificationToggler";

const Notifications = () => {
	const matches = useMediaQuery(Breakpoint);
	return (
		<DropdownListComponent
			footer={
				<ViewAllContainer>
					<ViewAllLink href="#">View all</ViewAllLink>
				</ViewAllContainer>
			}
			ListStyle={{
				width: matches ? "fit-content" : "280px",
				fontFamily: "Roboto , sans-serif",
			}}
			topbottomPadding={5}
			ListAlignedTo="left"
			ListTogglerComponent={<NotificationToggler />}
		>
			<NotificationList />
		</DropdownListComponent>
	);
};
const ViewAllContainer = styled.div`
	text-align: center;
	height: 50px;
	width: 100%;
	box-sizing: border-box;
	padding-top: 14px;
`;
const ViewAllLink = styled.a`
	text-decoration: none;
	color: initial;
	outline: none;
	color: #626ed4;
	font-size: 16px;
`;
export default Notifications;
