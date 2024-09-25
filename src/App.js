import React, { useState } from 'react';
import Footer from './Footer';
import KeySelector from './KeySelector';
import ChordDisplay from './ChordDisplay';
import {Container, Typography, Box, useMediaQuery} from '@mui/material'
import Logo from './assets/img/logo.png';
import './App.css';

function App() {
    const isMobile = useMediaQuery('(max-width:600px)');
    const [selectedKey, setSelectedKey] = useState('C');
    const [scaleType, setScaleType] = useState('Major');

    const resetKey = () => {
        setSelectedKey('C')
        setScaleType('Major')
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <Container
                maxWidth="md"
                sx={{
                    marginTop: '2rem',
                    flexGrow: 1,
                }}
            >
                <div
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}
                    onClick={resetKey}
                >
                    <img src={Logo} width={isMobile ? 70 : 80} alt="Songwriter Companion Logo" />
                    <Typography variant={isMobile ? 'h4' : 'h3'} component="h1" align={'center'} color={'#fafaf3'}>
                        Songwriter Companion
                    </Typography>
                </div>
                <KeySelector
                    selectedKey={selectedKey}
                    setSelectedKey={setSelectedKey}
                    scaleType={scaleType}
                    setScaleType={setScaleType}
                />
                <ChordDisplay selectedKey={selectedKey} scaleType={scaleType} />
            </Container>
            <Footer />
        </Box>
    );
}

export default App;
