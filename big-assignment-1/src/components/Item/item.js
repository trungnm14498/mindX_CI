import './item.css';
import React, { useState, useContext } from 'react';
import { FiTrash2 } from "react-icons/fi";
import DataContext from '../../DataContext';

function Item({items, canDeleteItem}) {
    const { setItems } = useContext(DataContext)
    const [show, setShow] = useState(false);
    const deleteHandle = (e) => {
        const itemId = parseInt(e.target.closest('article').id);
        console.log(itemId);
        setItems(items.filter(item => {
            return item.id !== itemId;
        }))
    }

    return (
        <div className="item-container" onMouseLeave={() => { setShow(false) }}>
            {
                items.map((menuItem) => {
                    const { id, name, amount, date, type } = menuItem;
                    return (
                        <article key={id} id={id} className='item-content' onClick={() => setShow(true)} >
                            <div className="item-info">
                                <div className="item-name">
                                    {show === true && canDeleteItem && <FiTrash2 className='item-icon' onClick={deleteHandle} />}
                                    <span>{name}</span>
                                </div>
                                <span className="item-date">{date}</span>
                            </div>
                            {type === "expense" && <div className={`item-amount ${type}`}>- $ {amount}</div>}
                            {type === "income" && <div className={`item-amount ${type}`}>+ $ {amount}</div>}
                        </article>
                    );
                })
            }
        </div>
    );
}

export default Item;
