import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import numeral from "numeral";
import selectExpenses from "../selectors/expenses";
import selectedExpensesTotal from "../selectors/expenses-total";

export const ExpensesSummary = ({
  expenseCount,
  expensesTotal,
  hiddenExpensesCount
}) => {
  const expensesWord = expenseCount === 1 ? "expense" : "expenses";
  const formattedExpensesTotal = numeral(expensesTotal / 100).format("$0,0.00");

  const hiddenExpensesWord = hiddenExpensesCount === 1 ? "expense" : "expenses";

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{expenseCount}</span> {expensesWord} totaling{" "}
          <span>{formattedExpensesTotal}</span>
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">
            Add Expense
          </Link>
        </div>
        <div>
          {hiddenExpensesCount > 0 ? (
            <p className="page-header__hiddenExpenses">
              You have {hiddenExpensesCount} hidden {hiddenExpensesWord}. Please
              click (x) on date range to view hidden expenses
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectedExpensesTotal(visibleExpenses),
    hiddenExpensesCount: Math.abs(
      visibleExpenses.length - state.expenses.length
    )
  };
};
export default connect(mapStateToProps)(ExpensesSummary);
