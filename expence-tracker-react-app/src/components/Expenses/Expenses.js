import React, { useState } from 'react';

import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        console.log("Expenses.js");
        console.log(selectedYear);
        setFilteredYear(selectedYear);
    }

    const filteredExpensesByYear = props.items.filter(x => {
        return x.date.getFullYear().toString() === filteredYear
    });

   
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpensesChart expenses={filteredExpensesByYear}/>
                <ExpenseList items={filteredExpensesByYear} />
            </Card>
        </div>
    );
};

export default Expenses;