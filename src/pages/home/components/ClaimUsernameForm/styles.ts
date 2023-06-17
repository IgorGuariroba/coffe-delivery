import { Box, styled } from '@ignite-ui/react'

export const Form = styled(Box, {
  display: 'grid',
  gap: '$2',
  gridTemplateColumns: '1fr auto',
  marginTop: '$4',
  padding: '$4',

  '@media (max-width: 600px)': {
    gridTemplateColumns: '1fr',
  },
})
