import React from "react";
import styled from "styled-components";
import { SlideupAnimation } from "../../animation/keyframes";
import useListOpen from "../../hooks/useListOpen";
type paddingPropertiesUnion =
	| "padding"
	| "paddingTop"
	| "paddingBottom"
	| "paddingLeft"
	| "paddingRight";
interface Props {
	ListTogglerComponent: React.ReactNode;
	ListAlignedTo: "left" | "right";
	ListStyle: Omit<React.CSSProperties, paddingPropertiesUnion>;
	topbottomPadding?: number;
	children: React.ReactNode;
	footer?: React.ReactNode;
}

const DropdownListComponent = ({
	ListTogglerComponent,
	children,
	topbottomPadding,
	ListAlignedTo,
	ListStyle,
	footer,
}: Props) => {
	const { toggleList, Ref, shouldShowList } = useListOpen();
	return (
		<Wrapper ref={Ref} onClick={toggleList}>
			{ListTogglerComponent}
			{shouldShowList && (
				<ListContainer
					style={{
						...(ListStyle !== undefined ? ListStyle : {}),
						paddingTop: topbottomPadding,
						paddingBottom: topbottomPadding,
						zIndex: 10,
						...(ListAlignedTo === "left" ? { right: 0 } : { left: 0 }),
					}}
				>
					{children}
					{footer && (
						<>
							<Seperator />
							{footer}
						</>
					)}
				</ListContainer>
			)}
		</Wrapper>
	);
};
const Wrapper = styled.div`
	height: fit-content;
	width: fit-content;
	position: relative;

	user-select: none;
`;
const ListContainer = styled.div`
	background-color: white;
	position: absolute;
	top: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	animation-name: ${SlideupAnimation};
	animation-duration: 0.25s;
	animation-timing-function: ease-out;
	border: solid 1px #f8f9fa;
	height: fit-content;
	width: 100%;
`;
const Seperator = styled.div`
	height: 0px;
	width: 100%;
	border-top: solid 1px #f8f9fa;
`;

export default DropdownListComponent;
