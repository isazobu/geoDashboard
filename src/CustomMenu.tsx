import { Menu } from 'react-admin';
import {MapOutlined} from '@mui/icons-material';
import AllOutIcon from '@mui/icons-material/AllOut';
export const CustomMenu = () => (
    <Menu>
        <Menu.DashboardItem />
        <Menu.ResourceItem name="users" />
        {/* <Menu.ResourceItem name="geo" /> */}
        <Menu.ResourceItem name="weapons" />
        <Menu.Item to="/geo" primaryText="Geo" leftIcon={<MapOutlined />}/>
        <Menu.Item to="/radial-menu" primaryText="Radial Menu Test" leftIcon={<AllOutIcon />} />
        <Menu.Item to="/fan-menu" primaryText="Static Fan Menu Test" leftIcon={<AllOutIcon />} />
    </Menu>
);
