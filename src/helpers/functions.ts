interface CSSGlobalVariablesInterface {
	DashboardBackgroundColor: string;
	SidebarBackgroundColor: string;
	HeaderBackgroundColor: string;
	ContainersBackgroundColor: string;
	CardsBackgroundColor: string;
	DashboardTextColor: string;
	CardsTextColor: string;
}
type ThemeType = "dark" | "light";
const ToggleVariables = ({
	DashboardBackgroundColor,
	SidebarBackgroundColor,
	HeaderBackgroundColor,
	ContainersBackgroundColor,
	CardsBackgroundColor,
	DashboardTextColor,
	CardsTextColor,
}: CSSGlobalVariablesInterface) => {
	document.documentElement.style.setProperty(
		"--dashboardBackgroundColor",
		DashboardBackgroundColor
	);
	document.documentElement.style.setProperty(
		"--sidebarBackgroundColor",
		SidebarBackgroundColor
	);
	document.documentElement.style.setProperty(
		"--headerBackgroundColor",
		HeaderBackgroundColor
	);
	document.documentElement.style.setProperty(
		"--dashboardContainersBackgroundColor",
		ContainersBackgroundColor
	);
	document.documentElement.style.setProperty(
		"--dashboardCardsBackgroundColor",
		CardsBackgroundColor
	);
	document.documentElement.style.setProperty(
		"--dashboardTextColor",
		DashboardTextColor
	);
	document.documentElement.style.setProperty(
		"--dashboardCardsTextColor",
		CardsTextColor
	);
};
const ToggleDark = () => {
	const CSSGlobalVariablesNewValues: CSSGlobalVariablesInterface = {
		DashboardBackgroundColor: "rgba(0,0,0,0.8)",
		SidebarBackgroundColor: "black",
		HeaderBackgroundColor: "black",
		ContainersBackgroundColor: "transparent",
		CardsBackgroundColor: "white",
		DashboardTextColor: "white",
		CardsTextColor: "#5b626b",
	};
	ToggleVariables(CSSGlobalVariablesNewValues);
};
const ToggleLight = () => {
	const CSSGlobalVariablesNewValues: CSSGlobalVariablesInterface = {
		DashboardBackgroundColor: "#f8f8fa",
		SidebarBackgroundColor: "#333547",
		HeaderBackgroundColor: "#ececf1",
		ContainersBackgroundColor: "white",
		CardsBackgroundColor: "#626ed4",
		DashboardTextColor: "#5b626b",
		CardsTextColor: "white",
	};
	ToggleVariables(CSSGlobalVariablesNewValues);
};
export const ToggleTheme = (toggleTo: ThemeType) => {
	if (toggleTo === "dark") {
		ToggleDark();
	} else {
		ToggleLight();
	}
};
