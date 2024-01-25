"use client"
import axios from "axios";
import React, { useState } from "react";

const page = () => {
	const [userdata, setuserdata] = useState("")
	const getData = async () => {
		const response = await axios.get("https://picsum.photos/v2/list");
		const data = JSON.stringify(response.data);
		setuserdata(data);
	}
	return (
		<>
		<button onClick={() => {
			getData()
		}} className="h-10 w-28 bg-red-500 rounded-3xl font-bold text-lg m-20">Get Data</button>
		<div className="p-20 w-2/3">{userdata}</div>
		
		</>
	)
};

export default page;
