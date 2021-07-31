import React from "react";
import styled from "styled-components";
import useMenuStatus from "../../hooks/useMenuStatus";
import SmallDashboardLogo from "../../assets/DashboardLogo_Small.png";
import LargeDashboardLogo from "../../assets/DashboardLogo_Large.png";
import { useHistory } from "react-router";
import { useMediaQuery } from "@react-hook/media-query";
import { Breakpoint } from "../../helpers/constants";
// 768
const Logo = () => {
	const MenuStatus = useMenuStatus();
	const history = useHistory();
	const matches = useMediaQuery(Breakpoint);
	return (
		<LogoContainer onClick={() => history.push("/")}>
			{!matches ? (
				<LogoElement
					src={
						MenuStatus === "opened" ? LargeDashboardLogo : SmallDashboardLogo
					}
					MenuStatus={MenuStatus === "opened"}
				/>
			) : (
				<LogoElement
					src={SmallDashboardLogo}
					MenuStatus={MenuStatus === "opened"}
				/>
			)}
		</LogoContainer>
	);
};
const LogoContainer = styled.div`
	height: 70px;
	width: 100%;
	display: grid;
	place-items: center;
	user-select: none;
`;
const LogoElement = styled.img<{ MenuStatus: boolean }>`
	height: ${(props) => (props.MenuStatus ? "18px" : "22px")};
	width: auto;
	&:hover {
		cursor: pointer;
	}
	@media (max-width: 768px) {
		display: ${(props) => (props.MenuStatus ? "visible" : "none")};
	}
`;

export default Logo;
