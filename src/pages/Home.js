import logo from '../logo.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Carousel.css';
import {AboutContent} from './About';
import { ProductCategoriesList } from './ProductCategories';

export const Carousel = () => {
    const settings = {
        fade: true,
        cssEase: 'ease-in',
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        lazyLoad: 'ondemand',
        responsive: [
            {
            breakpoint: 769,
            settings: {
                fade: false
                }
            }
        ]
    };

    return (
        <section className="carousel-wrapper w-full bg-gray-900">
            <Slider {...settings}>
                <div>
                    <img src={logo} alt="Banner 1" />
                    <div className='caption'><h2 className='text-center text-3xl'>Caption for banner 1</h2></div>
                </div>
                <div>
                    <img src={logo} alt="Banner 2" />
                    <div className='caption'><h2 className='text-center text-3xl'>Caption for banner 2</h2></div>
                </div>
                <div>
                    <img src={logo} alt="Banner 3" />
                    <div className='caption'><h2 className='text-center text-3xl'>Caption for banner 3</h2></div>
                </div>
            </Slider>
        </section>
    );
};

const Home = () => {
    return (
        <div id='main'>
            <Carousel/>
            <section className='product-categories-section'>
                <h2 className='text-center text-2xl font-semibold'>Product Categories</h2>
                <ProductCategoriesList/>
            </section>
            <section className='about-section'>
                <AboutContent/>
            </section>
        </div>
    );
}

export default Home;