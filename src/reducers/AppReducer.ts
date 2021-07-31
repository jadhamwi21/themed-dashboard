import { AppReducerTypeKeys } from "../actions/ActionTypeKeys";
import { AppReducerActions } from "../actions/ActionTypes";

interface AppReducerInterface {
	MenuStatus: "opened" | "closed";
	SelectedSidebarOption: string;
}
const initialState: AppReducerInterface = {
	MenuStatus: "opened",
	SelectedSidebarOption: "Dashboard",
};

export const AppReducer = (
	state = initialState,
	action: AppReducerActions
): AppReducerInterface => {
	switch (action.type) {
		case AppReducerTypeKeys.MenuToggle:
			return { ...state, MenuStatus: action.payload.NewMenuStatus };
		case AppReducerTypeKeys.SelectSidebarOption:
			return { ...state, SelectedSidebarOption: action.payload.Option };
		default:
			return state;
	}
};
