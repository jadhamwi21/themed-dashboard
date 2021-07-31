import React from "react";
import styled from "styled-components";
import Container from "./Container";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { SettingsButton as CheckStatusButton } from "./DashboardHeader";
import ClientAvatar from "../../assets/Mikasa.jpg";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useMediaQuery } from "@react-hook/media-query";
import { Breakpoint } from "../../helpers/constants";
const TopProductSale = () => {
	const matches = useMediaQuery(Breakpoint);
	return (
		<TopProductSaleContainer>
			<FlexComplexItem>
				<Container
					ContainerName=""
					Height="250px"
					Width={matches ? "100%" : "170px"}
					ContainerStyle={{ margin: "0px 20px" }}
				>
					<OrderSuccessful>
						<CheckmarkWrapper>
							<CheckCircleOutlineIcon />
						</CheckmarkWrapper>
						<OrderSuccessfulTitle>Order Successful</OrderSuccessfulTitle>
						<OrderSuccessfulContent>
							Thanks you so much for your order.
						</OrderSuccessfulContent>
						<CheckStatusButton style={{ padding: "8px", margin: "20px 0px" }}>
							Check Status
						</CheckStatusButton>
					</OrderSuccessful>
				</Container>
				<Container
					ContainerName=""
					Height="250px"
					Width={matches ? "100%" : "150px"}
					ContainerStyle={{ backgroundColor: "#626ed4" }}
				>
					<TopProductSaleElement>
						<TopProductSaleHeader>Top Product Sale</TopProductSaleHeader>
						<TopProductSaleValue>1452</TopProductSaleValue>
						<TopProductSaleProductTypeText>
							Computer
						</TopProductSaleProductTypeText>
						<TopProductSaleFooter>
							At solmen va esser necessi far uniform myth...
						</TopProductSaleFooter>
					</TopProductSaleElement>
				</Container>
			</FlexComplexItem>

			<Container
				ContainerName="Client Reviews"
				Height="fit-content"
				Width={matches ? "100%" : "380px"}
				ContainerStyle={{
					marginTop: "20px",
					marginLeft: matches ? "40px" : "20px",
				}}
			>
				<ClientReviewComponentsWrapper>
					<QuoteElement>
						" Everyone realizes why a new common language would be desirable one
						could refuse to pay expensive translators it would be necessary. "
					</QuoteElement>
				</ClientReviewComponentsWrapper>
				<ClientReviewFooter>
					<ClientNameAndAvatar>
						<AvatarElement src={ClientAvatar} />
						<div>James Athey</div>
					</ClientNameAndAvatar>
					<ArrowForwardIcon
						style={{ transform: "scale(0.7)", fill: "#626ed4" }}
					/>
				</ClientReviewFooter>
			</Container>
		</TopProductSaleContainer>
	);
};
const TopProductSaleContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 38%;
	@media (max-width: 768px) {
		margin-left: 10px;
	}
`;
const FlexComplexItem = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	text-align: center;
	@media (max-width: 768px) {
		flex-direction: column;
		width: 100%;
		margin-left: 40px;
	}
`;
const OrderSuccessful = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	height: 80%;
	width: 100%;
	margin-top: 2.25em;
`;
const OrderSuccessfulContent = styled.div`
	font-size: 14px;
`;
const CheckmarkWrapper = styled.div`
	transform: scale(2.5);
	& svg {
		fill: #02a499;
	}
`;
const OrderSuccessfulTitle = styled.h4`
	margin: 0px;
	padding: 0px;
	color: #626ed4;
`;
const TopProductSaleElement = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 70%;
	margin-top: 2em;
`;
const TopProductSaleHeader = styled.h5`
	margin: 0px;
	color: rgba(255, 255, 255, 0.5) !important;
	font-size: 16px;
	font-weight: 400;
`;
const TopProductSaleValue = styled.div`
	font-size: 32px;
	color: white;
	font-weight: 500;
`;
const TopProductSaleProductTypeText = styled.div`
	color: white;
	font-size: 14px;
`;
const TopProductSaleFooter = styled.div`
	color: rgba(255, 255, 255, 0.5) !important;
	font-size: 14px;
	width: 130px;
`;

const QuoteElement = styled.div`
	width: 100%;
	font-size: 14px;
`;
const ClientReviewComponentsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const ClientReviewFooter = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin-top: 4em;
`;
const ClientNameAndAvatar = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	font-size: 14px;
	& img:first-child {
		margin-right: 1em;
	}
`;
const AvatarElement = styled.img`
	height: 3em;
	width: 3em;
	border-radius: 50%;
`;

export default TopProductSale;
