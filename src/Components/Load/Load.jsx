import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
const Load = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent:'center', margin:15 }}>
      <CircularProgress color='success'/>
    </Box>
  );
}
export default Load;
