import React, { useEffect } from "react";
import { Provider } from "react-redux";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import { store } from "./store/store";

function App() {
	return (
		<Provider store={store}>
			<AppContainer>
				<Sidebar />
				<AppMainContainer>
					<Header />
					<Main />
				</AppMainContainer>
			</AppContainer>
		</Provider>
	);
}
const AppContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: center;
	width: 100vw;
	height: 100vh;
`;
const AppMainContainer = styled.div`
	width: 100%;
	height: 100vh;
	background-color: var(--dashboardBackgroundColor);
`;

export default App;
