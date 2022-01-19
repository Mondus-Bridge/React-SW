import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import styles from './FavoritePage.module.css';
import PeopleList from '../../components/PeoplePage/PeopleList/PeopleList';



const FavoritePage = () => {

    const [people, setPeople] = useState([]);

    const storeData = useSelector(state => state.favoriteReducer);

    useEffect(() => {
       const arr =  Object.entries(storeData);

      if (arr.length) {
        const res = arr.map(item => {
          return {
            id: item[0],
            ...item[1]
          }
        });


        setPeople(res);
      }

    }, []);

    return (
        <>
          <h1 className={styles.header__text}>FavoritePage</h1> 
          {people.length ? <PeopleList people={people}/> : <h2 className={styles.comment}>No Data</h2> }
          
        </>
    )
}

export default FavoritePage
