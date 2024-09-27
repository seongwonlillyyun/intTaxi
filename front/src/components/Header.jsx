import { ReactComponent as Logo } from "../svg/logo.svg";
import { ReactComponent as SeoulLogo } from "../svg/seoul-logo.svg";
import "../css/header.css";
import { Link, useNavigate } from "react-router-dom";
export default function Header({Changelanguage}){

  return(
    <>
        <div id="header">
            <div className="header_content">
                <h1>
                    <Link to={'/'}>
                        <Logo/>
                    </Link>
                </h1>
                <ul className="header_first_menu">
                    <li>
                        <h2><a href="#About">ABOUT</a></h2>
                    </li>
                    <li>
                        <h2><a href="#Lineup">LINE-UP</a></h2>
                    </li>
                    <li>
                        <h2><a href="#Service">SERVICE</a></h2>
                    </li>
                    <li>
                        <h2><a href="#Price">PRICE</a></h2>
                    </li>
                    <li>
                        <h2><a href="">RESERVATION</a></h2>
                    </li>
                    <li>
                        <h2><a href="Review">REVIEW</a></h2>
                    </li>
                </ul>
                <ul className="header_second_menu">
                    <li>
                        <select className="header_lang" onChange={(e)=>Changelanguage(e)}>
                            <option value="korean">KOR</option>
                            <option value="english">ENG</option>
                            <option value="japaneses">JPN</option>
                            <option value="chinese">CHN</option>
                            <option value="chineses">CHN</option>
                            <option value="german">GER</option>
                        </select>
                    </li>
                    <li>
                        <SeoulLogo/>
                    </li>
                    <li>
                        <Link to={'/login'}>
                            <p>Login</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/signup'}>
                            <p>Signup</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </>
  );
}