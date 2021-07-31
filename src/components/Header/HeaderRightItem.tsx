import React from "react";
import styled from "styled-components";

import Languages from "./Languages";
import FullscreenButton from "./Fullscreen";
import Notifications from "./Notifications";
import Avatar from "./Avatar";
import Settings from "./Settings";
import Search from "./Search";
import { useMediaQuery } from "@react-hook/media-query";
import { Breakpoint } from "../../helpers/constants";
interface Props {}

const HeaderRightItem = (props: Props) => {
	const matches = useMediaQuery(Breakpoint);
	return (
		<Container>
			{!matches && <Search />}
			{!matches && <Languages />}
			{!matches && <FullscreenButton />}
			<Notifications />
			<Avatar />
			<Settings />
		</Container>
	);
};
const Container = styled.div`
	width: fit-content;
	height: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

export default HeaderRightItem;
