import React from "react";
import Apply from "Components/Apply/Apply";
import { render, cleanup } from '@testing-library/react';

afterEach(cleanup);

test("It should render the apple component",()=>{
	const {getByTestId}=render(<Apply applyText="<p>Test</p>"/>);
	let howToApply=getByTestId("howToApplyText")
	let description=getByTestId("howToApplyDescription")
	expect(howToApply).toBeInTheDocument();
	expect(howToApply).toHaveTextContent("How to Apply");
	expect(description).toBeInTheDocument();
	expect(description.getElementsByTagName("p")[0]).toHaveTextContent("Test")
});