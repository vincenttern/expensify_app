export default expenses => {
  return expenses
    .map(expense => expense.amount)
    .reduce((sum, currentValue) => sum + currentValue, 0);
};
