import React from 'react'

// MUI Imports

// Axios Import 
import axios from "axios"

const BUDGET_API = "http://127.0.0.1:8000/api/budgets/"
let budgetList = await axios.get(BUDGET_API);
budgetList = budgetList.data

const BudgetList = () => {
  return (
    <div>BudgetList</div>
  )
}

export default BudgetList