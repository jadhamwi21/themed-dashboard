import React from "react";
import Section from "../Section";
import SectionListItem from "../SectionListItem";
import DashboardIcon from "@material-ui/icons/Dashboard";
import {
	AuthenticationNestedList,
	LayoutsNestedList,
	MultiLevelsNestedList,
	PagesNestedList,
} from "./NestedListsConstants";
import InputIcon from "@material-ui/icons/Input";
import PagesIcon from "@material-ui/icons/Pages";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
const ExtrasSection = () => {
	return (
		<Section SectionTitle="Extras">
			<SectionListItem
				Icon={<DashboardIcon />}
				ItemTitle="Layouts"
				nestedList={LayoutsNestedList}
			/>
			<SectionListItem
				Icon={<InputIcon />}
				ItemTitle="Authentication"
				nestedList={AuthenticationNestedList}
			/>
			<SectionListItem
				Icon={<PagesIcon />}
				ItemTitle="Extra Pages"
				nestedList={PagesNestedList}
			/>

			<SectionListItem
				Icon={<MoreHorizIcon />}
				ItemTitle="Multi Level"
				nestedList={MultiLevelsNestedList}
			/>
		</Section>
	);
};

export default ExtrasSection;
