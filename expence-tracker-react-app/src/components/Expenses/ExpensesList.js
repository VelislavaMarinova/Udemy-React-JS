import './ExpensesList.css';
import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => {

    if (!props.items.length) {
        return (
            <h2 className='expenses-list__fallback'>
                Found no expenses.
            </h2>
        );
    };

    return <ul className='expesnes-list'>
        {props.items.map(x => (
            <ExpenseItem
                key={x.id}
                title={x.title}
                amount={x.amount}
                date={x.date}
            />
        ))}
    </ul>
};

export default ExpenseList
