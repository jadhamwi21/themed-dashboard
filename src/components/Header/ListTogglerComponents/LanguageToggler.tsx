import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import "../Styles.css";
import US_Flag from "../../../assets/us_flag.jpg";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
interface Props {}

const LanguageToggler = (props: Props) => {
	return (
		<Button className="LanguageButton">
			<ButtonFlex>
				<FlagElement src={US_Flag} />
				<FlagCountryName>English</FlagCountryName>
				<ExpandMoreIcon
					style={{ width: "14px", height: "14px", marginTop: "1px" }}
				/>
			</ButtonFlex>
		</Button>
	);
};
const ButtonFlex = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	width: fit-content;
	position: relative;
	left: -15px;
`;
const FlagElement = styled.img`
	display: block;
	transform: scale(0.4);
	position: relative;
	left: 15px;
`;
const FlagCountryName = styled.div``;

export default LanguageToggler;
