import React from "react";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpensesSummary from "./ExpensesSummary";

import ExpenseList from "./ExpenseList";

const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSummary />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)

export default ExpenseDashboardPage;