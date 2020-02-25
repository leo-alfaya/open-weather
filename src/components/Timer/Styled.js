import { styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const Wrapper = styled(Grid)({
  color: '#fff',
  '& p': {
    fontSize: '16px',
    '&.hour': {
      color: '#867295'
    }
  }
})

export default Wrapper;