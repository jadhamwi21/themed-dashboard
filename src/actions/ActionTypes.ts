import { MenuToggleAction, SelectSidebarOptionAction } from "./IActions";

export type AppReducerActions = MenuToggleAction | SelectSidebarOptionAction;

export type AppAction = AppReducerActions;
