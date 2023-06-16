import { styled } from '@ignite-ui/react';
import {Heading, Text } from '@ignite-ui/react'

export const Container = styled('div', {
    maxWidth: 'calc(100vw - ((100vw - 1160px) / 2))',
    marginLeft: 'auto',
    height:'100vh',
    display: 'flex',
    alignItems: 'center',
    gap: '$20',
    overflow: 'hidden',
})

export const Hero = styled('div', {
    maxWidth: 480,
    padding: '0 $10',
    [`${Heading}`]: {
        fontSize: '$6xl',
    },
    [`${Text}`]: {
        marginTop: '$2',
        colorGreen: '$gray200',
    },
})

export const Preview = styled('div', {
    paddingRight: '$8',
    overflow: 'hidden',
    '@media (max-width: 600px)': {
        display: 'none',
    },
})