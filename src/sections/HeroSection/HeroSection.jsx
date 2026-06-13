import './HeroSection.css';
import MainSection from '../../components/MainSection/MainSection'

function HeroSection() {
  return (
    <MainSection className="hero-section">  
      <header className='hero-header'>
        <nav>
          <a href="logo-container">
            <img src="src/assets/logo.png" alt="Logo" />
          </a>
        </nav>
      </header>

      <section className="hero-content">

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
            <a href="#image-section-id">Explore the Data</a>
            <a className='btn-alt' href="#form-section-id">Contact Us</a>
          </div>

        </div>

        <div className="hero-image">
            <img src="src\assets\hero-planet.svg" alt="The Blue Earth" width="100px"/> 
        </div>

      </section>
    </MainSection> );           
}

export default HeroSection;