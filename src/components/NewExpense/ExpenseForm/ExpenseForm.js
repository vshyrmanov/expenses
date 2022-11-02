import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = ({onSaveExpenseData}) => {
    const [showForm, setShowForm] = useState(false);
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const titleChangeHandler = (event) => {
        setTitle(event.target.value)
    }
    const amountChangeHandler = (event) => {
        setAmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setDate(event.target.value)
    }

    const handleShowForm = () => {
        setShowForm(prev => !prev)
    }

    const changeSubmit = (event) => {
        event.preventDefault()

        const expenseData = {
            title: title,
            amount: +amount,
            date: new Date(date),
        }
        setTitle('')
        setAmount('')
        setDate('')
        onSaveExpenseData(expenseData)
        handleShowForm()
    }

    return (
        <>
             <form onSubmit={changeSubmit}>
                 {showForm ? <div className="new-expense__controls">

                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" value={title} onChange={titleChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" value={amount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" value={date} min="2019-01-01" max="2022-12-3" onChange={dateChangeHandler} />
                    </div>
                    <div className="new-expense__actions">
                        <button onClick={handleShowForm}>Cancel</button>
                        <button type="submit">Add expense</button>
                    </div>
                </div> :
                     <div className="new-expense__controls">
                        <div className="new-expense__actions">
                            <button onClick={handleShowForm}>Add new expense</button>
                        </div>
                     </div>}
            </form>
        </>
    )

}

export default ExpenseForm;