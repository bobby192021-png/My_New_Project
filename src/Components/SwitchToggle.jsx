import { FormControlLabel, styled, Switch} from '@mui/material'
import React from 'react'

// interface SwitchToggleProps {
//   defaultChecked?: boolean;
//   label?: React.ReactNode;

//   // ADD THESE ↓↓↓
//   checked?: boolean;
//   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 22,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 3,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(20px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#D3B88C',
        opacity: 1,
        border: 0,
      },
      '& .MuiSwitch-thumb': {
        backgroundColor: '#ffffff',
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 16,
    height: 16,
    backgroundColor: '#ffffff',
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: '#e0e0e0',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

const SwitchToggle = ({
  defaultChecked = true,
  label = '',
  checked,
  onChange
}) => {
  return (
    <FormControlLabel
      control={
        <IOSSwitch
          defaultChecked={defaultChecked}
          checked={checked}
          onChange={onChange}
        />
      }
      label={label}
    />
  );
};

export default SwitchToggle;
