import React from "react";
import { LuArrowRight } from "react-icons/lu";
import moment from "moment";
import TransactionCard from "../../components/Cards/TransactionCard.jsx";

const ExpenseTransactions = ({ transactions, onSeeMore }) => (
  <div className="card">
    <div className="flex items-center justify-between">
      <h5 className="text-lg">Expenses</h5>
      <button className="card-btn" onClick={onSeeMore}>
        See All <LuArrowRight className="text-base" />
      </button>
    </div>
    <div className="mt-6">
      {transactions?.slice(0, 5)?.map((expense) => (
        <TransactionCard
          key={expense._id}
          title={expense.category}
          icon={expense.icon}
          date={moment(expense.date).format("DD MMM YYYY")}
          amount={expense.amount}
          type="expense"
          hideDeleteBtn
        />
      ))}
    </div>
  </div>
);

export default ExpenseTransactions;
