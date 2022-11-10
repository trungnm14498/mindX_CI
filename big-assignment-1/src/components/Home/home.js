import Item from '../Item/item';
import Homepage from '../Homepage/homepage';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../../DataContext';

function Home() {
    const { items } = useContext(DataContext);
    return (
        <main>
            <div>
                <Homepage items={items} />
                <div className="balance-detail">
                    <div className="balance-detail_title">
                        <h4>transactions history</h4>
                        <Link to="/allTransactions">See All</Link>
                    </div>
                    <Item items={items} canDeleteItem={true} />
                </div>
            </div>
        </main>
    );
}

export default Home;