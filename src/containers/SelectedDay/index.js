import React from 'react';
import { connect } from 'react-redux';
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
import moment from 'moment';
window.moment = moment

const SelectedDay = ({ city, dayWeather }) => {
  const actualWeather = dayWeather ? dayWeather[0] : null;

  if(city && actualWeather) {
    return (
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
              {city.name}
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
            { actualWeather.main.temp.toFixed(0) }
          </Typography>
          <Typography className="description">
            { actualWeather.weather[0].description }
          </Typography>
          <Typography>
            {moment().format("HH:mm MMM D")}
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
          <InfoTopic topic="Wind" value={`${actualWeather.wind.speed} m/s`} />
          <InfoTopic topic="Cloudiness" value={ actualWeather.weather[0].description } />
          <InfoTopic topic="Pressure" value={`${ actualWeather.main.pressure } Hpa`}/>
          <InfoTopic topic="Humidity" value={`${ actualWeather.main.humidity }% `} />
          <InfoTopic topic="Sunrise" value={`${moment.unix(city.sunrise).format('HH:mm')}`} />
          <InfoTopic topic="Sunset" value={`${moment.unix(city.sunset).format('HH:mm')}`} />
          <InfoTopic topic="Geo coords" value={`[${city.coord.lat.toFixed(2)}, ${city.coord.lon.toFixed(2)}]`} />
        </OtherInfo>
      </Wrapper>
    )
  }

  return null
}

const mapStateToProps = state => ({
  city: state.city,
  dayWeather: state.weather[0]
})

export default connect(
  mapStateToProps,
  null
)(SelectedDay);