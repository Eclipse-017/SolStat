import './MainSection.css'

function Section({className, children}){
    return(
        <section className={`main-section ${className}`}>
            {children}
        </section>
    )
}

export default Section