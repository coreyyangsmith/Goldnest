import { Grid, Stack } from "@mui/material/";
import { useState, useEffect } from "react";
// React Imports


// Axios Import
import axios from "axios";


{/* [ACCOUNTS] will be the place where you can track your net worth and update new accounts.
    This data will be fed into your dashboard and reports section.
    Accounts may consist of:
    - Chequings/Savings accounts
    - Investment Accounts (Stock, potentially dividends, HISA, GICs, other fixed incomes)
    - Other Assets that contribute to NW
    
    - This being said, when you create new entries, they will not be tied to accounts, in fact
    entries will only be tied to your budget and serve as an I/O summary. They will essentially
    be two separate aspects of your finance (Macro vs Micro)
    
    */}

const ACCOUNTS_API_URL = "http://127.0.0.1:8000/api/accounts/"




const Accounts = () => {

    const [accounts, setAccounts] = useState([])

    const fetchUserData = () => {
        fetch(ACCOUNTS_API_URL)
            .then(response => {
                return response.json()
                })
            .then(data => {
                setAccounts(data);
            })
    }
      
    useEffect(() => {
      fetchUserData()
    }, [])

    const myAccounts = accounts.map(account => {
        return <li>{account.name}</li>
    })

    const chequings = accounts.filter((account) => account.account_type === "CHEQUING");
    const myChequings = chequings.map(account => {
        return <li>{account.name}</li>
    })

    const savings = accounts.filter((account) => account.account_type === "SAVING");
    const mySavings = savings.map(account => {
        return <li>{account.name}</li>
    })
    
    const investments = accounts.filter((account) => account.account_type === "INVESTMENT");
    const myInvestments = investments.map(account => {
        return <li>{account.name}</li>
    })    

    const assets = accounts.filter((account) => account.account_type === "ASSET");
    const myAssets = assets.map(account => {
        return <li>{account.name}</li>
    })  
    
    const debts = accounts.filter((account) => account.account_type === "DEBT");
    const myDebts = debts.map(account => {
        return <li>{account.name}</li>
    })         

    return <>
    <Stack>

    </Stack>

    <h1>Account Summary</h1>
    {/* name, account_type, curr_bal, rate
        start_term, end_term, entity, created_at, updated_at */}
    <ul>{myAccounts}</ul>

    <h2>My Chequings Accounts</h2>
    <ul>{myChequings}</ul>

    <h2>My Savings Account</h2>
    <ul>{mySavings}</ul>

    <h2>My Investments</h2>
    <ul>{myInvestments}</ul>

    <h2>Other Assets</h2>
    <ul>{myAssets}</ul>

    <h2>Debts</h2>
    <ul>{myDebts}</ul>

    <p>Last Updated:</p>
    {/* Investments */}
    </>
}

export default Accounts;