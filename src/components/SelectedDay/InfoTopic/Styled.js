import { styled } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const Wrapper = styled(Grid)({
  '& p': {
    fontSize: '16px',
    lineHeight: '28px',
    fontWeight: 'bold',
    color: '#4e2b67',
    textTransform: 'capitalize',
    '&.value': {
      color: '#8897ac'
    }
  }
})

export default Wrapper;