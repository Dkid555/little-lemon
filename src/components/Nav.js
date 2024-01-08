

// export default function (){
//
//     return(
//         <nav>
//             <div style={{display: "flex"}}>
//                 <div className={'headItems'}>Menu</div>
//                 <div className={'headItems'}>Reserve Table</div>
//                 <div className={'headItems'}>About</div>
//                 <div className={'headItems'}>Contacts</div>
//             </div>
//         </nav>
//     );
//
//
// }

import { Outlet, Link } from "react-router-dom"
import { useState } from 'react';
import { FaRegTimesCircle, FaGripLines } from 'react-icons/fa';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div className="mobile-nav" onClick={toggleNav}>
                {isOpen ? <FaRegTimesCircle /> : <FaGripLines />}
            </div>
            <nav className={`nav ${isOpen ? 'active' : ''}`} onClick={toggleNav}>
                <Link to="/" className="nav-item">HOME</Link>
                <Link to="/about" className="nav-item">ABOUT</Link>
                <Link to="/menu" className="nav-item">MENU</Link>
                <Link to="/booking" className="nav-item">RESERVE TABLE</Link>
            </nav>
        </>
    )
}