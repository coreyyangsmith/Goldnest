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
    <h1>Account Summary</h1>
    <Stack spacing={1}>
        <h1>Spending Accounts</h1>
        {/* CHEQUINGS */}
        <Grid container>
            <Grid item xs={12}>
                <h3>My Chequings Accounts</h3>
            </Grid>
            <Grid item xs={12}>
                <ul>{myChequings}</ul>
            </Grid>
        </Grid>
        {/* SAVINGS */}
        <Grid container>
            <Grid item xs={12}>
                <h3>My Savings Accounts</h3>
            </Grid>
            <Grid item xs={12}>
                <ul>{mySavings}</ul>
            </Grid>
        </Grid>        

        <h1>Assets</h1>
        {/* ASSETS */}
        <Grid container>
            <Grid item xs={12}>
                <h3>My Assets</h3>
            </Grid>
            <Grid item xs={12}>
                <ul>{myAssets}</ul>
            </Grid>
        </Grid>   

        {/* INVESTMENTS */}
        <Grid container>
            <Grid item xs={12}>
                <h3>My Investments</h3>
            </Grid>
            <Grid item xs={12}>
                <ul>{myInvestments}</ul>
            </Grid>
        </Grid>   

        <h1>Debts</h1>
        {/* DEBTS */}
        <Grid container>
            <Grid item xs={12}>
                <h3>My Debts</h3>
            </Grid>
            <Grid item xs={12}>
                <ul>{myDebts}</ul>
            </Grid>
        </Grid>                            



    </Stack>

    <p>Last Updated:</p>
    {/* Investments */}
    </>
}

export default Accounts;