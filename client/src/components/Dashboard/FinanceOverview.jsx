import React from "react";
import CustomPieChart from "../../components/Charts/CustomPieChart.jsx";

const COLORS = ["#875CF5", "#FA2C37"];

const FinanceOverview = ({ totalBalance, totalIncome, totalExpense }) => {
  // Ensure all values are numbers and have default values
  const balance = Number(totalBalance) || 0;
  const income = Number(totalIncome) || 0;
  const expense = Number(totalExpense) || 0;

  const balanceData = [
    { name: "Total Income", amount: income },
    { name: "Total Expense", amount: expense },
  ];

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Financial Overview</h5>
      </div>
      <CustomPieChart
        data={balanceData}
        label="Total Balance"
        totalAmount={`$${balance.toLocaleString()}`}
        colors={COLORS}
      />
    </div>
  );
};

export default FinanceOverview;
