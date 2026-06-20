import './HeroSection.css';

import { Link } from 'react-scroll';

import MainSection from '../../components/MainSection/MainSection'
import logo from '../../assets/logo.png';
import heroPlanet from '../../assets/hero-planet.svg';

function HeroSection() {
    return (
        <MainSection className="hero-section">  
            <header className='hero-header'>
                <nav aria-label="Main Navigation">
                    <a href="/" className="logo-container" aria-label="Go to homepage">
                        <img src={logo} alt="Solar Statistics Logo"/>
                    </a>
                </nav>
            </header>

            <section className="hero-content" aria-label="Introduction">

                <div className="hero-info">

                    <h1>
                        Explore Our Solar System Through Data
                    </h1>

                    <p>
                        Understand the planets not just by name, but by measurable
                        facts. From size and mass to gravity and density, this page
                        breaks down the solar system in a clear, data-driven way.
                    </p>

                    <div className="buttons">
                        <Link to="image-section-id" spy={true} smooth={true} duration={500} aria-label="Explore the planetary data gallery">Explore the Data</Link>
                        <Link to="form-section-id" smooth={true} duration={1200} className='btn-alt' aria-label="Scroll to contact inquiry form">Contact Us</Link>
                    </div>

                </div>

                <div className="hero-image">
                    <img 
                        src={heroPlanet} 
                        alt="Illustrated rendering of Earth showing the continents and oceans" 
                        width="100"
                    /> 
                </div>

            </section>
        </MainSection> );          
}

export default HeroSection;