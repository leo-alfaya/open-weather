import { styled } from '@material-ui/core/styles';
import { Card, Grid } from '@material-ui/core';

const Wrapper = styled(Card)({
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
  '&:hover': {
    background: '#462a5a',
    borderColor: '#462a5a'
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