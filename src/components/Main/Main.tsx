import React from "react";
import { Redirect, Route, Switch } from "react-router";
import styled from "styled-components";
import Dashboard from "../Dashboard/Dashboard";
import NotFound from "../NotFound/NotFound";
const Main = () => {
	return (
		<MainContainer>
			<Switch>
				<Route path="/dashboard">
					<Dashboard />
				</Route>
				<Route path="/" exact>
					<Redirect to="/Dashboard" />
				</Route>
				<Route>
					<NotFound />
				</Route>
			</Switch>
		</MainContainer>
	);
};
const MainContainer = styled.main`
	height: calc(100vh - 70px);
	width: 100%;
	overflow-y: overlay;
	box-sizing: border-box;
	padding: 0px 14px;
`;
export default Main;
