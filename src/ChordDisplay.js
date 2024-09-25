import React from 'react';
import {
    Typography, Grid, Paper, List, ListItem, ListItemText,
    Accordion, AccordionSummary, AccordionDetails
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';


const sharpNotes = [
    'C', 'C#', 'D', 'D#', 'E', 'F',
    'F#', 'G', 'G#', 'A', 'A#', 'B',
];

const flatNotes = [
    'C', 'Db', 'D', 'Eb', 'E', 'F',
    'Gb', 'G', 'Ab', 'A', 'Bb', 'B',
];

const modes = {
    Ionian: [0, 2, 4, 5, 7, 9, 11],    // Major scale
    Aeolian: [0, 2, 3, 5, 7, 8, 10],  // Natural minor scale
};

function getAccidentalType(selectedKey) {
    const flatKeys = ['F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Cb'];
    const sharpKeys = ['G', 'D', 'A', 'E', 'B', 'F#', 'C#'];

    if (flatKeys.includes(selectedKey)) {
        return 'flat';
    } else if (sharpKeys.includes(selectedKey)) {
        return 'sharp';
    } else if (selectedKey.includes('b')) {
        return 'flat';
    } else if (selectedKey.includes('#')) {
        return 'sharp';
    } else {
        return 'natural'; // For 'C' and 'Am', which can be represented either way
    }
}

function getNoteIndex(selectedKey, notes) {
    let index = notes.indexOf(selectedKey);
    if (index === -1) {
        // Handle enharmonic equivalents
        const enharmonicMap = {
            'Db': 'C#',
            'Eb': 'D#',
            'Gb': 'F#',
            'Ab': 'G#',
            'Bb': 'A#',
            'C#': 'Db',
            'D#': 'Eb',
            'F#': 'Gb',
            'G#': 'Ab',
            'A#': 'Bb',
        };
        const enharmonicKey = enharmonicMap[selectedKey];
        index = notes.indexOf(enharmonicKey);
    }
    return index;
}

function getNoteName(noteIndex, accidentalPreference) {
    const enharmonics = {
        'C#': 'Db',
        'D#': 'Eb',
        'F#': 'Gb',
        'G#': 'Ab',
        'A#': 'Bb',
    };

    if (accidentalPreference === 'sharp') {
        return sharpNotes[noteIndex];
    } else if (accidentalPreference === 'flat') {
        return flatNotes[noteIndex];
    } else {
        const sharpNote = sharpNotes[noteIndex];
        return enharmonics[sharpNote] || sharpNote;
    }
}

function ChordDisplay({ selectedKey, scaleType }) {
    const { t } = useTranslation();
    const accidentalType = getAccidentalType(selectedKey);
    let notes;

    if (accidentalType === 'sharp') {
        notes = sharpNotes;
    } else if (accidentalType === 'flat') {
        notes = flatNotes;
    } else {
        notes = sharpNotes;
    }

    const rootIndex = getNoteIndex(selectedKey, notes);

    const diatonicChords = getDiatonicChords(rootIndex, scaleType, notes, accidentalType);
    const modalInterchanges = getModalInterchanges(rootIndex, scaleType, accidentalType);
    const secondaryDominants = getSecondaryDominants(rootIndex, scaleType, notes, accidentalType);

    return (
        <Grid container spacing={3} style={{ marginTop: '1rem' }}>
            <Grid item xs={12}>
                <Paper elevation={3} style={{ padding: '1rem' }}>
                    <Typography variant="h6" gutterBottom>
                        {t('diatonicChords', { key: selectedKey, scaleType: scaleType })}
                    </Typography>
                    <List>
                        {diatonicChords.map((chord, index) => (
                            <ListItem key={index}>
                                <ListItemText primary={`${getRomanNumeral(index, scaleType)}: ${chord}`} />
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            </Grid>

            <Grid item xs={12}>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h6">{t('modalInterchange')}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <small>{t('modalInterchangeExplanation')}</small>
                        <List>
                            {modalInterchanges.map((chord, index) => (
                                <ListItem key={index}>
                                    <ListItemText primary={chord} />
                                </ListItem>
                            ))}
                        </List>
                    </AccordionDetails>
                </Accordion>
            </Grid>

            <Grid item xs={12}>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h6">{t('secondaryDominants')}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <small>{t('secondaryDominantsExplanation')}</small>
                        <List>
                            {secondaryDominants.map((chord, index) => (
                                <ListItem key={index}>
                                    <ListItemText primary={chord} />
                                </ListItem>
                            ))}
                        </List>
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </Grid>
    );
}

function getDiatonicChords(rootIndex, scaleType, notes, accidentalType) {
    const mode = scaleType === 'Major' ? 'Ionian' : 'Aeolian';
    const scale = modes[mode].map((interval) => (rootIndex + interval) % 12);

    const chords = scale.map((noteIndex, degree) => {
        const note = getNoteName(noteIndex, accidentalType);
        const quality = getChordQuality(degree, scaleType);
        return `${note}${quality}`;
    });
    return chords;
}

function getChordQuality(degree, scaleType) {
    if (scaleType === 'Major') {
        switch (degree) {
            case 0:
            case 3:
            case 4:
                return ''; // Major
            case 1:
            case 2:
            case 5:
                return 'm'; // Minor
            case 6:
                return 'dim'; // Diminished
            default:
                return '';
        }
    } else {
        switch (degree) {
            case 0:
                return 'm'; // Minor
            case 1:
                return 'dim'; // Diminished
            case 2:
                return ''; // Major
            case 3:
            case 4:
                return 'm'; // Minor
            case 5:
            case 6:
                return ''; // Major
            default:
                return '';
        }
    }
}

function getModalInterchanges(rootIndex, scaleType, accidentalType) {
    const borrowedChords = [];
    let modeName;
    let degreesToInclude;
    let accidentalPreference = accidentalType;

    if (scaleType === 'Major') {
        // Borrow from parallel minor (Aeolian)
        modeName = 'Aeolian';
        degreesToInclude = [2, 5, 6]; // bIII, bVI, bVII

        // For natural keys, prefer flats in modal interchange
        if (accidentalType === 'natural') {
            accidentalPreference = 'flat';
        }
    } else {
        // Borrow from parallel major (Ionian)
        modeName = 'Ionian';
        degreesToInclude = [3, 4]; // IV, V
    }

    const modeIntervals = modes[modeName];
    const scale = modeIntervals.map((interval) => (rootIndex + interval) % 12);

    degreesToInclude.forEach((degree) => {
        const noteIndex = scale[degree];
        const note = getNoteName(noteIndex, accidentalPreference);
        const quality = getChordQuality(degree, modeName === 'Ionian' ? 'Major' : 'Minor');
        const chord = `${note}${quality}`;
        borrowedChords.push(`${getRomanNumeral(degree, modeName === 'Ionian' ? 'Major' : 'Minor')} (${chord})`);
    });

    return borrowedChords;
}

function getSecondaryDominants(rootIndex, scaleType, notes, accidentalType) {
    const mode = scaleType === 'Major' ? 'Ionian' : 'Aeolian';
    const scaleIntervals = modes[mode];
    const degreesToInclude = scaleType === 'Major' ? [1, 2, 3, 4, 5] : [0, 2, 3, 4];

    const chords = degreesToInclude.map((degree) => {
        const targetNoteIndex = (rootIndex + scaleIntervals[degree]) % 12;
        const fifthIndex = (targetNoteIndex + 7) % 12;
        const note = getNoteName(fifthIndex, accidentalType);
        const romanNumeral = getRomanNumeral(degree, scaleType);
        return `V7/${romanNumeral} (${note}7)`;
    });

    return chords;
}

function getRomanNumeral(degree, scaleType) {
    const numeralsMajor = ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii°'];
    const numeralsMinor = ['i', 'ii°', 'III', 'iv', 'v', 'VI', 'VII'];

    if (scaleType === 'Major') {
        return numeralsMajor[degree];
    } else {
        return numeralsMinor[degree];
    }
}

export default ChordDisplay;

