import React from "react";
import Section from "../Section";
import SectionListItem from "../SectionListItem";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import { EmailNestedList } from "./NestedListsConstants";
const MainSection = () => {
	return (
		<Section SectionTitle="Main">
			<SectionListItem
				Icon={<HomeOutlinedIcon />}
				ItemTitle="Dashboard"
				NotificationBadgeContent={2}
				NotificationBadgeColor="#626ed4"
			/>
			<SectionListItem Icon={<CalendarTodayIcon />} ItemTitle="Calender" />
			<SectionListItem
				Icon={<EmailOutlinedIcon />}
				ItemTitle="Email"
				nestedList={EmailNestedList}
			/>
		</Section>
	);
};

export default MainSection;
