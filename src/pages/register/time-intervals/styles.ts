import { Box, styled, Text } from '@ignite-ui/react'

export const IntervalBox = styled(Box, {
  marginTop: '$6',
  display: 'flex',
  flexDirection: 'column',
})

export const IntevalsContainer = styled('div', {
  border: '1px solid $gray600',
  boderRadius: '$md',
  marginBottom: '$4',
})

export const IntervalItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '$3 $4',

  '& + &': {
    borderTop: '1px solid $gray600',
  },
})

export const IntervalDay = styled('span', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
})

export const IntervalInputs = styled('span', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',

  'input::-webkit-calendar-picker-indicator': {
    filter: 'invert(100%) brightness(40%)',
  },
})

export const FormError = styled(Text, {
  color: '#f75a68',
  marginBottom: '$4',
})
