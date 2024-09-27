import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React, {useState, useEffect} from "react";
import Root from "./Root";
import Main from "./pages/Main.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";

export default function App(){
	const router = createBrowserRouter([{
		path:"/",
		element:<Root/>,
		children : [
			{path : '/', element :<Main/>},
			{path : '/login', element:<Login/>},
			{path : '/signup', element:<Signup/>},
		]
	}])

	return <RouterProvider router={router}/>
}