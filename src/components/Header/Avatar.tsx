import { Button } from "@material-ui/core";
import React from "react";
import "./Styles.css";

import styled from "styled-components";
import DropdownListComponent from "../DropdownList/DropdownListComponent";
import AvatarToggler from "./ListTogglerComponents/AvatarToggler";
import AvatarList from "../Lists/AvatarList";

const Avatar = () => {
	return (
		<DropdownListComponent
			ListTogglerComponent={<AvatarToggler />}
			ListAlignedTo="left"
			topbottomPadding={5}
			ListStyle={{
				width: "150px",
				fontFamily: ' "Roboto", "Helvetica", "Arial", sans-serif',
			}}
			footer={<Footer>Logout</Footer>}
		>
			<AvatarList />
		</DropdownListComponent>
	);
};

const Footer = styled.div`
	color: #ec4561;
	height: 35px;
	width: 100%;
	display: grid;
	place-items: center;
	padding-right: 45%;
	margin: 0px;
	margin-top: 6px;
	font-size: 14px;
	&:hover {
		background-color: #f8f9fa;
		cursor: pointer;
	}
`;

export default Avatar;
