import { faCentercode } from '@fortawesome/free-brands-svg-icons';
import React from 'react'
import ProjectCarousel from '../components/ProjectCarousel'
import '../static/Projects.css';

const Projects = () => {

    const h1Styles = {
        fontWeight: 900,
        textAlign: 'center',
        marginBottom: '20px',
        fontSize: '4rem',
    }
    return (
        <>
            <main>
                <div className="transparent-bg">
                    <div className="carousel-container">
                        <h1 style={h1Styles}>My Projects</h1>
                        <ProjectCarousel />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Projects