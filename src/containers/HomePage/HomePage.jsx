import styles from './HomePage.module.css';
import ChooseSide from '../../components/HomePage/ChooseSide/ChooseSide';


const HomePage = ()=> {
    return (
        <>
            <h1 className="header__text">Home</h1>
            <ChooseSide/>
        </>
    )
}

export default HomePage;