import React from 'react';
import './ExpenseFilter.css';

const ExpenseFilter = ({ selectedYear, handlerFilteredYear }) => {
    const years = ['2020', '2021', '2022']

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={selectedYear} onChange={handlerFilteredYear}>
                    {years.map(year => <option key={year} value={year}>{year}</option>)}
                </select>
            </div>
        </div>
    );
};

export default ExpenseFilter;