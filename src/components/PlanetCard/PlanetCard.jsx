import './PlanetCard.css'


function PlanetCard({className, src, alt, name, index, distance, ...props}){
    return (
        <div className={`planet-card ${className}`}>
            <figure key={index} className='planet-figure' {...props}>
                <div className='planet-image-container'>
                    <img src={src} className='planet-image'
                        alt={alt || "Planet Card with planet information"} />
                </div>

                <figcaption className="planet-info">
                    <div className='planet-info-group'>
                        <span className='planet-info-tag'>Planet Name</span>
                        <h3 className='planet-name'>{name}</h3>
                    </div>
                     
                    <div className='planet-info-group'>
                        <span className='planet-info-tag'>Distance From Sun</span>
                        <p className='planet-distance'>{distance}</p>
                    </div>
                </figcaption>
            </figure>
        </div>
    )
}   

export default PlanetCard