import './PlanetGrid.css'

function PlanetGrid({className, children}){
    return (
        <div className={`planet-grid ${className}`}>
            {children}
        </div>
    )
}

export default PlanetGrid