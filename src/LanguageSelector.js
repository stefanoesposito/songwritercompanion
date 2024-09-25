import React from 'react';
import { useTranslation } from 'react-i18next';
import { Select, MenuItem } from '@mui/material';

function LanguageSelector() {
    const { i18n } = useTranslation();

    const changeLanguage = (event) => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <Select
            value={i18n.language}
            onChange={changeLanguage}
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
                },
            }}
        >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="it">Italiano</MenuItem>
            <MenuItem value="fr">Français</MenuItem>
            <MenuItem value="es">Español</MenuItem>
            <MenuItem value="de">Deutsch</MenuItem>
            <MenuItem value="pt">Português</MenuItem>
            <MenuItem value="ja">日本語</MenuItem>

        </Select>
    );
}

export default LanguageSelector;