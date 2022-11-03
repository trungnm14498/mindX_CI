import './homepage.css';
import { TagContainer } from '../Tag/tag';
import Header from '../Header/header';

function Homepage({items}) {
    const incomes  = items.filter(item => item.type === "income");
    const expenses = items.filter(item => item.type === "expense");
    const incomeValue = incomes.map(income => income.amount).reduce((prevValue, currValue) => prevValue + currValue).toFixed(2);
    const expenseValue = expenses.map(expense => expense.amount).reduce((prevValue, currValue) => prevValue + currValue).toFixed(2);
    const balanceValue = (incomeValue - expenseValue).toFixed(2);

    return (
        <div className="homepage">
            <Header/>
            <section className='main-content'>
                <div className="balance-card">
                    <div className="total-balance">
                        <h2>total balance</h2>
                        {
                            balanceValue > 0 && <h3 className='income'>+ $ {Math.abs(balanceValue)}</h3>
                        }
                        {
                            balanceValue < 0 && <h3 className='expense'>- $ {Math.abs(balanceValue)}</h3>
                        }
                    </div>
                    <TagContainer incomeValue={incomeValue} expenseValue={expenseValue}/>
                </div>
            </section>
      </div>
    );
}

export default Homepage;