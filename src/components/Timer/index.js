import React from 'react';
import { Typography } from '@material-ui/core';
import Wrapper from './Styled';
import moment from 'moment';

const Timer = () => {
  return (
    <Wrapper container direction="column" alignItems="center">
      <Typography>
        {moment().format('D/MM')}
      </Typography>
      <Typography className="hour">
        {moment().format('HH:mm a')}
      </Typography>
    </Wrapper>
  )
}

export default Timer;