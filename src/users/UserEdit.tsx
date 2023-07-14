import {
    Edit,
    SimpleForm,
    ReferenceInput,
    TextInput,

} from 'react-admin';


import { UserTitle } from './UserTitle'; 
export const UserEdit = () => (
    <Edit title={<UserTitle />}>
        <SimpleForm>
            <TextInput source="id" disabled />
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="full_name" />
            <TextInput source="username" />
            <TextInput source="email" />
            <TextInput source="tckNo" />
            <TextInput source="password" />
        </SimpleForm>
    </Edit>
);