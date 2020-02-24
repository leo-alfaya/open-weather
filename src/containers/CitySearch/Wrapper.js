import { styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const Wrapper = styled(Grid)({
  '& p': {
    color: '#fff',
    fontSize: '32px',
    fontWeight: 'lighter',
    lineHeight: '36px',
    '&.hour': {
      fontWeight: 'bold',
    }
  }
})

export default Wrapper;