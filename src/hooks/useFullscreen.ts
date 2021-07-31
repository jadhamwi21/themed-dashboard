import { useEffect, useState } from "react";

const useFullscreen = () => {
	const [isFullscreen, setIsFullscreen] = useState(false);
	const clickHandler: (e: React.MouseEvent) => void = (e) => {
		if (isFullscreen) {
			document.exitFullscreen();
		} else {
			document.documentElement.requestFullscreen();
		}
	};
	useEffect(() => {
		const exitFullscreenHandlerKey = function () {
			const fullScreen = document.fullscreenElement;
			if (fullScreen) {
				setIsFullscreen(true);
			} else {
				setIsFullscreen(false);
			}
		};
		document.addEventListener("fullscreenchange", exitFullscreenHandlerKey);
		return () => {
			document.removeEventListener(
				"fullscreenchange",
				exitFullscreenHandlerKey
			);
		};
	}, []);
	return { clickHandler, isFullscreen };
};

export default useFullscreen;
