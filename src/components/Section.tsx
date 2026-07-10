import { Box, Stack, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export function Section(props: {
  id: string
  title: string
  subtitle?: string
  children: ReactNode
}) {
  return (
    <Box id={props.id} sx={{ scrollMarginTop: 90, py: { xs: 6, md: 8 } }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Stack spacing={1} sx={{ mb: 4 }}>
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Box
              sx={{
                width: 3,
                height: 28,
                borderRadius: 2,
                backgroundColor: 'rgba(255,255,255,0.3)',
              }}
            />
            <Typography variant="h4">{props.title}</Typography>
          </Stack>
          {props.subtitle ? (
            <Typography color="text.secondary" sx={{ ml: 3.25 }}>
              {props.subtitle}
            </Typography>
          ) : null}
        </Stack>
      </motion.div>
      {props.children}
    </Box>
  )
}
