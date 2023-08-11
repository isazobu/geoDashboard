 import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";




const initialState = {
    selectedMenuItem: ""
}

const radialMenuSlice = createSlice({
    name: 'radial-menu',
    initialState,
    reducers: {
        
      setSelectedMenuItem: (state, action) => {
        state.selectedMenuItem = action.payload
      },
  
  
  
      
  
    
    },
  });
  
  export const {
    setSelectedMenuItem
  
  } = radialMenuSlice.actions;
  
  
  
  export const selectedMenuItem = (state: RootState) => state.radialMenu.selectedMenuItem;
  
  
  
  export default radialMenuSlice.reducer;
