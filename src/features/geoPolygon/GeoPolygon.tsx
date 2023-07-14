import { Grid } from '@mui/material';
import * as React from 'react';
import PolygonTree from '../../components/PolygonTree'
import { TreeEdit } from '../../components/TreeEdit';
import type { RootState } from "../../store/store"
import { useSelector, useDispatch } from 'react-redux'
import { selectPolygon, selectPolygons } from './geoPolygonSlice';


// const mockData: geoPolygon[] = [
//     {
//       id: 1,
//       name: "Polygon 1",
//       points: [
//         [40.7128, -74.0060],
//         [34.0522, -118.2437],
//         [41.8781, -87.6298],
//       ],
//       date: "2023-06-16",
//       type: "Type A",
//     },
//     {
//       id: 2,
//       name: "Polygon 2",
//       points: [
//         [51.5074, -0.1278],
//         [48.8566, 2.3522],
//         [55.7558, 37.6176],
//       ],
//       date: "2023-06-17",
//       type: "Type B",
//     },
//     // Add more mock data objects as needed
//   ];
  
export default function PolygonScreen() {
  
  const selectedPolygon = useSelector(selectPolygon)




      
    return(
    <Grid container spacing={2} sx={{  }}>
    <Grid item xs={6} md={4} >
        <PolygonTree />
    </Grid>
    <Grid item xs={6} md={8} >
   
     {selectedPolygon && 
     <div>

       <h1>{selectedPolygon.name}</h1>
     <TreeEdit polygon={selectedPolygon} onSubmit={() => console.log(selectedPolygon)} />
     </div>
     }
    </Grid>

    </Grid>
    )
}
