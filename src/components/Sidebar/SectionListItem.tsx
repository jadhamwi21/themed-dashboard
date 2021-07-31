import React, { useState } from "react";
import styled from "styled-components";
import ArrowBackIosSharpIcon from "@material-ui/icons/ArrowBackIosSharp";
import { ButtonBase } from "@material-ui/core";
import { useAppDispatch, useAppSelector } from "../../store/store";
import useMenuStatus from "../../hooks/useMenuStatus";
import { SelectSidebarOptionActCreator } from "../../actions/ActionCreators";

interface Props {
	Icon: React.ReactNode;
	NotificationBadgeContent?: number;
	NotificationBadgeColor?: string;
	ItemTitle: string;
	nestedList?: { content: string }[];
}

const SectionListItem = ({
	Icon,
	ItemTitle,
	NotificationBadgeContent,
	NotificationBadgeColor,
	nestedList,
}: Props) => {
	const [toggled, setToggled] = useState(false);
	const MenuStatus = useMenuStatus();
	const ReduxDispatch = useAppDispatch();
	const IsThisOptionSelected = useAppSelector(
		(state) => state.SelectedSidebarOption === ItemTitle
	);
	return (
		<ItemContainer
			onClick={() => {
				if (nestedList === undefined) {
					ReduxDispatch(SelectSidebarOptionActCreator(ItemTitle));
				}
			}}
			IsSelected={IsThisOptionSelected}
		>
			<ButtonBase
				style={{
					position: "relative",
					height: "50px",
					width: "100%",
					margin: "0px",
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					padding: "0px 15px",
					...(IsThisOptionSelected ? { backgroundColor: "#424661" } : {}),
				}}
				onClick={() => {
					if (nestedList) setToggled(!toggled);
				}}
			>
				{MenuStatus === "opened" ? (
					<>
						<FlexItem>
							<IconWrapper>{Icon}</IconWrapper>
							<TitleElement>{ItemTitle}</TitleElement>
						</FlexItem>
						<FlexItem style={{ justifyContent: "flex-end" }}>
							{NotificationBadgeContent && NotificationBadgeColor && (
								<NotificationBadge BadgeColor={NotificationBadgeColor}>
									{NotificationBadgeContent}
								</NotificationBadge>
							)}
							{nestedList && !NotificationBadgeContent && (
								<Arrow Toggled={toggled}>
									<ArrowBackIosSharpIcon />
								</Arrow>
							)}
						</FlexItem>
					</>
				) : (
					<IconWrapper style={{ paddingLeft: "5px" }}>{Icon}</IconWrapper>
				)}
			</ButtonBase>
			{nestedList && MenuStatus === "opened" && (
				<NestedListComponent
					Toggled={toggled}
					maxHeight={(nestedList.length * 37).toString() + "px"}
				>
					{nestedList.map((item) => (
						<NestedListItem
							onClick={() =>
								ReduxDispatch(SelectSidebarOptionActCreator(item.content))
							}
						>
							{item.content}
						</NestedListItem>
					))}
				</NestedListComponent>
			)}
		</ItemContainer>
	);
};
const ItemContainer = styled.li<{ IsSelected: boolean }>`
	height: fit-content;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: transparent;
	padding: 0px;
	transition: all 0.6s ease;
	box-sizing: border-box;
	color: #8699ad !important;
	& > :first-child {
		color: ${(props) => (props.IsSelected ? "white !important" : "#8699ad")};
		& svg {
			fill: ${(props) => (props.IsSelected ? "white !important" : "#8699ad")};
		}
	}
	position: relative;
	&:hover {
		cursor: pointer;
	}
	& > :first-child:hover {
		transition: filter 0.6s ease;
		filter: brightness(${(props) => (props.IsSelected ? "100%" : "140%")});
	}
`;
const FlexItem = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	height: fit-content;
	width: fit-content;
`;
const IconWrapper = styled.div`
	& svg {
		fill: #8699ad;
		transform: scale(0.85);
	}
`;
const TitleElement = styled.div`
	margin-left: 12px;
	margin-bottom: 6px;
	font-size: 15px;
	width: fit-content;
`;
const NotificationBadge = styled.div<{ BadgeColor: string }>`
	height: fit-content;
	width: 12px;
	position: absolute;
	background-color: ${(props) => props.BadgeColor};
	color: White;
	border-radius: 50rem !important;
	top: 14px;
	right: 20px;
	font-size: 12px;
	text-align: center;
	padding: 0.25em 0.4em;
	line-height: 1;
	font-family: inherit !important;
`;
const Arrow = styled.div<{ Toggled: boolean }>`
	height: fit-content;
	width: fit-content;
	transition: transform 0.1s linear;
	transform: ${(props) =>
			props.Toggled ? "rotateZ(90deg)" : "rotateZ(-90deg)"}
		scale(0.45);
	position: relative;
	top: -4px;
`;
const NestedListComponent = styled.ul<{ Toggled: boolean; maxHeight: string }>`
	max-height: ${(props) => (props.Toggled ? props.maxHeight : "0px")};
	height: auto;
	width: 100%;
	transition: max-height 0.3s ease-in-out;
	display: block;
	overflow: hidden;
`;
const NestedListItem = styled.li`
	width: 100%;
	padding: 10px 50px;
	font-size: 15px;
	&:hover {
		transition: filter 0.6s ease;
		filter: brightness(140%);
	}
`;

export default SectionListItem;
