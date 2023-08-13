import React from 'react';
import { Button, TextField } from '@mui/material';

const Payment = () => {
    return (
        <div>
          <TextField label="Username" />
            <Button variant="contained" color="primary">
            Submit
          </Button>
        </div>
      );
}

export default Payment