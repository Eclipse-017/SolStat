import { useState, useEffect } from "react";
import './imageSection.css';

const ImageSection = () => {

    const [planets, setPlanets] = useState([]);

  useEffect(() => {
    async function fetchImageData() {
      try {
        let response = await fetch(
          "https://anurella.github.io/json/planets.json",
        );
        let imageData = await response.json();
        setPlanets(imageData);
      } catch (error) {
        console.error("Error fetching image data:", error);
      }
    }
    fetchImageData();
  }, []);

  return (
    <div>
      <section className="img-section">
        <h2 className="img-header">
          Visualizing the Differences Between Planets
        </h2>
        <p className="img-description">
          Each planet in our solar system has unique physical characteristics.
          Visual comparisons help highlight how vastly different terrestrial
          planets are from gas giants and ice giants.
        </p>
        <div className="planet-container">
          {planets.map((planet, index) => (
            <figure
              key={index} className="img-card"
            >
                  <img
                  src={planet.image}
                  alt={planet.planet}
                  className="planet-img"
                
                />
              <div className="planet-details">
                <div>Planet name: {planet.planet}</div>
                <div>Distance from Sun: {planet.distanceFromSun}</div>
              </div>
            </figure>
          ))}
        </div>
        <figcaption>
          The Nine Planets in Our Solar System.
        </figcaption>
      </section>
    </div>

    );
}
 
export default ImageSection;