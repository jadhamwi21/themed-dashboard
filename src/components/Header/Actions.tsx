import React from "react";
import styled from "styled-components";
import DropdownListComponent from "../DropdownList/DropdownListComponent";
import ActionList, { ListIndividualItem } from "../Lists/ActionList";
import ActionToggler from "./ListTogglerComponents/ActionToggler";

const Actions = () => {
	return (
		<DropdownListComponent
			ListAlignedTo="right"
			ListTogglerComponent={<ActionToggler />}
			footer={<ListIndividualItem>Seperated link</ListIndividualItem>}
			topbottomPadding={4}
			ListStyle={{
				width: "180px",
				borderRadius: "6px",
				fontFamily: "Roboto, sans-serif",
			}}
		>
			<ActionList />
		</DropdownListComponent>
	);
};

export default Actions;
