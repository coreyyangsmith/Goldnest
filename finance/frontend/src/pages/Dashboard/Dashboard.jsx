const Dashboard = () => {
    const date = new Date();

    let month = date.toLocaleString('en-US', { month: 'long' }); 
    let year = date.getFullYear();
    let today = date.getDate();

    return <>
    <h1>Welcome to My Dashboard.</h1>
    <h2>{month} {today} {year}</h2>
    <h2>Days left in the month: </h2>    
    </>
}

export default Dashboard;