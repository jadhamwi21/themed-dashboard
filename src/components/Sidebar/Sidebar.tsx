import { useMediaQuery } from "@react-hook/media-query";
import React, { useLayoutEffect } from "react";
import styled from "styled-components";
import { MenuToggleActCreator } from "../../actions/ActionCreators";
import { Breakpoint } from "../../helpers/constants";
import { useAppDispatch, useAppSelector } from "../../store/store";
import Logo from "./Logo";
import SidebarSectionsContainer from "./SidebarSectionsContainer";

interface Props {}

const Sidebar = () => {
	const matches = useMediaQuery(Breakpoint);
	const ReduxDispatch = useAppDispatch();
	useLayoutEffect(() => {
		if (matches) {
			ReduxDispatch(MenuToggleActCreator());
		}
	}, []);
	const MenuStatus = useAppSelector((state) => state.MenuStatus);
	return (
		<SidebarContainer IncreaseWidth={MenuStatus === "opened"}>
			{!matches && <Logo />}
			<SidebarSectionsContainer />
		</SidebarContainer>
	);
};
const SidebarContainer = styled.aside<{ IncreaseWidth: boolean }>`
	display: block;
	width: ${(props) => (props.IncreaseWidth ? "291px" : "74px")};
	background-color: var(--sidebarBackgroundColor);
	height: 100vh;
	font-family: Roboto, sans-serif;
	font-smooth: always;
	-webkit-font-smoothing: auto;
	@media (max-width: 768px) {
		position: absolute;
		z-index: 20;
		top: 70px;
		left: 0;
		height: calc(100vh - 70px);
		width: ${(props) => (props.IncreaseWidth ? "250px" : "0px")};
	}
`;

export default Sidebar;
