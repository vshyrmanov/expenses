import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate/ExpenseDate';
import Card from '../../UI/Card/Card';

export default function ExpenseItem ({title, date, amount}) {
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={date}/>
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">${amount}</div>
                </div>
            </Card>
        </li>
    )
}