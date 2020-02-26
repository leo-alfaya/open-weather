import { styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const Wrapper = styled(Grid)({
  '& .title': {
    color: '#fff',
    fontSize: '16px'
  }
})

const ForecastList  = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridColumnGap: '24px',
  gridRowGap: '24px'
})

export {
  Wrapper,
  ForecastList
};