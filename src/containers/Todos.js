import React from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../static/Home.css';
import '../static/Projects.css';

const Todos = () => {
    return (
        <main>
            <div className="transparent-bg">
                <div className="project-container">
                    <h1 className="heading">Todos</h1>
                    <p>Todos is a full-stack, mobile-first web application to help people with accessibility needs and their support workers plan fun days out in Scotland.</p>

                    <p>The app was created as my final group project over 9 days alongside <a className="codeclan-link" href="https://www.linkedin.com/in/archibald-louise/">Louise Archibald</a>, <a className="codeclan-link" href="https://www.linkedin.com/in/devan-mcclure-ba596b239/">Dev McClure</a>, <a className="codeclan-link" href="https://www.linkedin.com/in/simona-demarco/">Simona Demarco</a> and <a className="codeclan-link" href="https://www.linkedin.com/in/cameronjwils/">Cameron Wilson</a></p>
                    <h2 className="heading">Project Brief</h2>
                    <ul>
                        <li>The user can add/edit an attraction.</li>
                        <li>The user can filter attractions based on specific needs.</li>
                        <li>The user can leave reviews and star rating.</li>
                        <li>The app should comply with Web Content Accessibility Guidelines.</li>
                    </ul>
                    <h2 className="heading">Technology</h2>
                    <ul>
                        <li>ReactJS</li>
                        <li>Java 8</li>
                        <li>Spring Boot</li>
                    </ul>
                    <div className="btn-container">
                        <a className="project-link" href="https://github.com/jonnyhoudini/Todos"><Button className="btn" variant="outline-light">Github</Button></a>

                        <Link to="/projects">
                            <Button className="btn" variant="light">BACK</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Todos