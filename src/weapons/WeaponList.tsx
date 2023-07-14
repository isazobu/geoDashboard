// WeaponList.js

import * as React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const WeaponList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <TextField source="type" />
      <TextField source="country" />
      <TextField source="caliber" />
      <TextField source="weight" />
      <TextField source="length" />
      <TextField source="range" />
    </Datagrid>
  </List>
);

