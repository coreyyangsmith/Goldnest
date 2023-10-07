import Slider from '@mui/material/Slider'

// Styled-Components Import
import styled from 'styled-components';

// TODO Implement - not working

const CustomSlider = styled(Slider)`
    root: {
      color: '#52af77',
      height: 8,
      '&$vertical': {
        width: 8
      }
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover': {
        boxShadow: '0px 0px 0px 8px rgba(84, 199, 97, 0.16)'
      },
      '&$active': {
        boxShadow: '0px 0px 0px 12px rgba(84, 199, 97, 0.16)'
      }
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)'
    },
    track: {
      height: 8,
      borderRadius: 4
    },
    rail: {
      height: 20,
      borderRadius: 4
    },
    vertical: {
      '& $rail': {
        width: 8
      },
      '& $track': {
        width: 8
      },
      '& $thumb': {
        marginLeft: -8,
        marginBottom: -11
      }
    }
  }`;

  export default (props) => <CustomSlider {...props} />;