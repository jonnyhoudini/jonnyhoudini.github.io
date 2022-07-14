import React from 'react'
import ProjectCarousel from '../components/ProjectCarousel'
import '../static/Projects.css';

const Projects = () => {

    const h1Styles = {
        fontWeight: 900,
        marginTop: '30px',
    }
    return (
        <>
            <main>
                <div className="transparent-bg">
                    <h1 style={h1Styles}>My Projects</h1>
                    <ProjectCarousel />
                </div>
            </main>
        </>
    )
}

export default Projects