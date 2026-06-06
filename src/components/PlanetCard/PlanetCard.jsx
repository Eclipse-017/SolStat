import './PlanetCard.css'


function PlanetCard({className, src, alt, name, index, distance}){
    return (
        <div className={`planet-card ${className}`}>
            <figure key={index} className='planet-figure'>
                <div className='planet-image-container'>
                    <img src={src} className='planet-image'
                        alt={alt || "Planet Card with planet information"} />
                </div>

                <figcaption className="planet-info">
                    <h3 className='planet-name'>{name}</h3>
                    <p className='planet-distance'>{distance}</p>
                </figcaption>
            </figure>
        </div>
    )
}   

export default PlanetCard