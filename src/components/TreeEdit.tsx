import { useState, useEffect } from 'react';
import { geoPolygon } from '../types';
import { TextField, Button } from '@mui/material';
import { Polygon, setPolygon, updatePolygon } from '../features/geoPolygon/geoPolygonSlice';
import { useDispatch, useSelector } from 'react-redux';

interface Props {
  polygon: Polygon;
 
}

export const TreeEdit: React.FC<Props> = ({ polygon }) => {
  const [id, setId] = useState(polygon.id);
  const [name, setName] = useState(polygon.name);
  const [points, setPoints] = useState(polygon.points);
  const [type, setType] = useState(polygon.type);
  const [elevation, setElevation] = useState(polygon.elevation);


  const dispatch = useDispatch();


  useEffect(() => {
    setId(polygon.id)
    setName(polygon.name);
    setPoints(polygon.points);
    setType(polygon.type);
    setElevation(polygon.elevation);
  }, [polygon]);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedPolygon = {
      ...polygon,
      id,
      name,
      points,
      type,
      elevation,
    };

    console.log("update" , updatedPolygon)
    dispatch(updatePolygon({polygonId: id, updatedPolygon: updatedPolygon}));
    dispatch(setPolygon(updatedPolygon));

  };

  const handlePointChange = (index: number, key: string, value: number) => {
  const updatedPoints = [...points];
  updatedPoints[index] = {
    ...updatedPoints[index],
    [key]: value,
  };
  setPoints(updatedPoints);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '16px',
      }}
    >
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        variant="outlined"
      />
      {points.map((point, index) => (
        <div key={index} style={{ display: 'flex', gap: '16px' }}>
          <TextField
            label="Latitude"
            type="number"
            value={point.latitude}
            onChange={(e) => handlePointChange(index, 'latitude', parseFloat(e.target.value))}
            variant="outlined"
          />
          <TextField
            label="Longitude"
            type="number"
            value={point.longitude}
            onChange={(e) => handlePointChange(index, 'longitude', parseFloat(e.target.value))}
            variant="outlined"
          />
        </div>
      ))}
      <TextField
        label="Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        variant="outlined"
      />
      <TextField
        label="Elevation"
        type="number"
        value={elevation}
        onChange={(e) => setElevation(parseFloat(e.target.value))}
        variant="outlined"
      />
      <Button type="submit" variant="contained" color="primary" style={{ marginTop: '16px' }}>
        Submit
      </Button>
    </form>
  );
};
