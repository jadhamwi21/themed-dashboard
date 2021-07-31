import React from "react";
import styled from "styled-components";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const ActionToggler = () => {
	return (
		<SelectContainer
			onBlur={(e) => (e.target.style.borderColor = "transparent")}
			onFocus={(e) => (e.target.style.borderColor = "#dcdddd")}
		>
			<Flexbox>
				<FlexItemContainer style={{ marginBottom: "2px", marginRight: "4px" }}>
					Create
				</FlexItemContainer>
				<FlexItemContainer>
					<ExpandMoreIcon
						style={{ width: "14px", height: "14px", marginTop: "1px" }}
					/>
				</FlexItemContainer>
			</Flexbox>
		</SelectContainer>
	);
};
const SelectContainer = styled.button`
	display: grid;
	place-items: center;
	height: 38px;
	width: 85px;
	margin-bottom: 2px;
	border-style: solid;
	border-width: 2px;
	border-radius: 6px;
	border-color: transparent;
	font-size: 14px;
	position: relative;
	font-family: Roboto, sans-serif;
	&:hover {
		cursor: pointer;
	}
`;

const Flexbox = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;
const FlexItemContainer = styled.div`
	height: fit-content;
	width: fit-content;
`;

export default ActionToggler;
