import React from "react";
import styled from "styled-components";

interface Props {
	Language: string;
	Icon: string;
}

const LanguageRow = ({ Language, Icon }: Props) => {
	return (
		<RowContainer>
			<IconElement src={Icon} />
			<LanguageElement>{Language}</LanguageElement>
		</RowContainer>
	);
};
const RowContainer = styled.div`
	width: 100%;
	height: 40px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	box-sizing: border-box;
	font-size: 13px;
	font-family: "Roboto", "Helvetica", "Arial", sans-serif !important;
	&:hover {
		background-color: #f8f9fa;
		cursor: pointer;
	}
	&:first-child {
		margin-top: 8px;
	}
	&:last-child {
		margin-bottom: 8px;
	}
`;
const IconElement = styled.img`
	transform: scale(0.38);
	position: relative;
	left: 9px;
	top: 1px;
`;
const LanguageElement = styled.div``;

export default LanguageRow;
