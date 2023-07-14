import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { geoPolygon } from '../../types';


interface TreeNode {
  id: string;
  name: string;
  children?: TreeNode[] | Polygon[];
  isPolygon?: boolean;
  parentId?: string;
}


const polygons: Polygon[] = [
  
  {
    id: "222333",
    name: "Polygon 1",
    isPolygon: true,
    parentId: "456",
    points: [
      { latitude: 40.7128, longitude: -74.0060 },
      { latitude: 34.0522, longitude: -118.2437 },
      { latitude: 41.8781, longitude: -87.6298 },
    ],
    // date: new Date("2023-06-16"),
    type: "Type A",
    elevation: 100,
  },
  {
    id: "444555",
    name: "Polygon 2",
    isPolygon: true,
    parentId: "456",
    points: [
      { latitude: 51.5074, longitude: -0.1278 },
      { latitude: 48.8566, longitude: 2.3522 },
      { latitude: 55.7558, longitude: 37.6176 },
      { latitude: 56.7558, longitude: 51.6176 },
    ],
    // date: new Date("2023-06-17"),
    type: "Type B",
    elevation: 150,
  },  
  {
    id: "33321213",
    name: "Polygon 345",
    isPolygon: true,
    parentId: "456",
    points: [
      { latitude: 35.6895, longitude: 139.6917 },
      { latitude: 40.7128, longitude: -74.0060 },
      { latitude: 51.5074, longitude: -0.1278 },
    ],
    type: "Type C",
    elevation: 200,
  },
  {
    id: "44444",
    name: "Polygon 4",
    isPolygon: true,
    parentId: "456",
    points: [
      { latitude: 37.7749, longitude: -122.4194 },
      { latitude: 34.0522, longitude: -118.2437 },
      { latitude: 48.8566, longitude: 2.3522 },
    ],
    
    type: "Type D",
    elevation: 125,
  },
  {
    id: "5",
    name: "Polygon 5",
    isPolygon: true,
    parentId: "456",
    points: [
      { latitude: 52.5200, longitude: 13.4050 },
      { latitude: 55.7558, longitude: 37.6176 },
      { latitude: 35.6895, longitude: 139.6917 },
    ],
    
    type: "Type E",
    elevation: 180,
  },
]

export interface Point {
  latitude: number;
  longitude: number;
} 

export interface wPolygon{
  id: string;
  name: string;
  isPolygon: boolean;
  parentId: string;
  points: Point[];
  // date: Date;
  type: string;
  elevation: number;
}


export interface PolygonData {
  date: TreeNode[];
  folder: TreeNode[];
}


export interface GeoPolygonState {
  polygons: PolygonData;

  selectPolygon: Polygon| null;
}


const initialState: GeoPolygonState = {
  polygons: {
    "date": [{
      id: 'root',
      name: 'Tarih',
      children: [
        {
          id: '1',
          name: '23-01-2023',
          parentId: 'root'
        },
        {
          id: '3',
          name: '23-02-2023',
          parentId: 'root',
          children: [
            {
              id: "000333",
              name: "Polygon 3",
              isPolygon: true,
              parentId: "456",
              points: [
                { latitude: 1.7128, longitude: -74.0060 },
                { latitude: 2.0522, longitude: -118.2437 },
                { latitude: 3.8781, longitude: -87.6298 },
                { latitude: 4.8781, longitude: -87.6298 }
              ],
              // date: new Date("2023-06-16"),
              type: "Type C",
              elevation: 100,
            },
          ],
        },
      ],
    }],
    "folder": [{
      id: 'root',
      name: 'Bölgeler',
      children: [
        {
          id: '1',
          name: 'Karadeniz',
          parentId: 'root'
        },
        {
          id: '3',
          name: 'Marmara',
          parentId: 'root',
          children: [
            {
              id: '456',
              name: 'İstanbul',
              parentId: '3',
              children: polygons
                  
              
            },
          ],
        },
      ],
    }]
  },

  selectPolygon: null
};




const geoPolygonSlice = createSlice({
  name: 'geo',
  initialState,
  reducers: {
    addPolygon: (state, action: PayloadAction<geoPolygon>) => {
      state.polygons.push(action.payload);
    },

    setPolygon: (state, action: PayloadAction<TreeNode>) => {
      state.selectPolygon = action.payload
    },



    


updatePolygon: (state, action: PayloadAction<{ polygonId: string; updatedPolygon: Polygon }>) => {
  const { polygonId, updatedPolygon } = action.payload;

  const updateRecursive = (children) => {
    return children.map(child => {
      if (child.id === polygonId) {
        return {
          ...child,
          ...updatedPolygon
        };
      }
      if (child.children) {
        return {
          ...child,
          children: updateRecursive(child.children)
        };
      }
      return child;
    });
  };

  const updatedFolder = updateRecursive(state.polygons.folder);
  const updatedDate = updateRecursive(state.polygons.date);

  
  return {
    ...state,
    
    polygons: {
      ...state.polygons,
      folder: updatedFolder,
      date: updatedDate
    }
  };
}

  
  },
});

export const {
  addPolygon,
  updatePolygon,
  setPolygon,

} = geoPolygonSlice.actions;



export const selectPolygons = (state: RootState) => state.geoPolygon.polygons;

export const selectPolygon = (state: RootState) => state.geoPolygon.selectPolygon;


export default geoPolygonSlice.reducer;
