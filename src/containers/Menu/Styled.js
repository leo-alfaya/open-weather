import { styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const Wrapper = styled(Grid)({
  maxHeight: '100%',
  padding: '35px 0',
  background: 'rgba(0,0,0,.1)',
  borderRadius: '20px',
  '& img': {
    maxWidth: '50px',
    '&.home': {
      maxWidth: '40px',
      filter: 'invert(100%)'
    }
  } 
})

export default Wrapper;