import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import ExpenseListFilters from "./ExpenseListFilters";
import selectExpenses from "../selectors/expenses";

const ExpenseList = props => (
  <div>
    <h1>Expense List</h1>
    <ExpenseListFilters />
    {props.expenses.map(expense => {
      return <ExpenseListItem key={expense.id} {...expense} />;
    })}
  </div>
);

// Common practice
const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

// Common practice
export default connect(mapStateToProps)(ExpenseList);
