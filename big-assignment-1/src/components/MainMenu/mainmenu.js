import { BiPlus } from "react-icons/bi";
import { FaHome, FaChartBar } from "react-icons/fa";
import { Link } from 'react-router-dom';

function MainMenu() {
    return (
        <section className='main-menu'>
                <Link to='/addTransactions' className='add-btn'>
                    <BiPlus className='add-icon'/>
                </Link>
                <div className="menu-btn">
                    <Link to="/"><FaHome className='btn-icon btn-icon_active'/></Link>
                    <Link to="/statistics"><FaChartBar className='btn-icon'/></Link>
                </div>
        </section>
    );
}

export default MainMenu;