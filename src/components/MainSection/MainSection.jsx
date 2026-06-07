import './MainSection.css'

function MainSection({className="", children}){
    return(
        <section className={`main-section ${className}`}>
            {children}
        </section>
    )
}

export default MainSection