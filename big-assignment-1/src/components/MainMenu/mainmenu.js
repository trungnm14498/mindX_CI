import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { FaHome, FaChartBar } from "react-icons/fa";
import { Link } from 'react-router-dom';

function MainMenu() {
    const [isActived, setIsActived] = useState(true);
    return (
        <section className='main-menu'>
            <Link to='/addTransactions' className='add-btn'>
                <BiPlus className='add-icon' />
            </Link>
            <div className="menu-btn">
                <Link to="/" onClick={() => setIsActived(true)}><FaHome className={`btn-icon ${isActived === true && `btn-icon_active`}`} /></Link>
                <Link to="/statistics" onClick={() => setIsActived(false)}><FaChartBar className={`btn-icon ${isActived === false && `btn-icon_active`}`} /></Link>
            </div>
        </section>
    );
}

export default MainMenu;