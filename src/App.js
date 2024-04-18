import React, { Component, useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter as Router, redirect } from 'react-router-dom';
// import Nav from './components/Nav';
import Landing from './views/Landing';
// import SignUp from './views/Signup';
// import Login from './views/Login';
import Home from './views/Home';
// import Budget from './views/Budget';



export default function App() {
    // const getUserFromLocalStorage = () => {
    //     const foundUser = localStorage.getItem('user107')
    //     if (foundUser){
    //         return JSON.parse(foundUser)
    //     }
    //     return {}
    // };

    // const logMeIn = (user) => {
    //         setUser(user);
    //         localStorage.setItem('user107', JSON.stringify(user))
    //     };
    // const logMeOut = () => {
    //     setUser({});
    //     localStorage.removeItem('user107')
    // };

    // const showMessage = () => {
    //     return messages.map(m => <p>{m}</p>)
    // }

    // const [user, setUser] = useState(getUserFromLocalStorage());
    // const [messages, setMessages] = useState([]);
    // const [paychecks, setPaychecks] = useState([]);
    // const [bills, setBills] = useState([]);
    // const [leftOver, setLeftOver] = useState('');


    // const handleAddPaycheck = () => {
    //     const newPaycheck = { title: '', amount: '', trans_date: '' };
    //     setPaychecks([...paychecks, newPaycheck]);
    //     console.log('Paycheck added:', paychecks);
    // };

    // const handleAddBill = () => {
    //     const newBill = { title: '', amount: '', trans_date: '' };
    //     setBills([...bills, newBill]);
    //     console.log('Bill added:', bills);
    // };

    // const totalIncome = paychecks.reduce(
    //     (accumulator, paycheck) => accumulator + Number(paycheck.amount),
    //     0
    //   );

    //   const totalBills = bills.reduce(
    //     (accumulator, bill) => accumulator + Number(bill.amount),
    //     0
    //   );

    // const calculateLeftOver = () => {
    //     return totalIncome - totalBills;
    // };


    // useEffect(() => {
    //     const fetchPaychecks = async () => {
    //       try {
    //         const response = await fetch(`http://localhost:5000/api/budget/paychecks`, {
    //           headers: {
    //             Authorization: `Bearer ${user.apitoken}`,
    //           },
    //         });
    //         const data = await response.json();
    //         if (data.paychecks) {
    //           setPaychecks(data.paychecks);
    //         }
    //       } catch (error) {
    //         console.error(error);
    //       }
    //     };
    //     fetchPaychecks();
    //   }, [user]);

    // useEffect(() => {
    // const fetchBills = async () => {
    //     try {
    //     const response = await fetch(`http://localhost:5000/api/budget/bills`, {
    //         headers: {
    //         Authorization: `Bearer ${user.apitoken}`,
    //         },
    //     });
    //     const data = await response.json();
    //     if (data.bills) {
    //         setBills(data.bills);
    //     }
    //     } catch (error) {
    //     console.error(error);
    //     }
    // };
    // fetchBills();
    // }, [user]);


    return (
        <Router>
            <div style={{ backgroundColor: '#e6e6fa' }}>
                {/* <Nav user={user} logMeOut={logMeOut} />
                {showMessage()} */}

                    <Routes>
                        <Route path='/' element={<Landing />} />
                        {/* <Route path='/budget' element={<Budget user={user} paychecks={paychecks} setPaychecks={setPaychecks} bills={bills} setBills={setBills} setLeftOver={setLeftOver} calculateLeftOver={calculateLeftOver} handleAddPaycheck={handleAddPaycheck} handleAddBill={handleAddBill}/>} /> */}
                        <Route path='/Home' element={<Home />} /> 
                        {/* totalIncome={totalIncome} totalBills={totalBills} paychecks={paychecks} bills={bills} */}
                        {/* <Route path='/signup' element={<SignUp />} />
                        <Route path='/login' element={<Login logMeIn={logMeIn}/>} />
                        <Route path='/posts/:postId' element={<SinglePost user={user}/>} />
                        <Route path='/posts/update/:postId' element={<UpdatePost user={user}/>} />
                        <Route path='/posts/create' element={<CreatePost user={user}/>} /> */}
                    </Routes>


            </div>
        </Router>
    )

}
