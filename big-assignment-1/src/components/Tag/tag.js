import './tag.css'
import { BsArrowUp, BsArrowDown } from "react-icons/bs";

function Tag({type, value}) {
    return (
        <div className="tag">
            <div className="tag-header">
                <div className="tag-icon">
                    <div className="tag-icon_wrapper">
                        { type==="income" && <BsArrowUp className='icon-income income'/>}
                        { type==="expense" && <BsArrowDown className='icon-expense expense'/>}
                    </div>
                    <span>{type}</span>
                </div>
            </div>
            <span className={`${type} amount`}>$ {value}</span>
        </div>
    );
}

function TagContainer({incomeValue, expenseValue}) {
    return (
        <div className="tag-container">
            <Tag type="income" value={incomeValue}/>
            <Tag type="expense" value={expenseValue}/>
        </div>
    )
}

export {TagContainer, Tag};