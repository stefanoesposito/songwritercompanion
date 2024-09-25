import {FormControl, Grid, InputLabel, MenuItem, Select} from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';

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
    const { t } = useTranslation();

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
                        {t('selectKey')}
                    </InputLabel>
                    <Select
                        labelId="key-label"
                        value={selectedKey}
                        label={t('selectKey')}
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
                        {t('scaleType')}
                    </InputLabel>
                    <Select
                        labelId="scale-type-label"
                        value={scaleType}
                        label={t('scaleType')}
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
