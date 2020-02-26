import React from 'react';
import { Typography } from '@material-ui/core';
import Wrapper from './Styled';

const InfoTopic = ({ topic, value}) => (
  <Wrapper
    container
    justify="space-between"
  >
    <Typography>
      {topic}
    </Typography>
    <Typography className="value">
      {value}
    </Typography>
  </Wrapper>
)

export default InfoTopic;