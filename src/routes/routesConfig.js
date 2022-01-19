import PeoplePage from '../containers/PeoplePage/PeoplePage';
import HomePage from '../containers/HomePage/HomePage.jsx';
import NotFoundPage from '../containers/NotFoundPage/NotFoundPage';
import PersonPage from '../containers/PersonPage/PersonPage';
import FavoritePage from '../containers/FavoritePage/FavoritePage';
import SearchPage from '../containers/SearchPage/SearchPage';

const routesConfig = [
    {
        path: '/',
        exact: true,
        component: HomePage
    },
    {
        path: '/people',
        exact: true,
        component: PeoplePage
    },
    {
        path: '/people/:id',
        component: PersonPage
    },
    {
        path: '/favorites',
        exact: true,
        component: FavoritePage
    },
    {
        path: '/search',
        exact: true,
        component: SearchPage
    },
    {
        path: '/not-found',
        exact: true,
        component: NotFoundPage
    },
    {
        path: '*',
        exact: false,
        component: NotFoundPage
    },


]

export default routesConfig;