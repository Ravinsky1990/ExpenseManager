import React from "react";
import ExpenseListFilters from "./ExpenseListFilters";

import ExpenseList from "./ExpenseList";

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)

export default ExpenseDashboardPage;