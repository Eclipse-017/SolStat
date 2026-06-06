import styles from './HeadingTwo.module.css'

function HeadingTwo({className = "", title, description}){

    const classes = className.split(' ')
        .map(cls => styles[cls] || cls).join(" ")

    return(
        <div className={`${styles['heading-container']} ${classes}`}>
            <h2 className={styles['section-heading']}>{title || "Heading Two"}</h2>
            {description && <p className={styles['section-description']}>{description}</p>}
        </div>
    );
}

export default HeadingTwo