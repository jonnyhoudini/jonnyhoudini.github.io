import React from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../static/Home.css';
import '../static/Projects.css';

const BBC = () => {
    return (
        <main>
            <div className="transparent-bg">
                <div className="project-container">
                    <h1 className="heading">BBC Education App</h1>
                    <p>BBCsaurus was created as a protototype for the BBC's online educational content. The app gives young people the chance to learn about all the different types of dinosaurs.</p>
                    <p>The app was created as a group project over 5 days alongside <a href="https://www.linkedin.com/in/alisdairsit/">Alisdair Sit</a> and <a href="https://www.linkedin.com/in/ian-wlodarczyk-1578498a/">Ian Wlodarczyk</a> as part of CodeClan's Professional Software Development course.</p>
                    <h2 className="heading">Project Brief</h2>
                    <ul>
                        <li>The user can interact with the flashcards to learn more about each dinosaur.</li>
                        <li>The user can add, edit and delete flashcards.</li>
                        <li>The user can play a multiple choice quiz to test their knowledge.</li>
                        <li>The user can see data about dinosaurs displayed as a chart.</li>
                        <li>Add a couple of 'Easter Eggs' to surprise the user!</li>
                    </ul>
                    <h2 className="heading">Technology</h2>
                    <ul>
                        <li>ReactJS</li>
                        <li>Express.js for building web app and API</li>
                        <li>MongoDB</li>
                        <li>Test Driven Development - Insomnia, MongoDB Compass</li>
                        <li>React Google Charts library for data visualisation</li>
                    </ul>
                    <div className="btn-container">
                        <a className="project-link" href="https://github.com/Ally288/dinosaur_react_app"><Button className="btn" variant="outline-light">Github</Button></a>

                        <Link to="/projects">
                            <Button className="btn" variant="light">BACK</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default BBC