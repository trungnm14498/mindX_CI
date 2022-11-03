import Transaction from "../Transaction/transaction";
import MainMenu from "../MainMenu/mainmenu";
import Header from "../Header/header";
import data from "../../data";
import { useState } from "react";

function AllTransactions() {
    const [items, setItems] = useState(data);
    return (
        <main className="main-container">
            <Transaction items={items}/>
            <MainMenu/>
        </main>
    )
}

export default AllTransactions;