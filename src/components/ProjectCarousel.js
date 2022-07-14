import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


const ProjectCarousel = () => {

    const captionStyles = {
        color: 'rgba(62, 212, 176)',
        backgroundColor: 'black',
        padding: '2px',
    }

    return (
        <Carousel variant="dark" className="carousel">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/0KVbf7R/marko.png"
                    alt="First slide"
                />
                <Carousel.Caption style={captionStyles}>
                    <h3>Marko Expenses Tracker</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/DKWpmNh/dinosaur.png"
                    alt="Second slide"
                />

                <Carousel.Caption style={captionStyles}>
                    <h3>BBC Educational App</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/TRSyBzt/rps.png"
                    alt="Third slide"
                />

                <Carousel.Caption style={captionStyles}>
                    <h3>Rock, Paper, Scissors Game</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default ProjectCarousel