const incomeColors = ['#123123', '#154731', '#165f40', '#16784f'];
const expenseColors = ['#b50d12', '#bf2f1f', '#c9452c', '#d3583a', '#dc6a48', '#e57c58', '#ee8d68', '#f79d79', '#ffae8a', '#cc474b', '#f55b5f'];

export const incomeCategories = [
  { type: 'Salary', amount: 0, color: incomeColors[0] },
  { type: 'Stock', amount: 0, color: incomeColors[1] },
  { type: 'Rental', amount: 0, color: incomeColors[2] },
  { type: 'Other', amount: 0, color: incomeColors[3] }
];

export const expenseCategories = [
  { type: 'Grocery', amount: 0, color: expenseColors[0] },
  { type: 'Education', amount: 0, color: expenseColors[1] },
  { type: 'Entertainment', amount: 0, color: expenseColors[2] },
  { type: 'Shopping', amount: 0, color: expenseColors[3] },
  { type: 'House', amount: 0, color: expenseColors[4] },
  { type: 'Utilities', amount: 0, color: expenseColors[5] },
  { type: 'Cars', amount: 0, color: expenseColors[6] },
  { type: 'Kids', amount: 0, color: expenseColors[7] },
];

export const resetCategories = () => {
  incomeCategories.forEach((c) => c.amount = 0);
  expenseCategories.forEach((c) => c.amount = 0);
};

