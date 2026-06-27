import styles from './Button.module.css'

function Button({children, className = "", onClick, type="submit", altBtn, ...props}){

    const classes = className.split(' ')
        .map(cls => styles[cls] || cls).join(' ')

    return(
        <button className={`btn-ui ${styles.button} ${classes}`} type={type} onClick={onClick} {...props}>
            {children || <>Submit <span>&gt;</span></>} 
        </button>
    );
}

export default Button