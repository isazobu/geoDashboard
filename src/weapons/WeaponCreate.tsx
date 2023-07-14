// WeaponCreate.js

import * as React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

export const WeaponCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="type" />
      <TextInput source="country" />
      <TextInput source="caliber" />
      <TextInput source="weight" />
      <TextInput source="length" />
      <TextInput source="range" />
    </SimpleForm>
  </Create>
);

