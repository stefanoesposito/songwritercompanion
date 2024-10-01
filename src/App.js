import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Footer from './Footer';
import KeySelector from './KeySelector';
import ChordDisplay from './ChordDisplay';
import { Container, Typography, Box, useMediaQuery } from '@mui/material';
import Logo from './assets/img/logo.png';
import './App.css';
import './i18n';

function App() {
    const { t } = useTranslation();
    const isMobile = useMediaQuery('(max-width:600px)');
    const [selectedKey, setSelectedKey] = useState('C');
    const [scaleType, setScaleType] = useState('Major');

    const resetKey = () => {
        setSelectedKey('C');
        setScaleType('Major');
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                background: 'radial-gradient(circle, rgba(54, 88, 106, 1) 50%, rgba(113, 155, 175, 1) 100%)',
                // background: 'radial-gradient(circle, rgba(113, 155, 175, 1) 50%, rgba(54, 88, 106, 1) 100%)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
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
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                        gap: 2,
                        backgroundColor: 'white',
                        borderRadius: 16,
                        padding: 12,
                        WebkitBoxShadow: "1px 8px 7px -4px rgba(0,0,0,0.79)",
                        boxShadow: "1px 8px 7px -4px rgba(0,0,0,0.79)"

                    }}
                    onClick={resetKey}
                >
                    <img
                        src={Logo}
                        width={isMobile ? 50 : 80}
                        alt={t('songwriterCompanion')}
                    />
                    <Typography
                        variant={isMobile ? 'h4' : 'h3'}
                        component="h3"
                        align={'center'}
                        color={'#36586A'}
                        fontSize={isMobile ? 24 : 60}
                    >
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
