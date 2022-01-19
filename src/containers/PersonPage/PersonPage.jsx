import React, {useEffect, useState, Suspense} from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {getApiResource} from '../../utils/network';
import {getPeopleImage} from '../../services/getPeopleData';
import PersonInfo from '../../components/PersonPage/PersonInfo/PersonInfo'
import PersonPhoto from '@components/PersonPage/PersonPhoto';
import PersonLinkBack from '../../components/PersonPage/PersonLinkBack/PersonLinkBack';
import {API_PERSON} from '../../constants/api';
import {withErrorApi} from '@hoc-helpers/withErrorApi';
import styles from './PersonPage.module.css';
import UiLoading from '../../components/UI/UiLoading/UiLoading'

const PersonFilms = React.lazy(() => import('../../components/PersonPage/PersonFilms/PersonFilms'))

const PersonPage = ({match, setErrorApi}) => {
   
    const [personID, setPersonID] = useState(null);
    const [personInfo, setPersonInfo] = useState(null);
    const [personName, setPersonName] = useState(null);
    const [personPhoto, setPersonPhoto] = useState(null);
    const [personFilms, setPersonFilms] = useState(null);
    const [personFavorite, setPersonFavorite] = useState(false);

    const storeData = useSelector(state => state.favoriteReducer);


    useEffect(() => {
        (async () =>{ 
        const id = match.params.id;
        const res = await getApiResource(`${API_PERSON}/${id}/`);

        storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false);

        setPersonID(id)

        if(res) {
            setPersonInfo([
                {title: 'Height',  data: res.height},
                {title: 'Mass',  data: res.mass},
                {title: 'Hair color',  data: res.hair_color},
                {title: 'Skincolor',  data: res.skin_color},
                {title: 'Eye color',  data: res.eye_color},
                {title: 'Birth year',  data: res.birth_year},
                {title: 'Gender',  data: res.gender},
            ])

            setPersonName(res.name);
            setPersonPhoto(getPeopleImage(id));


            res.films.length && setPersonFilms(res.films)

            setErrorApi(false)
        } else {
            setErrorApi(true)
        }

        })();

    }, [])


  
    return (
        <>
            <PersonLinkBack/>


            <div className={styles.wrapper}>
                <span className={styles.person__name}>{personName}</span>
                
                <div className={styles.container}>
                    <PersonPhoto
                        personID={personID}
                        personPhoto={personPhoto}
                        personName={personName}
                        setPersonFavorite={ setPersonFavorite}
                        personFavorite= {personFavorite}
                    />

                    {personInfo && <PersonInfo personInfo={personInfo} />}
                    {personFilms && (<Suspense fallback={<UiLoading/>}>
                        <PersonFilms personFilms={personFilms}/>
                        </Suspense>)}    

                </div>


            </div>  
        </>
    )
}

PersonPage.propTypes = {
    setErrorApi: PropTypes.func,
    match: PropTypes.object,
}

export default withErrorApi(PersonPage)
