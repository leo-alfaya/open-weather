import { styled } from '@material-ui/core/styles';
import CloudBackground from '../../icons/cloud-background.png';
import Grid from '@material-ui/core/Grid';

const Wrapper = styled(Grid)({
  maxHeight: '100%',
  position: 'relative',
  padding: '36px 0',
  backgroundColor: '#fff',
  backgroundImage: `url(${CloudBackground})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  borderRadius: '15px'
})

const Header = styled(Grid)({
  height: '25%',
  padding: '0 36px',
  '& p': {
    fontSize: '24px',
    '&.city-name': {
      fontWeight: 'bold'
    }
  },
  '& img': {
    height: '65px', 
    filter: 'invert(27%) sepia(35%) saturate(862%) hue-rotate(232deg) brightness(96%) contrast(87%)'
  }
})

const MainInfo = styled(Grid)({
  height: '40%',
  padding: '0 36px',
  '& p': {
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#5d3a76',
    '&.temperature': {
      position: 'relative',
      fontSize: '90px',
      color: '#000',
      '&::after': {
        content: "'°C'",
        display: 'block',
        position: 'absolute',
        top: '0',
        left: '100%',
        fontSize: '36px'        
      }
    },
    '&.description': {
      textTransform: 'capitalize'
    }
  }
})

const OtherInfo = styled(Grid)({
  height: '35%',
  padding: '0 36px',
  position: 'relative'
})

const Separator = styled('div')({
  width: '100%',
  height: '1px',
  top: '0',
  position: 'absolute',
  left: '0',
  backgroundColor: '#e8ecf4'
})

export { 
  Wrapper,
  Header,
  MainInfo,
  OtherInfo,
  Separator
};