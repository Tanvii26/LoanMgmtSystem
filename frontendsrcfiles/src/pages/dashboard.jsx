// import React, { useEffect, useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import './dashboard.css';

// function Dashboard({ user }) {
//     const [approvedHomeLoans, setApprovedHomeLoans] = useState([]);
//     const [pendingHomeLoans, setPendingHomeLoans] = useState([]);
//     const [approvedPersonalLoans, setApprovedPersonalLoans] = useState([]);
//     const [pendingPersonalLoans, setPendingPersonalLoans] = useState([]);

//     useEffect(() => {
//         const fetchLoanData = async () => {
//             try {
//                 // Fetching home loans
//                 const homeLoanResponse = await fetch(`/appliedhomeloans/${user.email}`);
//                 const homeLoanDataList = await homeLoanResponse.json();

//                 const approvedHome = homeLoanDataList.filter(loan => loan.status === 'approved');
//                 const pendingHome = homeLoanDataList.filter(loan => loan.status === 'pending');
//                 setApprovedHomeLoans(approvedHome);
//                 setPendingHomeLoans(pendingHome);

//                 // Fetching personal loans
//                 const personalLoanResponse = await fetch(`/appliedpersonalloans/${user.email}`);
//                 const personalLoanDataList = await personalLoanResponse.json();

//                 const approvedPersonal = personalLoanDataList.filter(loan => loan.status === 'approved');
//                 const pendingPersonal = personalLoanDataList.filter(loan => loan.status === 'pending');
//                 setApprovedPersonalLoans(approvedPersonal);
//                 setPendingPersonalLoans(pendingPersonal);
//             } catch (error) {
//                 console.error("Error fetching loan data:", error);
//             }
//         };

//         fetchLoanData();
//     }, [user.email]);

//     return (
//         <div className='dashboard'>
//             <div className="upper">
//                 <div className="topbar">
//                     <div className="nav">
//                         <div className="nav-left">
//                             SwiftCash
//                         </div>
//                         <div className="nav-right">
//                             <ul className="nav-lis">
//                                 <li className="item">About</li>
//                                 <li className="item">
//                                     <NavLink to="/home-loan">
//                                         Home Loan
//                                     </NavLink>
//                                 </li>
//                                 <li className="item">
//                                     <NavLink to="/personal-loan">
//                                         Personal Loan
//                                     </NavLink>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//                 <img className='img' src="https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151034097.jpg?t=st=1720287094~exp=1720290694~hmac=8e6f5125dd0f38e287e67fec0931bb48c44c58e13309792fd6526279b8718efb&w=740" alt="" />
//             </div>

//             <div className="lower">
//                 <h2 className='user'>Name</h2>
//                 <div className="loan-section">
//                     <h3>Approved Home Loans</h3>
//                     <ul>
//                         {approvedHomeLoans.map((loan, index) => (
//                             <li key={index}>{JSON.stringify(loan)}</li>
//                         ))}
//                     </ul>
//                     <h3>Pending Home Loans</h3>
//                     <ul>
//                         {pendingHomeLoans.map((loan, index) => (
//                             <li key={index}>{JSON.stringify(loan)}</li>
//                         ))}
//                     </ul>
//                 </div>
//                 <div className="loan-section">
//                     <h3>Approved Personal Loans</h3>
//                     <ul>
//                         {approvedPersonalLoans.map((loan, index) => (
//                             <li key={index}>{JSON.stringify(loan)}</li>
//                         ))}
//                     </ul>
//                     <h3>Pending Personal Loans</h3>
//                     <ul>
//                         {pendingPersonalLoans.map((loan, index) => (
//                             <li key={index}>{JSON.stringify(loan)}</li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Dashboard;

import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './dashboard.css';

function Dashboard({ user }) {
    const [userName, setUserName] = useState('');
    const [approvedHomeLoans, setApprovedHomeLoans] = useState([]);
    const [pendingHomeLoans, setPendingHomeLoans] = useState([]);
    const [approvedPersonalLoans, setApprovedPersonalLoans] = useState([]);
    const [pendingPersonalLoans, setPendingPersonalLoans] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`/getusername/${user.email}`);
                const userData = await response.json();
                setUserName(userData.username);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        const fetchLoanData = async () => {
            try {
                // Fetching home loans
                const homeLoanResponse = await fetch(`/appliedhomeloans/${user.email}`);
                const homeLoanDataList = await homeLoanResponse.json();

                const approvedHome = homeLoanDataList.filter(loan => loan.status === 'approved');
                const pendingHome = homeLoanDataList.filter(loan => loan.status === 'pending');
                setApprovedHomeLoans(approvedHome);
                setPendingHomeLoans(pendingHome);

                // Fetching personal loans
                const personalLoanResponse = await fetch(`/appliedpersonalloans/${user.email}`);
                const personalLoanDataList = await personalLoanResponse.json();

                const approvedPersonal = personalLoanDataList.filter(loan => loan.status === 'approved');
                const pendingPersonal = personalLoanDataList.filter(loan => loan.status === 'pending');
                setApprovedPersonalLoans(approvedPersonal);
                setPendingPersonalLoans(pendingPersonal);
            } catch (error) {
                console.error("Error fetching loan data:", error);
            }
        };

        fetchUserData();
        fetchLoanData();
    }, [user.email]);

    const renderLoanSection = (title, loans) => {
        return (
            <div className="loan-section">
                <h4>{title}</h4>
                <div className="card-container">
                    {loans.map((loan, index) => (
                        <div className="loancard" key={index}>
                            <p>Loan ID: {loan.id}</p>
                            <p>{loan.type === 'home' ? 'Home Loan' : 'Personal Loan'}</p>
                            {/* <p>Status: {loan.status}</p> */}
                            {/* Render additional details here based on your loan data */}
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className='dashboard'>
            <div className="upper">
                <div className="topbar">
                    <div className="nav">
                        <div className="nav-left">
                            SwiftCash
                        </div>
                        <div className="nav-right">
                            <ul className="nav-lis">
                                <li className="item">About</li>
                                <li className="item">
                                    <NavLink to="/home-loan">
                                        Home Loan
                                    </NavLink>
                                </li>
                                <li className="item">
                                    <NavLink to="/personal-loan">
                                        Personal Loan
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <img className='img' src="https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151034097.jpg?t=st=1720287094~exp=1720290694~hmac=8e6f5125dd0f38e287e67fec0931bb48c44c58e13309792fd6526279b8718efb&w=740" alt="" />
            </div>

            <div className="lower">
                <h2 className='user'>Welcome, {userName}</h2>
                <div className="loans">
                    {renderLoanSection('Approved Loan', [...approvedHomeLoans, ...approvedPersonalLoans])}
                    {renderLoanSection('Pending Loan', [...pendingHomeLoans, ...pendingPersonalLoans])}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
