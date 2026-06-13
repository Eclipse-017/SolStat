import { useState, useEffect } from "react";
import './ImageSection.css';
import HeadingTwo from "../../components/HeadingTwo/HeadingTwo";
import PlanetCard from "../../components/PlanetCard/PlanetCard";
import PlanetGrid from "../../components/PlanetGrid/PlanetGrid";
import MainSection from '../../components/MainSection/MainSection';

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
    <MainSection  className="image-section" id="image-section-id" aria-label="Planetary Gallery and Visual Statistics">
        <HeadingTwo 
          className="image-heading"
          title="Visualizing the Differences Between Planets"
          description="Each planet in our solar system has unique physical characteristics.
          Visual comparisons help highlight how vastly different terrestrial
          planets are from gas giants and ice giants."/>
          
        <PlanetGrid aria-label="Planets of our Solar System">
          {
            planets.map((planet, index) => (
              <PlanetCard index={index}
              src={planet.image} 
              alt={`Visual profile of the planet ${planet.planet}`}
              name={planet.planet}
              distance={planet.distanceFromSun}
              role="listitem"
              />
            ))
          }
        </PlanetGrid>

    </MainSection>

  );
}
 
export default ImageSection;