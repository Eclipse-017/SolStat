import styles from './MainSection.module.css'

function Section({className='', children}){
    const classes = className.split(' ')
        .map(cls => styles[cls] || cls).join(' ');

    return(
        <section className={`${styles['main-section']} ${classes}`}>
            {children}
        </section>
    )
}

export default Section