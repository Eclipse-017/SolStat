import './HeroSection.css';

function HeroSection() {
  return (
    <>

    
      {/* HEADER */}
      <header>
        <nav className="navigation">
          <div className="logo">
            <img src="src/assets/graphics.png" alt="Logo" /> 
          </div>
        </nav>
      </header>

      {/* HERO SECTION */}
      <main>
        <section className="hero-section">

          <div className="hero-content">
            <h1>
              Explore Our Solar System<br />
              Through Data
            </h1>
            <p>
              Understand the planets not just by name, but by measurable
              facts. From size and mass to gravity and density, this page
              breaks down the solar system in a clear, data-driven way.
            </p>

            <div className="buttons">
              <button type="button" className="btn-primary">Explore the Data</button>
              <button type="button" className="btn-secondary">Contact Us</button>
            </div>
          </div>

          <div className="hero-image">
            <img src="src/assets/heroimage.png" alt="The Blue Earth" /> 
          </div>

        </section>
      </main>
    </> );           
}

export default HeroSection;