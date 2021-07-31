import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components";

const Search = () => {
	return (
		<SearchFieldWrapper>
			<SearchField placeholder="Search..." />
			<SearchIcon
				style={{
					position: "absolute",
					top: "7px",
					right: "6px",
					transform: "scale(0.75)",
					fill: "#404041",
				}}
			/>
		</SearchFieldWrapper>
	);
};
const SearchFieldWrapper = styled.div`
	height: fit-content;
	width: fit-content;
	position: relative;
`;
const SearchField = styled.input`
	box-sizing: border-box;
	position: relative;
	outline: none;
	border: initial;
	width: 220px;
	background-color: #e0e0ea;
	padding: 11px 20px;
	border-radius: 25px;
	font-size: 14px;
	color: #495057;
`;

export default Search;
