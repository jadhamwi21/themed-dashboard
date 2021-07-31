import React, { useState } from "react";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import ReactDOM from "react-dom";
import "./Styles.css";
import { Button, styled } from "@material-ui/core";
import ThemeModal from "../ThemeModal/ThemeModal";
interface Props {}
const Settings = (props: Props) => {
	const [isModalShown, setIsModalShown] = useState(false);
	return (
		<React.Fragment>
			<Button
				className="FullscreenAndNotificationAndAvatarAndSettingsButton"
				onClick={() => setIsModalShown(true)}
			>
				<SettingsOutlinedIcon style={{ fill: "#525f80" }} />
			</Button>
			{isModalShown &&
				ReactDOM.createPortal(
					<ThemeModal closeModal={() => setIsModalShown(false)} />,
					document.getElementById("portal")!
				)}
		</React.Fragment>
	);
};

export default Settings;
