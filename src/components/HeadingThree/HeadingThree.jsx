import styles from './HeadingThree.module.css'

function HeadingTwo({className = "", title, description}){

    const classes = className.split(' ')
        .map(cls => styles[cls] || cls).join(' ')

    return(
        <div className={`${styles['heading-container']} ${classes}`}>
            <h3 className={styles['section-heading']}>{title || "Heading Three"}</h3>
            {description && <p className={styles['section-description']}>{description}</p>}
        </div>
    );
}

export default HeadingTwo