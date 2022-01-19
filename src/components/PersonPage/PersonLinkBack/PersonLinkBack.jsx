import { useHistory } from 'react-router';
import iconBack from './img/back.svg'
import styles from './PersonLinkBack.module.css';


const PersonLinkBack = () => {
    const history = useHistory();
    const handeleGoBack = e => {
        e.preventDefault(); 
        history.goBack();
    }
    return (
        <>
         <a
            href="#"
            onClick={handeleGoBack}
            className={styles.link}
         >
            <img src={iconBack} className={styles.link__img} alt="Go back"/>
             <span>Go Back</span>
         </a> 
        </>
    )
}

export default PersonLinkBack
