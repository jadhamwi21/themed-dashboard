import React from "react";
import { Button } from "@material-ui/core";
import UserAvatar from "../../../assets/Mikasa.jpg";
import styled from "styled-components";

interface Props {}

const AvatarToggler = (props: Props) => {
	return (
		<Button className="FullscreenAndNotificationAndAvatarAndSettingsButton">
			<AvatarElement src={UserAvatar} />
		</Button>
	);
};
const AvatarElement = styled.img`
	height: 35px;
	width: 35px;
	border-radius: 50%;
`;

export default AvatarToggler;
