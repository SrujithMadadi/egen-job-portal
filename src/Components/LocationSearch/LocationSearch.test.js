import React from "react";
import LocationSearch from "Components/LocationSearch/LocationSearch";
import {cleanup,fireEvent,waitFor} from "@testing-library/react";
import StoreWrapper from "TestUtilties/StoreWrapper";

afterEach(cleanup)

test("It tests the rendering of the LocationSeach Component",()=>{
	const {getByTestId}=StoreWrapper(<LocationSearch darkTheme={false}/>)
	let locationContainer=getByTestId("locationSearchContainerTestId")
	let locationInput=locationContainer.getElementsByTagName("input")[0]
	expect(locationContainer).toBeInTheDocument();
	expect(locationContainer.children.length).toBe(2)
	expect(locationInput.value).toEqual("")
	fireEvent.change(locationInput,{target:{value:"test"}})
	locationContainer=waitFor(()=>getByTestId("getByTestId"))
	expect(locationInput.value).toEqual("test")
})  