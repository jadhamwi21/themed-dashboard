import { useEffect, useState, useRef } from "react";

const useListOpen = () => {
	const [shouldShowList, setShouldShowList] = useState(false);
	const Ref = useRef<HTMLDivElement | null>(null);
	const toggleList = (): void => {
		setShouldShowList(!shouldShowList);
	};
	const closeList = () => {
		setShouldShowList(false);
	};
	useEffect(() => {
		if (Ref.current !== null) {
			const MousedownHandler = function (this: Document, ev: MouseEvent): any {
				if (Ref && !Ref.current?.contains(ev.target as Node)) {
					closeList();
				}
			};
			document.addEventListener("mouseup", MousedownHandler);
			return () => {
				document.removeEventListener("mouseup", MousedownHandler);
			};
		}
	}, [Ref]);
	return {
		shouldShowList,
		toggleList,
		Ref,
	};
};

export default useListOpen;
