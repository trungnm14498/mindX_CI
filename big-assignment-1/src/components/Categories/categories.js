import './categories.css';
import { useState } from 'react';

function Categories() {
    const [type, setType] = useState("income");

    return (
        <div className="add-trans-type">
            <button className={`income-trans ${type==="expense" && 'type-hidden'}`} onClick={()=>setType("income")}>Income</button>
            <button className={`expense-trans ${type==="income" && 'type-hidden'}`} onClick={()=>setType("expense")}>Expense</button>
        </div>
    );
}

export default Categories;