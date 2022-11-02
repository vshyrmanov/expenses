import React, {useState} from 'react';
import ExpenseList from "./ExpensesList/ExpenseList";
import ExpenseFilter from "./ExpenseItem/ExpenseFilter/ExpenseFilter";
import Card from "../UI/Card/Card";
import ExpensesChart from "./ExpensesChart/ExpensesChart";

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2022');
    const handlerFilteredYear = (event) => {
        setSelectedYear(event.target.value)
    }

    const filteredExpenses = props.data.filter(({ date }) => {
        return date.getFullYear().toString() === selectedYear;
    })

    return (
        <Card className="expenses">
            <ExpensesChart expenses={filteredExpenses} />
            <ExpenseFilter selectedYear={selectedYear} handlerFilteredYear={handlerFilteredYear}/>
            <ExpenseList items={filteredExpenses} />
        </Card>
    );
};

export default Expenses;