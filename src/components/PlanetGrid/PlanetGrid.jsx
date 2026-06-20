import './PlanetGrid.css'

function PlanetGrid({className, children, ...props}){
    return (
        <div className={`planet-grid ${className}`} {...props}>
            {children}
        </div>
    )
}

export default PlanetGrid