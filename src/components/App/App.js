import React, {useState} from "react";
import NewExpense from "../NewExpense/NewExpense";
import './App.css'
import Expenses from "../Expenses/Expenses";

const App = () => {
    const [expenses, setExpenses] = useState([])

    const addExpenseHandler = (expense) => {
        setExpenses(prevState => {
            return [expense, ...prevState]
        })
    }

    return (
        <>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses data={expenses}/>
        </>
    )
}

export default App;
