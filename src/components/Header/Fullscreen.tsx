import React from "react";
import { Button } from "@material-ui/core";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";
import "./Styles.css";
import useFullscreen from "../../hooks/useFullscreen";

const FullscreenButton = () => {
	const { isFullscreen, clickHandler } = useFullscreen();
	return (
		<Button
			className="FullscreenAndNotificationAndAvatarAndSettingsButton"
			onClick={clickHandler}
		>
			{isFullscreen ? (
				<FullscreenExitIcon style={{ fill: "#525f80" }} />
			) : (
				<FullscreenIcon style={{ fill: "#525f80" }} />
			)}
		</Button>
	);
};

export default FullscreenButton;
