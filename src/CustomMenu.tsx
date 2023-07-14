import { Menu } from 'react-admin';
import {MapOutlined} from '@mui/icons-material';

export const CustomMenu = () => (
    <Menu>
        <Menu.DashboardItem />
        <Menu.ResourceItem name="users" />
        {/* <Menu.ResourceItem name="geo" /> */}
        <Menu.ResourceItem name="weapons" />
        <Menu.Item to="/geo" primaryText="Geo" leftIcon={<MapOutlined />}/>
    </Menu>
);