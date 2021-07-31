import React from "react";
import styled from "styled-components";

interface Props {
	ContainerName: string;
	children: React.ReactNode;
	Height: string;
	Width: string;
	ContainerStyle?: React.CSSProperties;
}

const Container = ({
	ContainerName,
	children,
	Height,
	Width,
	ContainerStyle,
}: Props) => {
	return (
		<ContainerElement
			style={{ height: Height, width: Width, ...ContainerStyle }}
		>
			<NameElement>{ContainerName}</NameElement>
			{children}
		</ContainerElement>
	);
};
const ContainerElement = styled.div`
	background-color: var(--dashboardContainersBackgroundColor);
	border-radius: 2px;
	padding: 20px;
	font-family: Sarabun, sans-serif;
	color: var(--dashboardTextColor) !important;
`;
const NameElement = styled.h4`
	margin: 0px;
`;

export default Container;
