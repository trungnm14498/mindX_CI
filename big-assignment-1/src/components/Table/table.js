import './table.css';
import Item from '../Item/item';
import { RiArrowUpDownLine } from "react-icons/ri";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";
import DataContext from '../../DataContext';
import { useContext } from 'react';

const chartOptions = {
    income: {
        fill: true,
        label: "Income",
        backgroundColor: ["#47d18e"],
        borderColor: "black",
        borderWidth: 2
    },
    expense: {
        fill: true,
        label: "Expense",
        backgroundColor: ["#F95B51"],
        borderColor: "black",
        borderWidth: 2
    }
}
const groupBy = (x, f) => x.reduce((a, b, i) => ((a[f(b, i, x)] ||= []).push(b), a), {});

function Table({ items, type, year }) {
    const byType = groupBy(items, v => v.type);
    const tableData = groupBy(byType[type], v => v.date.slice(-4));
    const chartGroup = groupBy(tableData[year] || [], v => v.date.slice(3, -6));
    const sum = (arr) => {
        let sum = 0;
        arr.forEach(e => {
            sum += e.amount;
        });
        return sum;
    }

    let chartData = [
        {
            id: "Jan",
            amount: 0
        },
        {
            id: "Feb",
            amount: 0
        }, {
            id: "Mar",
            amount: 0
        }, {
            id: "Apr",
            amount: 0
        }, {
            id: "May",
            amount: 0
        }, {
            id: "Jun",
            amount: 0
        }, {
            id: "Jul",
            amount: 0
        }, {
            id: "Aug",
            amount: 0
        }, {
            id: "Sep",
            amount: 0
        }, {
            id: "Oct",
            amount: 0
        }, {
            id: "Nov",
            amount: 0
        }, {
            id: "Dec",
            amount: 0
        },
    ];

    chartData.forEach(e => {
        for (let key in chartGroup) {
            if (key.slice(0, 3) === e.id) {
                e.amount = sum(chartGroup[key]);
            }
        }
    })

    const stats = {
        labels: chartData.map(e => e.id),
        datasets: [
            {
                ...chartOptions[type],
                data: chartData.map(e => e.amount)
            }
        ]
    };

    return (
        <div className="table">
            <div className="chart">
                <Line data={tableData[year] !== undefined ? stats : []} />
            </div>
            <div className="table-header">
                <h2>Top {type} {year}</h2>
                <RiArrowUpDownLine className='table-icon' />
            </div>
            {   
                tableData[year] !== undefined && type === "income" &&
                <div className="table-detail">
                    <Item items={tableData[year].sort((a, b) => b.amount - a.amount)} />
                </div>
            }
            {   
                tableData[year] !== undefined && type === "expense" &&
                <div className="table-detail">
                    <Item items={tableData[year].sort((a, b) => b.amount - a.amount)} />
                </div>
            }
            {   
                tableData[year] === undefined &&
                <div className="table-detail">
                    <div className='table-noti'>Nothing to show here... <br></br>
                    Please add transaction!
                    </div>
                </div>
            }
        </div>
    );
}

export default Table;