import React from "react";
import TypeSearch from "Components/TypeSearch/TypeSearch";
import StoreWrapper from "TestUtilties/StoreWrapper";
import {cleanup, fireEvent} from "@testing-library/react";

afterEach(cleanup);

test("It tests the rendering of the TypeSearch component",()=>{
	const {getByTestId}=StoreWrapper(<TypeSearch />)
	let typeSearch=getByTestId("typeSearchContainerTestId");
	let checkBox=getByTestId("typeSearchCheckBoxTestId").getElementsByTagName("input")[0]
	expect(typeSearch).toBeInTheDocument();
	expect(typeSearch.children.length).toBe(2)
	fireEvent.click(checkBox)
	expect(checkBox.checked).toEqual(true)
})