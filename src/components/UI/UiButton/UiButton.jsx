import PropTypes from "prop-types";
import cn from "classnames";
import styles from './UiButton.module.css'

const Uibutton = ({text, onClick, disabled, theme='dark'}) => {
    return (
        <button 
        onClick={onClick} 
        disabled={disabled}
        className={cn(styles.button, styles[theme])}>{text}</button>

    )
}

Uibutton.propTypes = {
    text: PropTypes.string, 
    onClick: PropTypes.func, 
    disabled: PropTypes.bool,
    theme: PropTypes.string,

}



export default Uibutton
