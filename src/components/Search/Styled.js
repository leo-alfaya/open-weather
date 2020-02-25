import { styled } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

const StyledInput = styled(InputBase)({
  width: '100%',
  height: '80px',
  borderRadius: '30px',
  border: '1px solid #846897',
  padding: '0 25px',
  '& input': {
    height: '24px',
    padding: '0',
    color: '#fff',
    fontSize: '22px',
  },
  '& img': {
    maxWidth: '30px',
    filter: 'invert(100%)'
  }
})

export default StyledInput;