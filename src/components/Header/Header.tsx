import React from "react";
import styled from "styled-components";
import HeaderLeftItem from "./HeaderLeftItem";
import HeaderRightItem from "./HeaderRightItem";

interface Props {}

const Header = (props: Props) => {
	return (
		<HeaderContainer>
			<HeaderLeftItem />
			<HeaderRightItem />
		</HeaderContainer>
	);
};
const HeaderContainer = styled.header`
	width: 100%;
	height: 70px;
	background-color: var(--headerBackgroundColor);
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export default Header;
