import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
export const Hello = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <Box className="col s12 m5 align-wrapper" style={{ minHeight: '220px', }}  bgcolor="warning.main" color="#B33A3A">
      <Box m={4.2} alignItems="center" display="flex" justifyContent="center"  >

        <Button variant="contained" color="primary" onClick={increment}> Touch It </Button>
      </Box>
      <h4>You've pressed the button {counter} &#215;</h4>
    </Box>
  );
};
