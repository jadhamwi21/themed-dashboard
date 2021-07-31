import React from "react";
import ActivityIndividualComponent from "./ActivityIndividualComponent";
import { SettingsButton as LoadmoreButton } from "./DashboardHeader";
import Container from "./Container";
import styled from "styled-components";
import { useMediaQuery } from "@react-hook/media-query";
import { Breakpoint } from "../../helpers/constants";
const Activity = () => {
	const matches = useMediaQuery(Breakpoint);
	return (
		<Container
			ContainerName="Activity"
			Height="fit-content"
			Width="28.4%"
			ContainerStyle={{ margin: matches ? "0px 0px" : "0px 20px" }}
		>
			<Wrapper>
				<ActivityIndividualComponent
					date="JAN 22"
					content="Responded to need “Volunteer Activities”"
				/>
				<ActivityIndividualComponent
					date="JAN 20"
					content="At vero eos et accusamus et iusto odio dignissimos ducimus qui deleniti atque..."
				/>
				<ActivityIndividualComponent
					date="JAN 19"
					content="Joined the group “Boardsmanship Forum”"
				/>
				<ActivityIndividualComponent
					date="JAN 17"
					content="Responded to need “In-Kind Opportunity”"
				/>
				<ActivityIndividualComponent
					date="JAN 16"
					content="Sed ut perspiciatis unde omnis iste natus error sit rem."
				/>
			</Wrapper>
			<LoadmoreButton style={{ padding: "10px 12px", margin: "0 auto" }}>
				Load More
			</LoadmoreButton>
		</Container>
	);
};
const Wrapper = styled.ul`
	list-style: none;
	padding-left: 10px;
	margin: 2.25em 0em 0em 0em;

	& li {
		font-size: 30px;
		position: relative;
		box-sizing: border-box;
		padding-bottom: 40px;
	}
	& li::before {
		display: inline-block;
		height: 1px;
		width: 1px;
		top: -120px;
		left: -15px;
		position: absolute;
		content: ".";
		color: #02a499;
		font-size: 120px;
	}
	& li:last-child {
		border: solid 2px transparent;
	}
`;
export default Activity;
