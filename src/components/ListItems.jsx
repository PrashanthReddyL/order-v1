import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import Icon from '@mui/material/Icon';
import { green } from '@mui/material/colors';
import MenuItem from '@mui/material/MenuItem';

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

export default function InteractiveList() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const pages = ['Qtr', 'Half', 'Full'];
  return (
    <Box >
      
      <Grid container spacing={2}>
        <Grid  xs={12} md={6}>
            <List dense={dense}>
              {generate(
                <ListItem
                  secondaryAction={

                    <MenuItem>
                         {pages.map((page) => (
                <MenuItem key={page} 
                // onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
                
                    </MenuItem>
                    
                  }
                >
                  <ListItemAvatar>
                    
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>,
              )}
             
            </List>
        </Grid>
      </Grid>
    </Box>
  );
}