import React from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import { Button } from "@material-ui/core";
import "./Styles.css";
import Actions from "./Actions";
import { useAppDispatch } from "../../store/store";
import { MenuToggleActCreator } from "../../actions/ActionCreators";
import SmallDashboardLogo from "../../assets/DashboardLogo_Small.png";
import { useMediaQuery } from "@react-hook/media-query";
import { Breakpoint } from "../../helpers/constants";
interface Props {}

const HeaderLeftItem = (props: Props) => {
	const ReduxDispatch = useAppDispatch();
	const matches = useMediaQuery(Breakpoint);
	return (
		<Container>
			{matches && (
				<LogoElement>
					<img src={SmallDashboardLogo} />
				</LogoElement>
			)}
			<Button
				className="MenuButton"
				onClick={() => ReduxDispatch(MenuToggleActCreator())}
			>
				<MenuIcon style={{ fill: "#333547", filter: "brightness(160%)" }} />
			</Button>
			<Actions />
		</Container>
	);
};
const LogoElement = styled.div`
	height: 100%;
	width: 70px;
	background-color: #333547;
	display: grid;
	place-items: center;
	& > img {
		height: 1.5em;
		width: 2em;
	}
`;
const Container = styled.div`
	width: fit-content;
	height: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

export default HeaderLeftItem;
