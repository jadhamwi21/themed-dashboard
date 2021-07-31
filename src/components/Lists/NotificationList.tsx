import React from "react";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import LocalBarIcon from "@material-ui/icons/LocalBar";
import styled from "styled-components";
import NotificationRow from "./NotificationRow";
interface Props {}

const NotificationList = (props: Props) => {
	return (
		<React.Fragment>
			<NotificationsHeader>Notifications (258)</NotificationsHeader>
			<NotificationsItemsWrapper>
				<NotificationRow
					title="Your order is placed"
					content="Dummy text of the printing and typesetting industry"
					icon={<ShoppingCartOutlinedIcon style={{ fill: "white" }} />}
					backgroundColor="#02a499"
				/>
				<NotificationRow
					title="New Message received"
					content="You have 87 unread messages"
					icon={<ChatOutlinedIcon style={{ fill: "white" }} />}
					backgroundColor="#f8b425"
				/>
				<NotificationRow
					title="Your item is shipped"
					content="It's a long established fact the reader will read"
					icon={<LocalBarIcon style={{ fill: "white" }} />}
					backgroundColor="#28b6ee"
				/>
				<NotificationRow
					title="Your order is placed"
					content="Dummy text of the printing and typesetting industry"
					icon={<ShoppingCartOutlinedIcon style={{ fill: "white" }} />}
					backgroundColor="#626ed4"
				/>
				<NotificationRow
					title="New Message received"
					content="You have 87 unread messages"
					icon={<ChatOutlinedIcon style={{ fill: "white" }} />}
					backgroundColor="#ec4561"
				/>
			</NotificationsItemsWrapper>
		</React.Fragment>
	);
};
const NotificationsItemsWrapper = styled.div`
	overflow-y: overlay;
	height: 230px;
	&::-webkit-scrollbar {
		width: 8px;
		background-color: transparent;
	}
	&::-webkit-scrollbar-thumb {
		background-color: rgba(0, 0, 0, 0.2);
		border-radius: 20px;
		width: 6px;
		border: solid 2px rgba(0, 0, 0, 0);
		background-clip: padding-box;
	}
`;
const NotificationsHeader = styled.h5`
	width: 100%;
	height: 50px;
	box-sizing: border-box;
	color: #525f80;
	margin-top: 4px;
	background-color: white;

	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0px;
	margin: 0px;
	padding-left: 6%;
	font-size: 16px;
	font-weight: 600;
	color: #5b626b;
`;

export default NotificationList;
