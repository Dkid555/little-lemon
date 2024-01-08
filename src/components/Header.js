import Nav from "./Nav"
import {Link} from "react-router-dom";

export default function Header(){
    return (
        <header>
            <Link to="/">
                <img src = "/images/logo.png" height="70px" alt="little lemon"/>
            </Link>
            <Nav/>
        </header>
    );
}