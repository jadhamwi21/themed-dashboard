import React from "react";
import styled from "styled-components";

const ActionList = () => {
	return (
		<React.Fragment>
			<ListIndividualItem>Action</ListIndividualItem>
			<ListIndividualItem>Another Action</ListIndividualItem>
			<ListIndividualItem>Something Else Here</ListIndividualItem>
		</React.Fragment>
	);
};
export const ListIndividualItem = styled.p`
	width: 100%;
	padding: 0px;
	margin: 0px;
	height: 35px;
	color: inherit;
	transition: background-color 0.1s ease;
	display: flex;
	flex-direction: row;
	align-items: center;
	text-align: initial;
	font-size: 14px;
	padding-left: 12%;
	box-sizing: border-box;
	&:hover {
		background-color: #f8f9fa;
		cursor: pointer;
	}
`;

export default ActionList;
