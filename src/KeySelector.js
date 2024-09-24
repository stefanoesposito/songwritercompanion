import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';

const keys = [
    'C', 'G', 'D', 'A', 'E', 'B', 'F#',
    'C#', 'F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb',
];

const displayKeys = [
    'C', 'G', 'D', 'A', 'E', 'B', 'F#',
    'C#', 'F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb',
];

const scaleTypes = ['Major', 'Minor'];

function KeySelector({ selectedKey, setSelectedKey, scaleType, setScaleType }) {
    return (
        <Grid container spacing={2} style={{ marginTop: '1rem' }}>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel id="key-label">Select the key</InputLabel>
                    <Select
                        labelId="key-label"
                        value={selectedKey}
                        label="Select the key"
                        onChange={(e) => setSelectedKey(e.target.value)}
                    >
                        {keys.map((key, index) => (
                            <MenuItem key={key} value={key}>
                                {displayKeys[index]}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel id="scale-type-label">Scale type</InputLabel>
                    <Select
                        labelId="scale-type-label"
                        value={scaleType}
                        label="Scale type"
                        onChange={(e) => setScaleType(e.target.value)}
                    >
                        {scaleTypes.map((type) => (
                            <MenuItem key={type} value={type}>
                                {type}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    );
}

export default KeySelector;
