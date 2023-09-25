//-------------------------------------------------------//
//  File Name: Dashboard.jsx
//  Description: Main Page after Login
//
//  Requirements:
//      - None
//
//  Returns:
//      - Main Page for Dashboard
//
// Created By: Corey Yang-Smith
// Date: September 25th, 2023
//-------------------------------------------------------//


//  IMPORTS
//-------------------------------------------------------//
// NA


//  MAIN FUNCTION
//-------------------------------------------------------//

const Dashboard = () => {
    const date = new Date();

    let month = date.toLocaleString('en-US', { month: 'long' }); 
    let year = date.getFullYear();
    let today = date.getDate();

    let daysInMonth =  new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();    
    let timeLeft = daysInMonth - today

    return <>
    <h1>Welcome to My Dashboard.</h1>
    <h2>{month} {today} {year}</h2>
    <h2>Days remaining: {timeLeft}</h2>    
    </>
}


//  EXPORTS
//-------------------------------------------------------//

export default Dashboard;