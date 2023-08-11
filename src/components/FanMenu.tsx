import React, { useEffect } from "react";
import { Menu, MenuItem, MenuProvider, SubMenu } from "@spaceymonk/react-radial-menu";
import AllOutIcon from '@mui/icons-material/AllOut';
import { selectedMenuItem, setSelectedMenuItem } from "../features/RadialMenu/radialMenuSlices";
import { useDispatch, useSelector } from "react-redux";
import FlightIcon from '@mui/icons-material/Flight';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

import AddModeratorIcon from '@mui/icons-material/AddModerator';
function FanMenu() {
  const [show, setShow] = React.useState(true);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const selectedItem: RootTree = useSelector(selectedMenuItem)
  const dispatch = useDispatch();

  // You can also use separate handler for each item
  const handleItemClick = (event, index, data) => {
    console.log(`${data} clicked`);
    dispatch(setSelectedMenuItem(data));
    // setShow(false); // you should handle your menu visibility yourself
  };
  const handleSubMenuClick = (event, index, data) => {
    console.log(`${data} clicked`);
  };
  const handleDisplayClick = (event, position) => {
    console.log(`${position} clicked`);
  };




  

  const numOfMenuItem = 3;

  return (
    <div
      onContextMenu={(e) => {
        e.preventDefault();
        setShow(true);
        setPosition({ x: e.clientX, y: e.clientY });
      }}

      style={{ width: "100vw", height: "100vh" }}
    >

      {/* 90 Degree Menu */}
      <MenuProvider>
        {/* add your animation classes via `className`. See `src/stories/MenuCustomization.stories.tsx` */}
        <Menu animationTimeout={1} centerX={window.innerWidth- 1700} centerY={window.innerHeight-100} innerRadius={75} outerRadius={150} show={show}>

        {Array(numOfMenuItem).fill(<div>Element</div>).map((element, index) => (
        <div key={index}>{element}</div>
      ))}
          <SubMenu
            onDisplayClick={handleDisplayClick}
            onItemClicked={handleSubMenuClick}
            sectionView="Silahlar"
            data="Silahlar"
            displayPosition="bottom"
          >
            <div></div>
            <div></div>
            
            <SubMenu
              onDisplayClick={handleDisplayClick}
              sectionView={<FlightIcon />}
              onItemClicked={handleSubMenuClick}
              data="Uçaklar"
              displayPosition="bottom"
            >
              <div></div>
              <MenuItem onItemClicked={handleItemClick} data="F-16 Uçağı">F-16</MenuItem>
              <MenuItem onItemClicked={handleItemClick} data="F-35 Uçağı">F-35</MenuItem>
              <MenuItem onItemClicked={handleItemClick} data="Lockheed Martin F-22 Raptor Uçağı">F-22</MenuItem>
            </SubMenu>
            <SubMenu
              onDisplayClick={handleDisplayClick}
              onItemClicked={handleSubMenuClick}
              sectionView={<RocketLaunchIcon />}
              data="Fuzeler"
              displayPosition="bottom"
            >
              <div></div>
              <MenuItem onItemClicked={handleItemClick} data="Tübitak G-40 (Füze)">G-40</MenuItem>
              <MenuItem onItemClicked={handleItemClick} data="HİSAR (hava savunma sistemi)">HİSAR</MenuItem>
              <MenuItem onItemClicked={handleItemClick} data="SOM Füzesi">SOM</MenuItem>
            </SubMenu>
          </SubMenu>
         
        
      
        </Menu>
      </MenuProvider>

      {/* 270 Degree Menu */}
      <MenuProvider>
        {/* add your animation classes via `className`. See `src/stories/MenuCustomization.stories.tsx` */}
        <Menu animationTimeout={1} centerX={window.innerWidth- 200} centerY={window.innerHeight-100} innerRadius={75} outerRadius={150} show={show}>
          {/* Populate your menu here */}
          <div></div>
          <SubMenu
            onDisplayClick={handleDisplayClick}
            onItemClicked={handleSubMenuClick}
            sectionView="Silahlar"
            data="Silahlar"
            displayPosition="bottom"
          >
            <div></div>
            <MenuItem onItemClicked={handleItemClick} data="Tüfekler"><AddModeratorIcon /></MenuItem>
            <SubMenu
              onDisplayClick={handleDisplayClick}
              sectionView={<FlightIcon />}
              onItemClicked={handleSubMenuClick}
              data="Uçaklar"
              displayPosition="bottom"
            >
              <div></div>
              <MenuItem onItemClicked={handleItemClick} data="F-16 Uçağı">F-16</MenuItem>
              <MenuItem onItemClicked={handleItemClick} data="F-35 Uçağı">F-35</MenuItem>
              <MenuItem onItemClicked={handleItemClick} data="Lockheed Martin F-22 Raptor Uçağı">F-22</MenuItem>
            </SubMenu>
            <SubMenu
              onDisplayClick={handleDisplayClick}
              onItemClicked={handleSubMenuClick}
              sectionView={<RocketLaunchIcon />}
              data="Fuzeler"
              displayPosition="bottom"
            >
              <div></div>
              <MenuItem onItemClicked={handleItemClick} data="Tübitak G-40 (Füze)">G-40</MenuItem>
              <MenuItem onItemClicked={handleItemClick} data="HİSAR (hava savunma sistemi)">HİSAR</MenuItem>
              <MenuItem onItemClicked={handleItemClick} data="SOM Füzesi">SOM</MenuItem>
            </SubMenu>
          </SubMenu>
         
          <MenuItem onItemClicked={handleItemClick} data="A Menu">A Menu</MenuItem>
          <MenuItem onItemClicked={handleItemClick} data="A Menu">A Menu</MenuItem>
          <MenuItem onItemClicked={handleItemClick} data="A Menu">A Menu</MenuItem>
          <MenuItem onItemClicked={handleItemClick} data="A Menu">A Menu</MenuItem>
          <MenuItem onItemClicked={handleItemClick} data="B Menu">B Menu</MenuItem>
        </Menu>
      </MenuProvider>
      <h1>Right Click Anywhere</h1>
      <h1>{selectedItem.length > 0 ? selectedItem + " selected" : "No selected Item"}</h1>
    </div>
  );
}

export default FanMenu;


{/* <SubMenu
onDisplayClick={handleDisplayClick}
sectionView={<FlightIcon />}
onItemClicked={handleItemClick} data="Uçaklar
displayPosition="bottom"
>
  <MenuItem onItemClicked={handleItemClick} data="2.4.1. Item">2.4.1. Item</MenuItem>
</SubMenu>     */}
