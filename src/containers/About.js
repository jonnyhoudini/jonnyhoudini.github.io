import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import '../static/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const About = () => {

    const linkedIn = <FontAwesomeIcon icon={faLinkedin} />
    const github = <FontAwesomeIcon icon={faGithub} />
    const envelope = <FontAwesomeIcon icon={faEnvelope} />

    return (
        <>
            <main>
                <div className="transparent-bg-about">
                    <div className="about-container">
                        <h1 className="heading">ALL ABOUT ME</h1>
                        <img className="profile" src="https://i.ibb.co/svPzC76/16908836-1083243418447036-1809830151165313024-n.jpg" alt="profile pic"></img>
                        <p>My name is Jonny and I'm a career change junior developer based in Glasgow, Scotland.</p>
                        <p>I love learning new things and working with people. I have over a decade of experience working for charities and in progressive politics where I’ve organised campaigns and lobbied senior politicians on issues like climate change, infrastructure and international development. </p>
                        <h2 className="heading">My road to code</h2>
                        <p>My passion for learning eventually led me to start teaching myself how to code and I soon fell in love with the idea of making stuff with code that can solve real problems. In May 2022 I started a 16-week full-time course in Professional Software Development at <a className="codeclan-link" href="https://codeclan.com/">CodeClan</a> - Scotland's first digital skills academy. </p>
                        <p>Turning your back on an established career and starting afresh is never an easy decision, but I'm so glad I did and I'm looking forward to continue to grow and build on all the skills I've learned over the past four months.</p>
                        <p>I'm now on the hunt for a Junior Developer role to start my new career in tech after graduation in late August.</p>
                        <h2 className="heading">Technical Skills</h2>
                        <div className="bullets">
                            <ul>
                                <li>JavaScript (front-end and back-end)</li>
                                <li>UNIX and Git</li>
                                <li>Object Oriented Programming</li>
                                <li>Test Driven Development</li>
                                <li>Database design, creation and querying using SQL</li>
                                <li>HTTP and web programming (Flask)</li>
                            </ul>
                            <ul>
                                <li>JavaScript TDD (mocha, chai)</li>
                                <li>Event-driven programming</li>
                                <li>Full-stack JavaScript apps (Express, Mongo)</li>
                                <li>Front-end web framework (React)</li>
                                <li>Statically typed programming (Java)</li>
                                <li>Web development with Java</li>

                            </ul>
                        </div>

                        <div className="contact-container">
                            <a className="icon-light-big" href="https://www.linkedin.com/in/jonathan-houdin-mcaveety-392a1153/">{linkedIn}</a>
                            <a className="icon-light-big" href="https://github.com/jonnyhoudini">{github}</a>
                            <a className="icon-light-big" href="mailto:jonny@houd.in">{envelope}</a>
                            <a className="project-link" href="https://drive.google.com/file/d/1ElOGXkxEjUDCoi1W1NhTpM2ftjkGVRIz/view?usp=sharing"><Button className="btn-CV" variant="light">My CV</Button></a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default About