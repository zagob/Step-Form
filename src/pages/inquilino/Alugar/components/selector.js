import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

// import { Container } from './styles';

function SelectorComponnent(props) {
    return (
        <FormControl>
             <InputLabel id="demo-simple-select-label">{props.label} </InputLabel>
            <Select style={{ minWidth: 200, marginBottom: 20,marginRight:25 }}
                value={null}
                onChange={null}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
            >
                <MenuItem value="">
                    <em>Vazio</em>
                </MenuItem>

                <MenuItem value={10}>{props.item1} </MenuItem>
                <MenuItem value={20}>{props.item2}</MenuItem>
                <MenuItem value={30}>{props.item3}</MenuItem>

            </Select>
        </FormControl>

    );
}

export default SelectorComponnent;