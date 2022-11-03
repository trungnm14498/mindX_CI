import './transaction.css';
import Item from '../Item/item';
import {FaChevronLeft} from "react-icons/fa";
import {Tag} from '../Tag/tag';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Transaction({items}) {
    const incomes  = items.filter(item => item.type === "income");
    const expenses = items.filter(item => item.type === "expense");
    const incomeValue = incomes.map(income => income.amount).reduce((prevValue, currValue) => prevValue + currValue).toFixed(2);
    const expenseValue = expenses.map(expense => expense.amount).reduce((prevValue, currValue) => prevValue + currValue).toFixed(2);

    const transactionDate = items.map((item) => new Date(item.date));
    const date = transactionDate.map(e => e.getDate());
    const monthNum = transactionDate.map(e => e.getMonth());
    const transactionYears = transactionDate.map(e => e.getFullYear());

    const month = monthNum.map(e=> {
        switch (e) {
            case 0:
                e = "Jan";
                break;
            case 1:
                e = "Feb";
                break;
            case 2:
                e = "Mar";
                break;
            case 3:
                e = "Apr";
                break;
            case 4:
                e = "May";
                break;
            case 5:
                e = "Jun";
                break;
            case 6:
                e = "Jul";
                break;
            case 7:
                e = "Aug";
                break;
            case 8:
                e = "Sep";
                break;
            case 9:
                e = "Oct";
                break;
            case 10:
                e = "Nov";
                break;
            case 12:
                e = "Dec";
                break;
        }
        return e;
    });
    
    const transactionDays = [];
    const transactionMonths = [];

    for (let i=0; i<date.length; i++) {
        transactionDays.push(date[i] + "-" + month[i] + "-" + transactionYears[i]);
        transactionMonths.push(month[i] + "-" + transactionYears[i]);
    }

    const transactionDay = [...new Set(transactionDays)];
    const transactionMonth = [...new Set(transactionMonths)];
    const transactionYear = [...new Set(transactionYears)];

    const groupBy = (x,f)=>x.reduce((a,b,i)=>((a[f(b,i,x)]||=[]).push(b),a),{});

    const byDay = groupBy(items,v => v.date);
    const byMonth = groupBy(items,v => v.date.slice(3));
    const byYear = groupBy(items,v => v.date.slice(-4));

    const initValue = () => {
        const dayKeys = Object.keys(byDay);
        const result1 = [];
        for (let i=0; i <= items.length - 1; i++) {
            dayKeys.map(dayKey => {
                if (items[i].date === dayKey) {
                    result1.push(byDay[dayKey]);
                }
            })
        }
        const rs1 = [...new Set(result1)];
        return rs1;
    }

    const [categories, setCategories] = useState(transactionDay);
    const [transactionItems, setTransactionItems] = useState(initValue);
    const [status, setStatus] = useState(0);

    const filterDay = () => {
        setCategories(transactionDay);
        setTransactionItems(initValue);
        setStatus(0);
    }

    const filterMonth = () => {
        setCategories(transactionMonth);
        const monthKeys = Object.keys(byMonth);
        const result2 = [];
        for (let i=0; i <= items.length - 1; i++) {
            monthKeys.map(monthKey => {
                if (items[i].date.slice(3) === monthKey) {
                    result2.push(byMonth[monthKey]);
                }
            })
        }
        const rs2 = [...new Set(result2)];
        setTransactionItems(rs2);
        setStatus(1);
    }

    const filterYear = () => {
        setCategories(transactionYear);
        const yearKeys = Object.keys(byYear);
        const result3 = [];
        for (let i=0; i <= items.length - 1; i++) {
            yearKeys.map(yearKey => {
                if (items[i].date.slice(-4) === yearKey) {
                    result3.push(byYear[yearKey]);
                }
            })
        }
        const rs3 = [...new Set(result3)];
        setTransactionItems(rs3);
        setStatus(2);
    }

    return (
        <div className='transaction-container'>
            <header>
            <Link to="/"><FaChevronLeft className='header-icon'/></Link>
            <h2>all transaction</h2>
            </header>
            <section className='transaction-tags'>
                <button className={`transaction-btn ${status === 0 && 'active'}`} onClick={filterDay}>Day</button>
                <button className={`transaction-btn ${status === 1 && 'active'}`} onClick={filterMonth}>Month</button>
                <button className={`transaction-btn ${status === 2 && 'active'}`} onClick={filterYear}>Year</button>
            </section>
            <section className='transaction-total'>
                <div className='income-total total'>
                    <Tag type="income" value={incomeValue}/>
                </div>
                <div className='expense-total total'>
                    <Tag type="expense" value={expenseValue}/>
                </div>
            </section>
            <section className='transaction-main-container'>
                {
                    categories.map((e, index) => {
                        return (   
                            <div className='transaction-detail' key={index}>
                                <h2 className='transaction-title'>{e}</h2>
                                <Item items={transactionItems[index]}/>
                            </div>
                        );
                    })
                }
            </section>
        </div>
    );
}

export default Transaction;