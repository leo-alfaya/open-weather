import { styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const Wrapper = styled(Grid)({
  '& .title': {
    color: '#fff',
    fontSize: '16px'
  }
})

export default Wrapper;