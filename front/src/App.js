import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React, {useState, useEffect} from "react";
import Root from "./Root";
import Main from "./pages/Main.jsx";

export default function App(){
	const router = createBrowserRouter([{
		path:"/",
		element:<Root/>,
		children : [
			{path : '/', element :<Main/>}
		]
	}])

	return <RouterProvider router={router}/>
}