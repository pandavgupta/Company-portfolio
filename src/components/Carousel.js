import React from 'react';
import {Carousel} from 'react-bootstrap';
import slideOneImage from '../Images/jason-leung-tOE_YF0J6fI-unsplash.jpg'
import slideTwoImage from '../Images/mos-design-v85M3tOsdg4-unsplash.jpg'
import slideThreeImage from '../Images/rory-mckeever-M-d1qoOMHmA-unsplash.jpg'

function imageCarousel(){
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slideOneImage}
                alt="First slide"
                />
                <Carousel.Caption className="carousel-caption">
                <h2>First slide label</h2>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slideTwoImage}
                alt="Second slide"
                />
                <Carousel.Caption className="carousel-caption">
                <h2>Second slide label</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slideThreeImage}
                alt="Third slide"
                />
                <Carousel.Caption className="carousel-caption">
                <h2>Third slide label</h2>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
    </Carousel>
    );
}
export default imageCarousel;