import data from '../../data';
import Item from '../Item/item';
import Homepage from '../Homepage/homepage';
import MainMenu from '../MainMenu/mainmenu';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Home({items}) {
    
    return (
        <main className="main-container">
            <div>
                <Homepage items={items}/>
                <div className="balance-detail">
                    <div className="balance-detail_title">
                    <h4>transactions history</h4>
                    <Link to="/allTransactions">See All</Link>
                    </div>
                    <Item items={items}/>
                </div>
          </div>
            <MainMenu/>
        </main>
    );
}

export default Home;