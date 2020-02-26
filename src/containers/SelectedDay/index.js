import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { 
  Wrapper, 
  Header, 
  MainInfo,
  OtherInfo,
  Separator
} from './Styled';
import cloud from '../../icons/cloud.png';
import InfoTopic from '../../components/SelectedDay/InfoTopic';

const SelectedDay = () => (
  <Wrapper 
    container 
    item
    direction="column"
    md={4}
  >
    <Header
      container
      justify="space-between"
    >
      <Box>
        <Typography>
          Today
        </Typography>
        <Typography className="city-name">
          São Paulo
        </Typography>
      </Box>
      <img src={cloud} alt="cloud icon" />
    </Header>
    <MainInfo
      container
      direction="column"
      alignItems="center"
    >
      <Typography className="temperature">
        28
      </Typography>
      <Typography>
        Scattered clouds
      </Typography>
      <Typography>
        14:03 Fev 19
      </Typography>
    </MainInfo>
    <OtherInfo
      container
      alignItems="center"
      direction="column"
      justify="space-between"
    >
      <Separator />
      <Box pt={4}/>
      <InfoTopic topic="Wind" value="Gentle Breeze, 4,6m/s, East (90)" />
      <InfoTopic topic="Cloudiness" value="Scattered clouds" />
      <InfoTopic topic="Pressure" value="1009 hpa" />
      <InfoTopic topic="Humidity" value="74%" />
      <InfoTopic topic="Sunrise" value="06:02" />
      <InfoTopic topic="Sunset" value="18:57" />
      <InfoTopic topic="Geo coords" value="[-26.92, -49.07]" />
    </OtherInfo>
  </Wrapper>
)

export default SelectedDay;