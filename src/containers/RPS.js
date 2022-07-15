import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../static/Home.css';
import '../static/Projects.css';

const RPS = () => {
    return (
        <main>
            <div className="transparent-bg">
                <div className="project-container">
                    <h1 className="heading">Rock, Paper, Scissors</h1>
                    <p>This was one of the solo projects I worked on when I was getting ready to join CodeClan. I have included it here to show the progress I have made since being able to dedicate myself to full-time studying.</p>
                    <h2 className="heading">Project Brief</h2>
                    <ul>
                        <li>The user can choose their weapon.</li>
                        <li>The computer plays with a randomly selected weapon.</li>
                        <li>The scores are recorded.</li>
                        <li>The first player to reach five wins is the overall winner.</li>
                    </ul>
                    <h2 className="heading">Technology</h2>
                    <ul>
                        <li>HTML and CSS</li>
                        <li>Vanilla Javascript</li>
                    </ul>
                    <div className="btn-container">
                        <a className="project-link" href="https://jonnyhoudini.github.io/RPSgame/"><Button className="btn" variant="outline-light">Live</Button></a>
                        <a className="project-link" href="https://github.com/jonnyhoudini/RPSgame"><Button className="btn" variant="outline-light">Github</Button></a>

                        <Link to="/projects">
                            <Button className="btn" variant="light">BACK</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default RPS