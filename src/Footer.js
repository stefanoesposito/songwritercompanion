// Footer.js
import React from 'react';
import {Typography, Box, Link} from '@mui/material'
import LanguageSelector from './LanguageSelector'

function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 2,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                color: '#ffffff',
                padding: '1rem',
                textAlign: 'center',
                marginTop: 4
            }}
        >
            <Typography variant="body1">
                By <Link href={'https://www.mygigz.live'} style={{color: '#e3c822', textDecoration: 'none'}} target={'_blank'}>Stefano Esposito</Link>
            </Typography>
            <LanguageSelector />
        </Box>
    );
}

export default Footer;
