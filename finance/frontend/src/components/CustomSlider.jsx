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

  // Align End Label (Max Value) for Slider
  '& .MuiSlider-markLabel[data-index="0"]': {
    //TODO?
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },     
  '& .MuiSlider-markLabel[data-index="1"]': {
    width: "50px",    
    marginLeft: "-25px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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