import { useState, useEffect } from "react";
import './imageSection.css';
import HeadingTwo from "../../components/HeadingTwo/HeadingTwo";
import PlanetCard from "../../components/PlanetCard/PlanetCard";
import MainSection from '../../components/MainSection/MainSection'

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
    <MainSection  className="image-section">
        <HeadingTwo 
          className="image-heading"
          title="Visualizing the Differences Between Planets"
          description="Each planet in our solar system has unique physical characteristics.
          Visual comparisons help highlight how vastly different terrestrial
          planets are from gas giants and ice giants."/>

        <div className="planet-grid">
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
            
            // <PlanetCard
            //   className="img-card"
            //   src={planet.image}
            //   alt={planet.planet}
            //   name={planet.planet}
            //   distance={planet.distanceFromSun}/>
          ))}
        </div>
        <figcaption className="img-figcaption">
          The Nine Planets in Our Solar System.
        </figcaption>

    </MainSection>

  );
}
 
export default ImageSection;