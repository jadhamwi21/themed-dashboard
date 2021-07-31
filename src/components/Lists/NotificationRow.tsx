import React from "react";
import styled from "styled-components";
interface Props {
	title: string;
	icon: React.ReactElement;
	content: string;
	backgroundColor: string;
}

const NotificationRow = ({ title, icon, content, backgroundColor }: Props) => {
	return (
		<NotificationFlex>
			<IconContainer
				style={{
					backgroundColor: backgroundColor,
					transform: "scale(0.7)",
				}}
			>
				{icon}
			</IconContainer>
			<NotificationsDetail>
				<NotificationTitle>{title}</NotificationTitle>
				<NotificationContent>{content}</NotificationContent>
			</NotificationsDetail>
		</NotificationFlex>
	);
};
const NotificationFlex = styled.div`
	height: fit-content;
	width: 100%;
	display: flex;
	min-height: 76.5px;
	flex-direction: row;
	align-items: flex-start;
	justify-content: flex-start;
	&:hover {
		background-color: rgba(0, 0, 0, 0.1);
		cursor: pointer;
	}
`;
const IconContainer = styled.div`
	border-radius: 50%;
	height: 35px;
	width: 35px;
	display: grid;
	place-items: center;
	padding: 9px;
	margin-bottom: 8px;
`;
const NotificationsDetail = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	height: fit-content;
	width: fit-content;
	padding-top: 6px;
	box-sizing: border-box;
	padding-left: 4px;
	color: #5b626b;
`;
const NotificationTitle = styled.h5`
	color: inherit;
	margin: 0px;
	padding: 0px;
	padding-bottom: 4px;
`;
const NotificationContent = styled.div`
	font-size: 12px;
	color: #707070;
	width: 200px;
`;

export default NotificationRow;
