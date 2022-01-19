import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './PeopleNavigation.module.css';
import Uibutton from '../../UI/UiButton/UiButton';

const PeopleNavigation = ({getResource, prevPage, nextPage, counterPage }) => {
    const handleChanenext = () => getResource(nextPage)
    const handleChangePrev = () => getResource(prevPage)
    return (
        <div className={styles.container}>
          <Link 
            className={styles.buttons}
            to={`/people/?page=${counterPage-1}`}>
            <Uibutton
                text="Previous"
                onClick={handleChangePrev}
                disabled={!prevPage}
            />
        </Link>
          <Link 
             className={styles.buttons}
             to={`/people/?page=${counterPage+1}`}>
              <Uibutton
              text="Next"
              disabled={!nextPage}
              onClick={handleChanenext} 
              />
          </Link>
        </div>
    )
}

PeopleNavigation.propTypes = {
    getResource: PropTypes.func,
    prevPage: PropTypes.string,
    gnextPage: PropTypes.string,
    ounterPage: PropTypes.number,
}


export default PeopleNavigation
