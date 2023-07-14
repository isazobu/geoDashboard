import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { Polygon, selectPolygon,  selectPolygons, selectSelectedPolygonId, setPolygon, setPolygonName } from '../features/geoPolygon/geoPolygonSlice';
import { updatePolygon } from './geoPolygonSlice';

interface RenderTree {
  id: string;
  name: string;
  children?: any[] | RenderTree[]
}

interface RootTree{
  folder: RenderTree[]
  date: RenderTree[]
}


// const data: RenderTree = {
//   id: 'root',
//   name: 'Bölgeler',
//   children: [
//     {
//       id: '1',
//       name: 'Karadeniz',
//     },
//     {
//       id: '3',
//       name: 'Marmara',
//       children: [
//         {
//           id: '4',
//           name: 'İstanbul',
//           children: [
//               {

//                 id: '5',
//                 name: 'Polygon'
//                 }
//           ]
//         },
//       ],
//     },
//   ],
// };

// const dateData: RenderTree = {
//     id: 'root',
//     name: 'Tarih',
//     children: [
//       {
//         id: '1',
//         name: '23-01-2023',
//       },
//       {
//         id: '3',
//         name: '23-02-2023',
//         children: [
//           {
//             id: '4',
//             name: 'Polygon3',
//           },
//         ],
//       },
//     ],
//   };



export default function PolygonTree() {
    const data: RootTree = useSelector(selectPolygons)

    const [selectedOption, setSelectedOption] = React.useState<string>("folder");
    const [treeData, setTreeData] = React.useState<RenderTree[]>(data.folder);

    const [expanded, setExpanded] = React.useState<string[]>([]);
    const [selected, setSelected] = React.useState<string[]>([]);
  
    const [selectedNode, setSelectedNode] = React.useState<Polygon>({});
    const [selectedRoot, setSelectedRoot] = React.useState({});
    const dispatch = useDispatch();



    React.useEffect(() => {
      // This will be called for each new value of selectedNode, including the initial empty one
      // Here is where you can make your API call
      console.log("selectedNode", selectedNode);
      if(selectedNode.isPolygon)
      {
        dispatch(setPolygon(selectedNode));
      }
      console.log("selectedRoot", selectedRoot);
    }, [selectedNode, selectedRoot]);
  
    const handleChange = (event, nodeId) => {
      treeData.forEach((treeRoot) => {
        if(treeRoot.id === nodeId){
          setSelectedRoot(treeRoot);
          setSelectedNode(treeRoot);
          return
        }
  
        handleSelectedNode(treeRoot.children, treeRoot, nodeId);
      });
    };
    
    React.useEffect(() => {
      selectedOption == "folder" ? setTreeData(data.folder) : setTreeData(data.date)
    },[data])

  const handleSelectedNode = (childNodes, treeRoot, nodeId) => {
    if (!childNodes) {
      return;
    }

    for (let i = 0; i < childNodes.length; i++) {
      let childNode = childNodes[i];
      if (childNode.id === nodeId) {
        setSelectedRoot(treeRoot);
        setSelectedNode(childNode);
        return;
      }
      // if(childNode.isPolygon){
      //   // dispatch(setPolygon(childNode))
      // }

      handleSelectedNode(childNode.children || [], treeRoot, nodeId);
    }
  };

    const handleSelectChange = (e: React.ChangeEvent<{ value: unknown }>) => {
      const selectedValue = e.target.value as string;
      setSelectedOption(selectedValue);
      console.log(selectedValue)
      if (selectedValue === "folder") {
        setTreeData(data.folder);
      } else if (selectedValue === "date") {
        setTreeData(data.date);
      }
    };
  const renderTree = (nodes: RenderTree) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  const displayTreeView = (treeViewArray) => {
    if (!treeViewArray) {
      return null;
    }
    return treeViewArray.map((treeViewItem) => {
      return (
        <TreeItem
          key={treeViewItem.id}
          nodeId={`${treeViewItem.id}`}
          label={treeViewItem.name}
        >
          {displayTreeView(treeViewItem.children)}
        </TreeItem>
      );
    });
  };

  const handleToggle = (event: React.SyntheticEvent, nodeIds: string[]) => {
    setExpanded(nodeIds);
  };

    // console.log(nodeId);
    

  return (

     <Box sx={{ border: 1, borderRadius: '16px', m:2 }}>

     
    <FormControl sx={{m:2}}>
    <InputLabel id="select-label">Seçin</InputLabel>
    <Select
      labelId="select-label"
      id="select"
      value={selectedOption}
      onChange={handleSelectChange}
    >
      <MenuItem value="folder">Folder</MenuItem>
      <MenuItem value="date">Date</MenuItem>
    </Select>
  </FormControl>
    <TreeView
      aria-label="rich object"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={['root']}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 300, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
      selected={selected}
      onNodeToggle={handleToggle}
      onNodeSelect={handleChange}
    >
      {displayTreeView(treeData)}
    </TreeView>
    </Box>
  
  

  );
}