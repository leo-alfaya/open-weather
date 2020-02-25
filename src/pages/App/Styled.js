import { styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const Wrapper = styled(Grid)({
  maxWidth: '100vw',
  height: '100vh',
  padding: '10px',
  overflow: 'hidden',
  background: 'linear-gradient(180deg, rgba(103,68,128,1) 0%, rgba(72,37,97,1) 100%);',
})

export default Wrapper;