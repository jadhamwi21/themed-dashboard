import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import "../Styles.css";
interface Props {}

const NotificationToggler = (props: Props) => {
	return (
		<Button className="FullscreenAndNotificationAndAvatarAndSettingsButton">
			<NotificationIconWrapper>
				<NotificationsNoneOutlinedIcon style={{ fill: "#525f80" }} />
				<NumberOfNotificationsElement>3</NumberOfNotificationsElement>
			</NotificationIconWrapper>
		</Button>
	);
};
const NotificationIconWrapper = styled.div`
	height: fit-content;
	width: fit-content;
	position: relative;
	top: 3px;
`;
const NumberOfNotificationsElement = styled.div`
	height: fit-content;
	width: 12px;
	position: absolute;
	background-color: #ec4561;
	color: White;
	border-radius: 50rem !important;
	top: -5px;
	right: -5px;
	font-size: 75%;
	text-align: center;
	padding: 0.25em 0.4em;
	line-height: 1;
`;

export default NotificationToggler;
