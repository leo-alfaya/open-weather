import { styled } from '@material-ui/core/styles';
import { Card, CardContent, Grid } from '@material-ui/core';

const Wrapper = styled(Card)({
  width: '22%',
  maxHeight: '190px',
  background: 'transparent',
  border: '1px solid #816493',
  borderRadius: '20px',
  padding: '15px',
  '& p': {
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#9788a0'
  },
  '&:nth-child(n+5)': {
    marginTop: '25px'
  }
})

const Header = styled(Grid)({
  '& img': {
    width: '35px',
    filter: 'invert(100%)'
  }
})

const Content = styled(Grid)({
  '& .temperature': {
    fontSize: '18px',
    color: '#fff'
  }
})

export {
  Wrapper,
  Header,
  Content
}