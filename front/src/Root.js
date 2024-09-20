import {Outlet} from "react-router-dom"
import Header from "./components/Header";
import Footer from "./components/Footer";
import {useState} from 'react'

export default function Root(){
	const[language, setLanguage] = useState('korean')
	
	const Changelanguage = (e) =>{
        setLanguage(e.target.value)
    }
	console.log(language)
	return(
		<>
			<Header Changelanguage={Changelanguage}/>
			<Outlet/>
			<Footer/>
		</>
	);
}