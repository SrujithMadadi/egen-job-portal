import React from "react";
import Button from "Components/Button/Button";
import { render, cleanup } from '@testing-library/react';

afterEach(cleanup);

test("It should render the Action Button",()=>{
	const {getByTestId}=render(<Button buttontext="Test Button" search={()=>{}}/>);
	expect(getByTestId("customButtonTestId")).toBeInTheDocument();
	expect(getByTestId("customButtonTestId")).toHaveTextContent("Test Buttons");
	expect(getByTestId("customButtonTestId")).toHaveClass("customButton");
});