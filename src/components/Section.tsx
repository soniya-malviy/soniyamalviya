import { Box, Stack, Typography } from '@mui/material'
import type { ReactNode } from 'react'

export function Section(props: {
  id: string
  title: string
  subtitle?: string
  children: ReactNode
}) {
  return (
    <Box id={props.id} sx={{ scrollMarginTop: 90, py: { xs: 5, md: 7 } }}>
      <Stack spacing={0.75} sx={{ mb: 3 }}>
        <Typography variant="h4">{props.title}</Typography>
        {props.subtitle ? (
          <Typography color="text.secondary">{props.subtitle}</Typography>
        ) : null}
      </Stack>
      {props.children}
    </Box>
  )
}

