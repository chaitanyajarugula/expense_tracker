import React from "react";
import Chart from "../Chart/Chart";
const ExpenseChart = (props) =>{
let chartDatapoints = [
    {'label':'Jan','value':0},
    {'label':'Feb','value':0},
    {'label':'Mar','value':0},
    {'label':'Apr','value':0},
    {'label':'May','value':0},
    {'label':'Jun','value':0},
    {'label':'Jul','value':0},
    {'label':'Aug','value':0},
    {'label':'Sep','value':0},
    {'label':'Oct','value':0},
    {'label':'Nov','value':0},
    {'label':'Dec','value':0}
]
for (const expense of props.expenses){
    let monthIndex = expense.date.getMonth();
    chartDatapoints[monthIndex].value+=expense.amount;
}
    return(
    <div>
        <Chart datapoints = {chartDatapoints}></Chart>
    </div>
);
};
export default ExpenseChart;