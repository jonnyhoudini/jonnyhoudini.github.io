import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import '../static/Carousel.css'


const ProjectCarousel = () => {


    // const handleClick = () => {
    //     setSelectMarko(!selectMarko);
    // }

    return (
        <Carousel variant="light" className="carousel">

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/0KVbf7R/marko.png"
                    alt="First slide"
                />
                <Carousel.Caption className="outer-caption">
                    <Link to="/Marko" className="link">
                        <h3>Marko Expenses Tracker</h3>
                        <p>Tracks business-related expenditure for busy professionals</p>
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/DKWpmNh/dinosaur.png"
                    alt="Second slide"
                />

                <Carousel.Caption className="outer-caption">
                    <Link to="/BBC" className="link">
                        <h3>BBC Educational App</h3>
                        <p>App to help teach young children about dinosaurs</p>
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    // src="https://i.ibb.co/7QppmzY/stoic.png"
                    src="https://i.ibb.co/ZBjxrSZ/Todospic.png"
                    alt="Todos app"
                />
                <Carousel.Caption className="outer-caption">
                    <Link to="/Todos" className="link">
                        <h3>Todos</h3>
                        <p>Plan accessible day trips across Scotland</p>
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/TRSyBzt/rps.png"
                    alt="Third slide"
                />

                <Carousel.Caption className="outer-caption">
                    <Link to="/RPS" className="link">
                        <h3>Rock, Paper, Scissors</h3>
                        <p>
                            Classic game with simple UI
                        </p>
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/7QppmzY/stoic.png"
                    alt="Stoic quotes app"
                />
                <Carousel.Caption className="outer-caption">
                    <Link to="/Stoic" className="link">
                        <h3>Stoic Quotes</h3>
                        <p>Words of wisdom from the ancient Stoic philosophers.</p>
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    )
}

export default ProjectCarousel