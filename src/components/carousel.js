import React from 'react'
import Link from 'gatsby-link'
import Slider from "react-slick"

class Carousel extends React.Component {
    render() {
        var settings = {
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 1000,
            infinite: true,
            fade: true,
            speed: 4000,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings}>
                <div>
                    <div style={{ backgroundImage: "url(/carousel/1.jpg)", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: "100vw", height: "100vh" }}>

                    </div>
                </div>
                <div >
                    <div style={{ backgroundImage: "url(/carousel/2.jpeg)", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: "100vw", height: "100vh" }}>

                    </div>

                </div>
                <div >
                    <div style={{ backgroundImage: "url(/carousel/3.jpg)", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: "100vw", height: "100vh" }}>

                    </div>
                </div>
                <div>
                    <div style={{ backgroundImage: "url(/carousel/4.jpg)", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: "100vw", height: "100vh" }}>

                    </div>
                </div>
                <div>
                    <div style={{ backgroundImage: "url(/carousel/5.jpg)", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: "100vw", height: "100vh" }}>

                    </div>
                </div>
            </Slider>
        );
    }
}

export default Carousel
