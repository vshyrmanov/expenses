import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm/ExpenseForm";


const NewExpense = ({ onAddExpense }) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        onAddExpense(expenseData)
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />

        </div>
    )
}

export default NewExpense;