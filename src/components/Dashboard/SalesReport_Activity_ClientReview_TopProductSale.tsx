import React from "react";
import styled from "styled-components";
import Activity from "./Activity";
import SalesReport from "./SalesReport";
import TopProductSale from "./TopProductSale";

interface Props {}

const SalesReport_Activity_ClientReview_TopProductSale = (props: Props) => {
	return (
		<>
			<SalesReport />
			<Activity />
			<TopProductSale />
		</>
	);
};

export default SalesReport_Activity_ClientReview_TopProductSale;
