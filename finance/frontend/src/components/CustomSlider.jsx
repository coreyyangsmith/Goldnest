import * as React from 'react';
import Slider from '@mui/material/Slider';
import { alpha, styled } from '@mui/material/styles';

const CustomSlider = styled(Slider)(({ theme }) => ({

  disabled: {
    color: theme.palette.success.main
  },

  '& .MuiSlider-thumb': {
      color: theme.palette.success.main,
      border: '2px solid currentColor',
      boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
    },

  '& .MuiSlider-rail': {
    color: `gray`,
  },

  '& .MuiSlider-track': {
    color: theme.palette.success.main,
  },  

}))  

export default function StyledCustomization(props) {
  return <CustomSlider {...props}/>;
}