import { useLocation } from 'react-router';
import styles from './NotFoundPage.module.css';
import img from './img/not-found.png';

const NotFoundPage = () => {
    let location = useLocation();


    return (
        <div>
            <>
                <img className={styles.img} src={img} alt="Not Found"/>
                <p className={styles.text}>No match for <u>{location.pathname}</u></p>
            </>
        </div>
    )
}

export default NotFoundPage
