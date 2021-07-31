import "./Styles.css";
import DropdownListComponent from "../DropdownList/DropdownListComponent";
import LanguageToggler from "./ListTogglerComponents/LanguageToggler";
import LanguageList from "../Lists/LanguageList";
const Languages = () => {
	return (
		<DropdownListComponent
			ListTogglerComponent={<LanguageToggler />}
			ListAlignedTo="left"
			ListStyle={{ width: "150px" }}
			topbottomPadding={4}
		>
			<LanguageList />
		</DropdownListComponent>
	);
};

export default Languages;
