import { useMediaQuery } from '@mui/material';
import { List, SimpleList, Datagrid, TextField, EmailField, EditButton, DeleteButton} from 'react-admin';
import MyUrlField from '../MyUrlField';

export const UserList = () => {
    const isSmall = useMediaQuery<any>(theme => theme.breakpoints.down('sm'));
    return (
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.full_name}
                    secondaryText={record => record.username}
                    tertiaryText={record => record.roles}
                />
             
            ) : (
                <Datagrid rowClick="edit">
                    <TextField source="id" />
                    <TextField source="full_name" />
                    <TextField source="username" />
                    <EmailField source="email" />
                    <TextField source="tckNo" />
                    <EditButton />
                    <DeleteButton />
                </Datagrid>
            )}
        </List>
    );
};
