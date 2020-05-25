import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel
            activeIndex={index}
            direction={direction}
            onSelect={handleSelect}
            interval={3500}
        >
            <Carousel.Item>
                <img
                    src={`/images/carousel/0.jpg`}
                    className="d-block cImage"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={`/images/carousel/1.jpg`}
                    className="d-block cImage"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={`/images/carousel/2.jpg`}
                    className="d-block cImage"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={`/images/carousel/3.jpg`}
                    className="d-block cImage"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={`/images/carousel/4.jpg`}
                    className="d-block cImage"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={`/images/carousel/5.jpg`}
                    className="d-block cImage"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={`/images/carousel/6.jpg`}
                    className="d-block cImage"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={`/images/carousel/7.jpg`}
                    className="d-block cImage"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={`/images/carousel/8.jpg`}
                    className="d-block cImage"
                />
            </Carousel.Item>
        </Carousel>
    );
}