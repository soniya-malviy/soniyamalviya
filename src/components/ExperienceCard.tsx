import {
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
  Button,
  Box,
} from '@mui/material'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'
import type { Experience } from '../data/profile'

export function ExperienceCard({
  experience,
  index,
}: {
  experience: Experience
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Card
        sx={{
          height: '100%',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: 3,
            height: '100%',
            backgroundColor: 'rgba(255,255,255,0.2)',
            borderRadius: '12px 0 0 12px',
          },
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 16px 48px rgba(0,0,0,0.3)',
            border: '1px solid rgba(255,255,255,0.1)',
          },
          transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <CardContent sx={{ p: 3, pl: 4 }}>
          <Stack direction="row" spacing={1} alignItems="baseline" sx={{ flexWrap: 'wrap' }}>
            <Typography sx={{ fontWeight: 800, fontSize: '1.1rem' }}>
              {experience.title}
            </Typography>
            <Typography color="text.secondary" sx={{ fontWeight: 500 }}>
              — {experience.org}
            </Typography>
          </Stack>

          <Typography
            variant="caption"
            sx={{
              color: 'rgba(255,255,255,0.4)',
              fontWeight: 500,
              fontSize: '0.8rem',
            }}
          >
            {experience.dates}
            {experience.location ? ` • ${experience.location}` : ''}
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Stack spacing={0.75}>
            {experience.bullets.map((b) => (
              <Box key={b} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                <Box
                  sx={{
                    mt: '8px',
                    width: 5,
                    height: 5,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.25)',
                    flexShrink: 0,
                  }}
                />
                <Typography color="text.secondary" sx={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {b}
                </Typography>
              </Box>
            ))}
          </Stack>

          {experience.demoUrl && (
            <Button
              sx={{ mt: 2.5 }}
              size="small"
              variant="contained"
              href={experience.demoUrl}
              target="_blank"
              rel="noopener"
              startIcon={<FaExternalLinkAlt />}
            >
              Live Demo
            </Button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}
