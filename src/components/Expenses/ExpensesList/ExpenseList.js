import React from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem"
import './ExpenseList.css'

export default function ExpenseList ({ items }) {
    if (items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }

    return (
        <ul className="expenses-list">
            {items.map(({title, date, id, amount}) =>
                <ExpenseItem
                    key={id}
                    title={title}
                    amount={amount}
                    date={date}
                />
            )}
        </ul>
        
    )
}