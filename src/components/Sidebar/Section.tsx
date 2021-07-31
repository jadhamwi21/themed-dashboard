import React from "react";
import styled from "styled-components";
import useMenuStatus from "../../hooks/useMenuStatus";
import { useAppSelector } from "../../store/store";

interface Props {
	SectionTitle: string;
	children: React.ReactNode;
}

const Section = ({ SectionTitle, children }: Props) => {
	const MenuStatus = useMenuStatus();
	return (
		<SectionContainer>
			{MenuStatus === "opened" && (
				<SectionTitleElement>{SectionTitle}</SectionTitleElement>
			)}
			<SectionItemsContainer>{children}</SectionItemsContainer>
		</SectionContainer>
	);
};
const SectionContainer = styled.ul`
	height: fit-content;
	width: 100%;
`;
const SectionTitleElement = styled.li`
	text-transform: uppercase;
	background-color: transparent;
	color: #b4c9de !important;
	opacity: 0.65;
	font-size: 10px;
	letter-spacing: 0.5px;
	margin: 16px 0px;
	padding-left: 20px;
	padding-top: 3px;
	box-sizing: border-box;
`;
const SectionItemsContainer = styled.ul`
	height: fit-content;
	width: 100%;
`;

export default Section;
