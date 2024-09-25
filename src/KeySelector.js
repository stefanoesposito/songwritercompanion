import {FormControl, Grid, InputLabel, MenuItem, Select} from '@mui/material'
import React from 'react'

const keys = [
    'C', 'G', 'D', 'A', 'E', 'B', 'F#',
    'C#', 'F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb',
]

const displayKeys = [
    'C', 'G', 'D', 'A', 'E', 'B', 'F#',
    'C#', 'F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb',
]

const scaleTypes = ['Major', 'Minor']

function KeySelector({selectedKey, setSelectedKey, scaleType, setScaleType}) {
    return (
        <Grid container spacing={2} style={{marginTop: '1rem'}}>
            <Grid item xs={6}>
                <FormControl fullWidth sx={{color: 'white'}}>
                    <InputLabel
                        id="key-label"
                        sx={{
                            color: 'white',
                            '&.Mui-focused': {
                                color: 'white',
                            },
                            '&.MuiInputLabel-shrink': {
                                color: 'white',
                            },
                        }}
                    >
                        Select the key
                    </InputLabel>
                    <Select
                        labelId="key-label"
                        value={selectedKey}
                        label="Select the key"
                        onChange={(e) => setSelectedKey(e.target.value)}
                        sx={{
                            color: 'white',
                            '.MuiOutlinedInput-notchedOutline': {
                                borderColor: 'white',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'white',
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'white',
                            },
                            '.MuiSvgIcon-root': {
                                color: 'white',
                            }
                        }}
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
                    <InputLabel
                        id="scale-type-label"
                        sx={{
                            color: 'white',
                            '&.Mui-focused': {
                                color: 'white',
                            },
                            '&.MuiInputLabel-shrink': {
                                color: 'white',
                            },
                        }}
                    >
                        Scale type
                    </InputLabel>
                    <Select
                        labelId="scale-type-label"
                        value={scaleType}
                        label="Scale type"
                        onChange={(e) => setScaleType(e.target.value)}
                        sx={{
                            color: 'white',
                            '.MuiOutlinedInput-notchedOutline': {
                                borderColor: 'white',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'white',
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'white',
                            },
                            '.MuiSvgIcon-root': {
                                color: 'white',
                            }
                        }}
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
    )
}

export default KeySelector
