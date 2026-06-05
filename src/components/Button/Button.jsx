import styles from './Button.module.css'

function Button({children, className = "", onClick, type="submit"}){

    const extraClasses = className.split(' ')
        .map(cls => styles[cls] || cls).join(' ')

    return(
        <button className={`${styles.button} ${extraClasses}`} type={type} onClick={onClick}>
            {children || <>Submit <span>&gt;</span></>} 
        </button>
    );
}

export default Button