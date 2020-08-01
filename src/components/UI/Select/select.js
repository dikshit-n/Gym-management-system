import React, { useState } from 'react'
import { Button, Select, MenuItem, InputLabel, makeStyles, FormControl } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));

const SelectDropDown = props => {
    
    const classes = useStyles()
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    }

    return (
        <FormControl required = {props.required} className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label"><p style={{color: 'white'}}>{props.label}</p></InputLabel>
            <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={props.value}
                onChange={props.onChange}
                inputProps={props.required ? 
                    {
                        id: 'age-native-required',
                    } : null}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {props.options.map(el => <MenuItem value={el.value}>{el.label}</MenuItem>)}
            </Select>
            </FormControl>
    )
}

export default SelectDropDown