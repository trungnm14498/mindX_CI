import './card_style.css'
import {BiDotsHorizontalRounded, BiBookmark} from "react-icons/bi";
import { FaPlay } from "react-icons/fa";

const onBg = (e) => {
    e.classList.remove('hidden');
}

const offBg = (e) => {
    e.classList.add('hidden');
}

function Card({id, title, image, date, duration, author}) {
    
    return (
        <div className="card_container" onMouseOver={() => {
            onBg(document.getElementById(`icon-${id}`));
            onBg(document.getElementById(`play-${id}`));
        }} onMouseOut={() => {
            offBg(document.getElementById(`icon-${id}`));
            offBg(document.getElementById(`play-${id}`));
        }}>
            <div className="card_id">
                {id}
            </div>
            <div className="card_img">
                <img src={image} alt={`img-${id}`}/>
                <FaPlay className='play hidden'id={`play-${id}`}/>
            </div>
            <div className="card_info">
                <h3 className="card_title">
                    {title}
                </h3>
                <span>{author}</span>
                <div className='options'>
                    <div className='time'>
                        <span>{date}</span> 
                        <span> • {duration} phút</span>
                    </div>
                    <div className="icons hidden" id={`icon-${id}`}>
                        <div className="icon_round">
                            <a href="#" className='icon1'><BiBookmark/></a>
                        </div>
                        <div className="icon_round">
                            <a href="#" className='icon2'><BiDotsHorizontalRounded/></a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Card;