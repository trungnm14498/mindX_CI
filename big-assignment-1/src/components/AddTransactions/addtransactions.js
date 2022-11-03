import './addtransactions.css';
import Header from '../Header/header';
import MainMenu from '../MainMenu/mainmenu';
import Categories from '../Categories/categories';
import { Link } from 'react-router-dom';
import {FaChevronLeft} from 'react-icons/fa';
import React, { useState } from 'react';
import DataContext from '../../DataContext';
import data from '../../data';

function AddTransactions() {
    const [items, setItems] = useState(data);
    const [type, setType] = useState("income");
    const [input, setInput] = useState({});

    console.log(DataContext);
    const handleNote = (e) => {
        setInput({...input, id: items[items.length-1].id + 1, name:e.target.value, type: type});
    }

    const handleAmount = (e) => {
        setInput({...input, amount:e.target.value});
    }

    const handleDate = (e) => {
        setInput({...input, date:e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setItems([...items, input]);
    }

    console.log(items);
    return (
        <DataContext.Provider value={items}>
            <main className="main-container">
            <Header/>
            <header className='header-container'>
                <Link to="/"><FaChevronLeft className='header-icon'/></Link>
                <h2>all transaction</h2>
            </header>
            <section className="add-trans-info">
                <div className="add-trans-container">
                    <div className="add-trans-type">
                        <button className={`income-trans ${type==="expense" && 'type-hidden'}`} onClick={()=>setType("income")}>Income</button>
                        <button className={`expense-trans ${type==="income" && 'type-hidden'}`} onClick={()=>setType("expense")}>Expense</button>
                    </div>
                    <form className='add-trans-form'>
                        <div className="form-amount">
                            <label htmlFor="amount">AMOUNT</label>
                            <input type="number" id='amount' name='amount' step='.01' required placeholder='Enter amount in $ ...'
                            onChange={handleAmount}/>
                        </div>
                        <div className="form-date">
                            <label htmlFor="date">DATE</label>
                            <input type="date" id='date' name='date' required onChange={handleDate}/>
                        </div>
                        <div className="form-note">
                            <label htmlFor="note">NOTE</label>
                            <input rows="5" cols="60" name="note" id='note' placeholder="Enter note ..." required onChange={handleNote}></input>
                        </div>
                        <button type="submit" className='add-trans-btn' onClick={handleSubmit}>Add New Transaction</button>
                    </form>
                </div>
            </section>
            <MainMenu/>
        </main>
        </DataContext.Provider>
        
    );
}

export default AddTransactions;