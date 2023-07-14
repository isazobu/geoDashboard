import { Identifier, RaRecord } from 'react-admin';


export interface Weapon extends RaRecord{
    id: Identifier;
    name: string;
    type: string;
    country: string;
    caliber: string;
    weight: string;
    length: string;
    range: string;
  }
  


export interface geoPolygon {
    id: number;
    name: string;
    points: [number, number][];
    date: string;
    type: string;
  }
  
export interface Folder {
    id: number;
    name: string;
    date: string;
    children: Folder[] | geoPolygon[];
  }