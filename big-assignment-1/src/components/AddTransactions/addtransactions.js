import './addtransactions.css';
import Header from '../Header/header';
import { Link } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import React, { useState, useContext, useRef } from 'react';
import DataContext from '../../DataContext';

function AddTransactions() {
    const { items, setItems } = useContext(DataContext)
    const [type, setType] = useState("income");
    const [input, setInput] = useState({});
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    const idList = [];
    items.forEach(item => {
        idList.push(item.id);
    });

    const handleNote = (e) => {
        if (e.target.value !== "") {
            setInput({ ...input, id: Math.max(...idList) + 1, name: e.target.value, type: type });
        }

    }

    const handleAmount = (e) => {
        if (e.target.value !== "") {
            setInput({ ...input, amount: parseInt(e.target.value) });
        }
    }

    const handleDate = (e) => {
        const dateInput = e.target.value;
        if (dateInput !== "") {
            let year0 = dateInput.slice(0, 4);
            let month0 = dateInput.slice(5, 7);
            let day0 = dateInput.slice(8, 10);
            switch (month0) {
                case "01":
                    month0 = "January";
                    break;
                case "02":
                    month0 = "February";
                    break;
                case "03":
                    month0 = "March";
                    break;
                case "04":
                    month0 = "April";
                    break;
                case "05":
                    month0 = "May";
                    break;
                case "06":
                    month0 = "June";
                    break;
                case "07":
                    month0 = "July";
                    break;
                case "08":
                    month0 = "August";
                    break;
                case "09":
                    month0 = "September";
                    break;
                case "10":
                    month0 = "October";
                    break;
                case "11":
                    month0 = "November";
                    break;
                case "12":
                    month0 = "December";
                    break;
            }
            const date = `${day0} ${month0}, ${year0}`;
            setInput({ ...input, date: date });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(input).length === 5) {
            setItems([...items, input]);
            ref1.current.value = '';
            ref2.current.value = '';
            ref3.current.value = '';
        }
    }

    return (
        <main className='addtrans-container'>
            <Header />
            <header className='header-container'>
                <Link to="/"><FaChevronLeft className='header-icon' /></Link>
                <h2>all transaction</h2>
            </header>
            <section className="add-trans-info">
                <div className="add-trans-container">
                    <div className="add-trans-type-1">
                        <button className={`income-trans ${type === "expense" && 'type-hidden'}`} onClick={() => setType("income")}>Income</button>
                        <button className={`expense-trans ${type === "income" && 'type-hidden'}`} onClick={() => setType("expense")}>Expense</button>
                    </div>
                    <form className='add-trans-form'>
                        <div className="form-amount">
                            <label htmlFor="amount">AMOUNT</label>
                            <input ref={ref1} type="number" id='amount' name='amount' step='.01' required placeholder='Enter amount in $ ...'
                                onChange={handleAmount} />
                        </div>
                        <div className="form-date">
                            <label htmlFor="date">DATE</label>
                            <input ref={ref2} type="date" id='date' name='date' required onChange={handleDate} />
                        </div>
                        <div className="form-note">
                            <label htmlFor="note">NOTE</label>
                            <input ref={ref3} rows="5" cols="60" name="note" id='note' placeholder="Enter note ..." required onChange={handleNote}></input>
                        </div>
                        <button type="submit" className='add-trans-btn' onClick={handleSubmit}>Add New Transaction</button>
                    </form>
                </div>
                <div className="transaction-noti">
                    <p>* I want to create a modal popup to notify that You added new transaction successfully or not but I could not. So in the fields your values you input disappear, You did it right! Thank you!
                    </p>
                </div>
            </section>

        </main>
    );
}
export default AddTransactions;