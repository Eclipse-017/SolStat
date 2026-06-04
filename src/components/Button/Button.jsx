import './Button.module.css'

function Button({children, className, onClick, type="submit"}){
    return(
        <button className={className} type={type} onClick={onClick}>
            {children || <>Submit <span>&gt;</span></>} 
        </button>
    );
}

export default Button