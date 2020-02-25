import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadWeather } from '../../store/actions';
import { 
  Typography, 
  Box
} from '@material-ui/core';
import Wrapper from './Styled';
import Search from '../../components/Search';

const CitySearch = ({ loadWeather }) => {
  return (
    <Wrapper 
      container 
      item
      direction="column"
      md={10}
    >
      <Typography>
        Seja bem vindo
      </Typography>
      <Typography className="hour">
        Selecione uma Cidade
      </Typography>
      <Box pb={4} />
      <Search 
        placeholder="Pesquisar por cidade"
        onClick={loadWeather}  
      />
    </Wrapper>
  )
}

const mapDispatchToProps = dispatch => 
    bindActionCreators({ loadWeather }, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(CitySearch);
