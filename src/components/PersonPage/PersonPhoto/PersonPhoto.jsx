import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {setPersonToFavorite, removePersonFromFavorite } from '@store/actions'
import styles from './PersonPhoto.module.css';
import iconFavorite from './img/favorite.svg';
import iconFavoriteFill from './img/favorite-fill.svg';

const state = {
    1: {
        name: '',
        img: ''
    }
}

const PersonPhoto = ({ personID, personPhoto, personName, setPersonFavorite, personFavorite}) => {
    const dispatch = useDispatch();

    const dispatchFavoritePeople = () => {
        if (personFavorite) {
            dispatch(removePersonFromFavorite(personID));
            setPersonFavorite(false);
        } else {
            dispatch(setPersonToFavorite({
                [personID]: {
                    name: personName,
                    img: personPhoto
                }
            }));
            setPersonFavorite(true);
        }
    }

    return (
        <>
            <div className={styles.container}>
                <img className={styles.photo} src={personPhoto} alt={personName} />
                <img
                src={personFavorite ? iconFavoriteFill : iconFavorite}
                onClick={dispatchFavoritePeople}
                className={styles.favorite}
                alt="Add to favorite"
                />
            </div> 


        </>
    )
}




PersonPhoto.propTypes = {
    personID: PropTypes.string,
    personPhoto: PropTypes.string,
    personName: PropTypes.string,
    setPersonFavorite: PropTypes.func, 
    personFavorite: PropTypes.bool,
}

export default PersonPhoto;