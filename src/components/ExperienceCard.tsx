import { Card, CardContent, Divider, Stack, Typography, Button } from '@mui/material'
import type { Experience } from '../data/profile'

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Stack direction="row" spacing={1} alignItems="baseline" sx={{ flexWrap: 'wrap' }}>
          <Typography sx={{ fontWeight: 900 }}>
            {experience.title}
          </Typography>
          <Typography color="text.secondary">
            — {experience.org}
          </Typography>
        </Stack>

        <Typography variant="caption" color="text.secondary">
          {experience.dates}
          {experience.location ? ` • ${experience.location}` : ''}
        </Typography>

        <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.08)' }} />

        <Stack spacing={0.75}>
          {experience.bullets.map((b) => (
            <Typography key={b} color="text.secondary">
              • {b}
            </Typography>
          ))}
        </Stack>

        {/* 🎯 Show ONLY when demoUrl exists */}
        {experience.demoUrl && (
          <Button
            sx={{ mt: 2 }}
            size="small"
            variant="contained"
            href={experience.demoUrl}
            target="_blank"
            rel="noopener"
          >
            Live Demo
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
