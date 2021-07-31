import React from "react";
import styled from "styled-components";
import useMenuStatus from "../../hooks/useMenuStatus";
import ComponentsSection from "./Sections/ComponentsSection";
import ExtrasSection from "./Sections/ExtrasSection";
import MainSection from "./Sections/MainSection";
const SidebarSectionsContainer = () => {
	const MenuStatus = useMenuStatus();
	return (
		<SectionsContainer shouldHideScrollbar={MenuStatus === "closed"}>
			<MainSection />
			<ComponentsSection />
			<ExtrasSection />
		</SectionsContainer>
	);
};
const SectionsContainer = styled.div<{ shouldHideScrollbar: boolean }>`
	width: 100%;
	height: calc(100vh - 70px);
	overflow-y: overlay;
	&::-webkit-scrollbar {
		width: 8px;
		background-color: transparent;
	}
	&::-webkit-scrollbar-thumb {
		background-color: ${(props) =>
			props.shouldHideScrollbar ? "transparent" : "gray"};
		border-radius: 20px;
		width: 6px;
		border: solid 2px rgba(0, 0, 0, 0);
		background-clip: padding-box;
	}
	& ul {
		padding: 0px;
		margin: 0px;
		list-style-type: none;
		&:first-child {
			margin-top: 21px;
		}
	}
`;
export default SidebarSectionsContainer;
