import React from "react";
import LanguageRow from "./LanguageRow";
import GermanFlag from "../../assets/de_flag.jpg";
import ItalianFlag from "../../assets/it_flag.jpg";
import FrenchFlag from "../../assets/fr_flag.jpg";
import SpanishFlag from "../../assets/sp_flag.jpg";
import RussianFlag from "../../assets/ru_flag.jpg";
interface Props {}
const LanguageList = (props: Props) => {
	return (
		<React.Fragment>
			<LanguageRow Language="German" Icon={GermanFlag} />
			<LanguageRow Language="Italian" Icon={ItalianFlag} />
			<LanguageRow Language="French" Icon={FrenchFlag} />
			<LanguageRow Language="Spanish" Icon={SpanishFlag} />
			<LanguageRow Language="Russian" Icon={RussianFlag} />
		</React.Fragment>
	);
};

export default LanguageList;
