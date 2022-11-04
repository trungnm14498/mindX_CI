import './statistics.css';
import { useState, useContext } from 'react';
import MainMenu from '../MainMenu/mainmenu';
import Table from '../Table/table';
import DataContext from '../../DataContext';

function Statistics() {
    const { items } = useContext(DataContext);
    const currentYear = new Date().getFullYear();
    const [type, setType] = useState("income");
    const [year, setYear] = useState(currentYear);

    const transactionDate = items.map((item) => new Date(item.date));
    const transactionYears = transactionDate.map(e => e.getFullYear());
    const transactionYear = [...new Set(transactionYears)];

    const handleChange = (e) => {
        setYear(e.target.value);
    }

    return (
        <main className='statistics-container'>
            <h1 className='statistics-heading'>Statistics</h1>
            <section className='statistics-filter'>
                <div className="add-trans-type">
                    <button className={`income-trans ${type === "expense" && 'type-hidden'}`} onClick={() => setType("income")}>Income</button>
                    <button className={`expense-trans ${type === "income" && 'type-hidden'}`} onClick={() => setType("expense")}>Expense</button>
                </div>
                <select name="years" id="years" onChange={handleChange}>
                    <option value="" selected disabled hidden>2022</option>
                    {
                        transactionYear.map((e, index) => {
                            return <option value={e} key={index}>{e}</option>
                        })
                    }
                </select>
            </section>
            <Table items={items} type={type} year={year} />
        </main>
    );
};

export default Statistics;
