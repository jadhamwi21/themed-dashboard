import React from "react";
import styled from "styled-components";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
interface Props {
	cardTitle: string;
	cardValue: string;
	dateUpdated: string;
	cardProgress: "increasing" | "decreasing";
	cardLogo: string;
	cardBadgeValue: string;
	cardBadgeColor: string;
}

const Card = ({
	cardLogo,
	cardTitle,
	cardValue,
	cardProgress,
	dateUpdated,
	cardBadgeColor,
	cardBadgeValue,
}: Props) => {
	return (
		<CardContainer>
			<CardFirstRow>
				<CardLogoWrapper>
					<CardLogoElement src={cardLogo} />
				</CardLogoWrapper>
				<CardContentWrapper>
					<CardTitle>{cardTitle}</CardTitle>
					<CardContent>
						{cardValue}
						<CardProgressWrapper>
							{cardProgress === "increasing" ? (
								<ArrowUpwardIcon style={{ fill: "#02a499" }} />
							) : (
								<ArrowDownwardIcon style={{ fill: "#ec4561" }} />
							)}
						</CardProgressWrapper>
					</CardContent>
				</CardContentWrapper>
			</CardFirstRow>
			<CardSecondRow>
				<div>{dateUpdated}</div>
				<ArrowWrapper>
					<ArrowForwardIcon />
				</ArrowWrapper>
			</CardSecondRow>
			<BadgeElement style={{ backgroundColor: cardBadgeColor }}>
				<BadgeInnerDiv>
					<BadgeContent>{cardBadgeValue}</BadgeContent>
				</BadgeInnerDiv>
			</BadgeElement>
		</CardContainer>
	);
};
const CardContainer = styled.div`
	background-color: var(--dashboardCardsBackgroundColor);
	padding: 20px 0px;
	width: 250px;
	border-radius: 4px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	font-family: Sarabun, sans-serif;
	position: relative;
	margin: 10px 12px;
	color: var(--dashboardCardsTextColor);
	@media (max-width: 768px) {
		width: 90%;
	}
`;
const CardFirstRow = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	padding: 0px 20px;
	box-sizing: border-box;
`;
const CardLogoWrapper = styled.div`
	height: fit-content;
	width: fit-content;
	padding: 12px;
	background-color: rgba(255, 255, 255, 0.15);
	display: grid;
	place-items: center;
	box-sizing: border-box;
	border-radius: 4px;
`;
const CardLogoElement = styled.img`
	height: 34px;
	width: 34px;
`;
const CardContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	margin-left: 22px;
`;
const CardTitle = styled.h4`
	text-transform: uppercase;
	margin: 0px;
	margin-bottom: 4px;
`;
const CardContent = styled.div`
	font-size: 25px;
`;
const CardProgressWrapper = styled.span`
	display: inline-block;
	height: fit-content;
	width: fit-content;
	margin-left: 10px;
	box-sizing: border-box;
	position: relative;
	top: 2px;
`;
const CardSecondRow = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-top: 2em;
	padding: 0px 20px;
	box-sizing: border-box;
	font-size: 14px;
`;
const ArrowWrapper = styled.div`
	transform: scale(0.8);
	&:hover {
		cursor: pointer;
	}
`;
const BadgeElement = styled.div`
	width: 80px;
	height: 28px;
	position: absolute;
	top: 18px;
	right: 0px;
	border-radius: 2px;
`;
const BadgeInnerDiv = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	&::before {
		content: "";
		position: absolute;
		display: block;
		top: 0;
		left: 0;
		width: 0px;
		height: 0px;
		border-top: 13px solid transparent;
		border-bottom: 15px solid transparent;
		border-left: 15px solid var(--dashboardCardsBackgroundColor);
		border-right: 15px solid transparent;
	}
`;
const BadgeContent = styled.div`
	position: absolute;
	top: 2px;
	right: 6px;
	color: white;
	font-size: 14px;
`;

export default Card;
