import { Admin, CustomRoutes, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { PostList, PostEdit, PostCreate } from './posts';
import users from './users';
import { Dashboard } from './Dashboard';
import { authProvider } from './authProvider';

import weapons from './weapons';
import VisitorList from './geo/GeoList';
import ControlledTreeView from './ControlledTreeView';
import { Route } from "react-router-dom";
import PolygonScreen from './screens/PolygonScreen';
import { TreeEdit } from './components/TreeEdit';
import { PolygonCreate } from './polygons/PolygonCreate';
import { Provider } from 'react-redux'
import { Counter } from './features/counter/Counter';
import { store } from './store/store';
import GeoPolygonScreen from './features/geoPolygon/GeoPolygon';
import PolyScreen from './screens/PolygonScreen';
const dataProvider = jsonServerProvider('http://localhost:3001');
import {CustomLayout} from './CustomLayout'
import RadialMenu from './components/RadialMenu';
import FanMenu from './components/FanMenu';
const App = () => (
    <Provider store={store}>

    <Admin
        title="Havelsan"
        authProvider={authProvider}
        dataProvider={dataProvider}
        dashboard={Dashboard}
        layout={CustomLayout}

    >
        {/* <Resource
            name="geo"
            
        /> */}
        <Resource
            name="users"
            {...users}
            recordRepresentation="name"
        />
        <Resource
            name="weapons"
            {...weapons}
            icon={RocketLaunchIcon}    
        />
        

        <CustomRoutes>
        {/* <Route path="/settings" element={<Counter />} /> */}

        <Route path="/geo" element={<GeoPolygonScreen />} />



        <Route path='/radial-menu' element={<RadialMenu  />} />
        <Route path='/fan-menu' element={<FanMenu />} />
        </CustomRoutes>

    </Admin>
    </Provider>
);

export default App;
