import Axios from "AxiosConfig/Axios";
import React from "react";
import SearchBar from "Components/SearchBar/SearchBar";
import StoreWrapper from "TestUtilties/StoreWrapper";
import {cleanup, fireEvent} from "@testing-library/react";
import TestData from "TestData/TestData"

jest.mock("AxiosConfig/Axios");

afterEach(cleanup);
afterAll(()=>jest.resetAllMocks());


beforeEach(()=>{
	Axios.get.mockImplementation((url) =>{
		if(url==="/getJobs"){
			return Promise.resolve({data:TestData.jobs})
		}
	});
})

test("It tests the rendering of the SearchBar component",()=>{
	const {getByTestId,getAllByTestId}=StoreWrapper(<SearchBar />);
	let searchBarContainer=getByTestId("searchBarContainerTestId");
	let typeSearch=getAllByTestId("customButtonTestId")[0];
	let typeSearchCheckBox=getByTestId("typeSearchCheckBoxTestId")
	fireEvent.click(typeSearchCheckBox);
	fireEvent.click(typeSearch)
	expect(searchBarContainer.children.length).toBe(3);
})