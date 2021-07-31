import React from "react";
import Section from "../Section";
import SectionListItem from "../SectionListItem";
import UIElements from "@material-ui/icons/ViewAgenda";
import {
	FormsNestedList,
	IconsNestedList,
	MapsNestedList,
	TablesNestedList,
	UIElementsNestedList,
} from "./NestedListsConstants";
import FormsIcon from "@material-ui/icons/ListAlt";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import TableChartIcon from "@material-ui/icons/TableChart";
import MapIcon from "@material-ui/icons/Map";
import AppsIcon from "@material-ui/icons/Apps";
const ComponentsSection = () => {
	return (
		<Section SectionTitle="Components">
			<SectionListItem
				Icon={<UIElements />}
				ItemTitle="UI Elements"
				nestedList={UIElementsNestedList}
			/>
			<SectionListItem
				Icon={<FormsIcon />}
				ItemTitle="Forms"
				nestedList={FormsNestedList}
				NotificationBadgeContent={6}
				NotificationBadgeColor="#02a499"
			/>
			<SectionListItem
				Icon={<DonutLargeIcon />}
				ItemTitle="Charts"
				nestedList={FormsNestedList}
			/>
			<SectionListItem
				Icon={<TableChartIcon />}
				ItemTitle="Tables"
				nestedList={TablesNestedList}
			/>
			<SectionListItem
				Icon={<AppsIcon />}
				ItemTitle="Icons"
				nestedList={IconsNestedList}
			/>
			<SectionListItem
				Icon={<MapIcon />}
				ItemTitle="Maps"
				nestedList={MapsNestedList}
				NotificationBadgeContent={2}
				NotificationBadgeColor="#ec4561"
			/>
		</Section>
	);
};

export default ComponentsSection;
