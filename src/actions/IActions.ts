import { AppReducerTypeKeys } from "./ActionTypeKeys";

export interface MenuToggleAction {
	type: AppReducerTypeKeys.MenuToggle;
	payload: {
		NewMenuStatus: "opened" | "closed";
	};
}
export interface SelectSidebarOptionAction {
	type: AppReducerTypeKeys.SelectSidebarOption;
	payload: {
		Option: string;
	};
}
