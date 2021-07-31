import React from "react";
import styled from "styled-components";
interface Props {
	date: string;
	content: string;
}

const ActivityIndividualComponent = ({ date, content }: Props) => {
	return (
		<ActivityItem>
			<DateAndContentFlexbox>
				<div>{date}</div>
				<div>{content}</div>
			</DateAndContentFlexbox>
		</ActivityItem>
	);
};
const ActivityItem = styled.li`
	width: 100%;
	border-left: solid 2px #e6e6e6cc;
	display: list-item;
`;
const DateAndContentFlexbox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	width: 200px;
	height: fit-content;
	margin-left: 20px;
	position: relative;
	top: -12px;
	padding-left: 20px;
	font-size: 14px !important;
`;

export default ActivityIndividualComponent;
