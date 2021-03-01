import React from "react";
import JobInfo from "Components/JobInfo/JobInfo";
import {render,cleanup} from "@testing-library/react";

afterEach(cleanup)

test("It tests the rendering of JobInfo componenet",()=>{
	const {getByTestId}=render(<JobInfo />)
	let jobInfo=getByTestId("jobInfoTestId");
	expect(jobInfo).toBeInTheDocument();
	expect(jobInfo).toHaveClass("jobDetailsDescription")
})