import './MainSection.css'

function MainSection({className, children, id, ...props}){
    return(
        <section id={id} className={`main-section ${className}`} {...props}>
            {children}
        </section>
    )
}

export default MainSection;