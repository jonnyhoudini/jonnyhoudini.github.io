import React from 'react';
import '../static/Home.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import '../static/ProjectInfo.css';

const Marko = () => {
    return (
        <main>
            <div className="transparent-bg">
                <div className="project-container">
                    <h1 className="heading">Marko Expenses Tracker</h1>
                    <p>Marko tracks your business-related expenditure to make it easier when you need to submit an expenses claim to your employer.</p>
                    <p>The app was created as a solo project during week 5 of CodeClan's Professional Software Development course.</p>
                    <h2 className="heading">Project Brief</h2>
                    <ul>
                        <li>The app should allow the user to create and edit payees, e.g. Tesco, Amazon, ScotRail</li>
                        <li>The app should allow the user to create and edit categories for their spending, e.g. groceries, entertainment, transport</li>
                        <li>The user should be able to assign categories and payees to a transaction, as well as an amount spent on each transaction.</li>
                        <li>The app should display all the transactions a user has made in a single view, with each transaction's amount, payee and category, and a total for all transactions.</li>
                        <li>The user should be able to supply a budget, and the app should alert the user somehow when when they are nearing this budget or have gone over it.</li>
                        <li>The user should be able to filter their view of transactions, for example, to view all transactions with a given payee or category.</li>
                    </ul>
                    <h2 className="heading">Technology</h2>
                    <ul>
                        <li>Object oriented programming with Python</li>
                        <li>Test Driven Development</li>
                        <li>Web Programming - REST, MVC, HTML, CSS</li>
                        <li>Interacting with a SQLite database - CRUD</li>
                    </ul>
                    <div className="btn-container">
                        <a className="project-link" href="https://github.com/jonnyhoudini/marko_expense_tracker_project"><Button className="btn" variant="outline-light">Github</Button></a>

                        <Link to="/projects">
                            <Button className="btn" variant="light">BACK</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Marko