// Footer.js
import React from 'react';
import {Typography, Box, Link} from '@mui/material'

function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                color: '#ffffff',
                padding: '1rem',
                textAlign: 'center',
                marginTop: 4
            }}
        >
            <Typography variant="body1">
                Made with <span style={{ color: '#e25555' }}>❤️</span> by <Link href={'https://www.mygigz.live'} style={{color: 'yellow'}} target={'_blank'}>Stefano Esposito</Link>
            </Typography>
        </Box>
    );
}

export default Footer;
