import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const options = [
    'Right',
    'Tie',
  ];

  
const ITEM_HEIGHT = 48;

export default function DenseAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [word, setWord] = React.useState("Right")
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    // setWord(e.target.value)
    e.preventDefault();
    console.log(e.target.value)
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}> */}
            {/* <MenuIcon /> */}
                <div>
                <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? 'long-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="long-menu"
                    MenuListProps={{
                    'aria-labelledby': 'long-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    //onClose={handleClose}
                    PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                    }}
                >
                    {options.map((option) => (
                    <MenuItem key={option} onClick={handleClose} value={option}>
                        {option}
                    </MenuItem>
                    ))}
                </Menu>
                </div>
          {/* </IconButton> */}
          <Typography variant="h6" color="inherit" component="div">
            Sense for {word}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}