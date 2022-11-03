import './item.css';
import React from 'react';

function Item({items}) {
    return (
        <div className="item-container">
            {
                items.map((menuItem) => {
                    const {id, name, amount, date, type} = menuItem;
                    return (
                        <article key={id}>
                            <div className="item-info">
                                <h4 className="item-name">{name}</h4>
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
