import React from 'react';
import { Typography } from '@material-ui/core';
import Wrapper from './Wrapper';

const Timer = () => {
  return (
    <Wrapper container direction="column" alignItems="center">
      <Typography>
        08/12
      </Typography>
      <Typography className="hour">
        12:40PM
      </Typography>
    </Wrapper>
  )
}

export default Timer;