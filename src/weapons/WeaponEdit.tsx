
import * as React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

export const WeaponEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="type" />
      <TextInput source="country" />
      <TextInput source="caliber" />
      <TextInput source="weight" />
      <TextInput source="length" />
      <TextInput source="range" />
    </SimpleForm>
  </Edit>
);


