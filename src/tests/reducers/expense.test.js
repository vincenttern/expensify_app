import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

import moment from "moment";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expenses if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1"
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add an expense", () => {
  const expense = {
    id: "102",
    description: "Gym Membership",
    amount: 299,
    createdAt: moment(),
    note: "Monthly gym bill"
  };
  const action = {
    type: "ADD_EXPENSE",
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state.length).toEqual(4);
  expect(state).toEqual([...expenses, expense]);
});

test("should edit an expense", () => {
  const description = "Netflix";
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates: { description }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].description).toBe(description);
});

test("should not edit expense if id not found", () => {
  const description = "Netflex";
  const action = {
    type: "EDIT_EXPENSE",
    id: "",
    updates: { description }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should set expenses", () => {
  const action = {
    type: "SET_EXPENSES",
    expenses: [expenses[1]]
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});
