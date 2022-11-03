import './table.css';
import Item from '../Item/item';
import { RiArrowUpDownLine } from "react-icons/ri";

function Table({items, type, year}) {
    const groupBy = (x,f)=>x.reduce((a,b,i)=>((a[f(b,i,x)]||=[]).push(b),a),{});
    const byType = groupBy(items,v => v.type);
    console.log(byType);
    const tableData = groupBy(byType[type], v => v.date.slice(-4))

    return (
        <div className="table">
            <div className="table-header">
                <h2>Top {type} {year}</h2>
                <RiArrowUpDownLine className='table-icon'/>
            </div>
                {
                    type === "income" &&
                    <div className="table-detail">
                        <Item items={tableData[year].sort((a,b)=> b.amount - a.amount)}/>
                        
                    </div> 
                }
                {
                    type === "expense" && 
                    <div className="table-detail">
                        <Item items={tableData[year].sort((a,b)=> b.amount - a.amount)}/>
                    </div> 
                } 
        </div>
    );
}

export default Table;