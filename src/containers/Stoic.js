import React from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../static/Home.css';
import '../static/Projects.css';

const Stoic = () => {
    return (
        <main>
            <div className="transparent-bg">
                <div className="project-container">
                    <h1 className="heading">Stoic Quotes</h1>
                    <p>This is a random quote generator which pulls data from the <a className="codeclan-link" href="https://stoicquotesapi.com/">Stoic Quotes API.</a> This was a personal project to practice using REST APIs in React web apps.</p>
                    <h2 className="heading">Project Brief</h2>
                    <ul>
                        <li>The user can generate a new quote.</li>
                        <li>The user can tweet their favourite quote.</li>

                    </ul>
                    <h2 className="heading">Technology</h2>
                    <ul>
                        <li>React</li>
                        <li>REST API</li>
                        <li>npm packages</li>
                    </ul>
                    <div className="btn-container">
                        <a className="project-link" href="https://houd.in/stoic_quotes_api/"><Button className="btn" variant="outline-light">Live</Button></a>
                        <a className="project-link" href="https://github.com/jonnyhoudini/stoic_quotes_api"><Button className="btn" variant="outline-light">Github</Button></a>

                        <Link to="/projects">
                            <Button className="btn" variant="light">BACK</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Stoic