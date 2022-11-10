import './BackToTopBtn.css';
import { TbArrowBarToUp } from "react-icons/tb";
import 'animate.css';

function BackToTopBtn({animation}) {
    const backToTop = () => {
        window.scrollTo({
            top: 0
        });
    }

    return (
        <button className={`top-btn ${animation}`} onClick={backToTop}><TbArrowBarToUp className='top-btn--icon' /></button>
    );
}

export default BackToTopBtn;