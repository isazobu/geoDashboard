import { Create, ReferenceArrayInput, ReferenceInput, SelectArrayInput, SimpleForm, TextInput } from "react-admin";

export const UserCreate = () => (

    <Create>
        <SimpleForm>
            <TextInput source="username" />
            <TextInput source="email" />
            <TextInput source="tckNo" />
            <TextInput source="password" />
            <TextInput source="passWordConfirmation" />
            <ReferenceArrayInput source="tags_ids" reference="tags">
                <SelectArrayInput />
            </ReferenceArrayInput>

        </SimpleForm>
    </Create>
);
