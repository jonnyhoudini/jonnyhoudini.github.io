import React from 'react'
import "../static/Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Home = () => {

    const linkedIn = <FontAwesomeIcon icon={faLinkedin} />
    const github = <FontAwesomeIcon icon={faGithub} />
    const envelope = <FontAwesomeIcon icon={faEnvelope} />

    return (
        <>
            <main>
                <div className="transparent-bg">
                    <h1 className="header">JONNY HOUDIN MCAVEETY</h1>
                    <h2 className="intro">I'm a junior developer</h2>
                    <div className="contact">
                        <a className="icon" href="https://www.linkedin.com/in/jonathan-houdin-mcaveety-392a1153/">{linkedIn}</a>
                        <a className="icon" href="https://github.com/jonnyhoudini">{github}</a>
                        <a className="icon" href="mailto:jonny@houd.in">{envelope}</a>
                    </div>
                </div>
            </main>

        </>
    )
}

export default Home