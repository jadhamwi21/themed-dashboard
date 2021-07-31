import { useHistory } from "react-router";
import { history } from "..";
import { store } from "../store/store";
import { AppReducerTypeKeys } from "./ActionTypeKeys";
import { AppAction } from "./ActionTypes";

export const MenuToggleActCreator = (): AppAction => {
	const MenuCurrentState = store.getState().MenuStatus;
	if (MenuCurrentState === "opened") {
		return {
			type: AppReducerTypeKeys.MenuToggle,
			payload: {
				NewMenuStatus: "closed",
			},
		};
	} else {
		return {
			type: AppReducerTypeKeys.MenuToggle,
			payload: {
				NewMenuStatus: "opened",
			},
		};
	}
};
export const SelectSidebarOptionActCreator = (
	selectedOption: string
): AppAction => {
	history.push(`/${selectedOption.split(" ").join("")}`);
	return {
		type: AppReducerTypeKeys.SelectSidebarOption,
		payload: {
			Option: selectedOption,
		},
	};
};
