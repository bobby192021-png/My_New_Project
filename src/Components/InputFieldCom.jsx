import { TextField } from '@mui/material';
import React from 'react'

export default function InputFieldCom(props) {

  return (

    <div className="control_group">
      <label>{
        props.label
      }</label>
      <TextField
        placeholder={
          props.name
        }
        fullWidth
      />
    </div>
  )
}
