import React from "react";
import styled from "styled-components";
import { ToggleTheme } from "../../helpers/functions";

interface Props {
	closeModal: () => void;
}

const ThemeModal = ({ closeModal }: Props) => {
	return (
		<ThemeModalContainer onClick={closeModal}>
			<Modal onClick={(e) => e.stopPropagation()}>
				<div>Theme : </div>
				<ThemeElement
					onClick={() => {
						ToggleTheme("dark");
						closeModal();
					}}
				>
					Dark Theme
				</ThemeElement>
				<ThemeElement
					onClick={() => {
						ToggleTheme("light");
						closeModal();
					}}
				>
					Light Theme
				</ThemeElement>
			</Modal>
		</ThemeModalContainer>
	);
};
const ThemeModalContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	display: grid;
	place-items: center;
	background-color: rgba(0, 0, 0, 0.6);
`;
const Modal = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	background-color: white;
	border-radius: 4px;
	height: 50%;
	width: 50%;
	user-select: none;
	padding: 0px 20px;
	box-sizing: border-box;
	font-family: Sarabun, sans-serif;
	@media (max-width: 768px) {
		flex-direction: column;
		justify-content: center;
		& > div {
			margin: 10px 0px;
		}
	}
`;
const ThemeElement = styled.div`
	&:hover {
		cursor: pointer;
		opacity: 0.8;
	}
`;

export default ThemeModal;
