import Transaction from "../Transaction/transaction";
import { useContext } from "react";
import DataContext from "../../DataContext";

function AllTransactions() {
    const { items } = useContext(DataContext);
    return (
        <Transaction items={items} />
    )
}

export default AllTransactions;