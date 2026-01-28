import {
  Card,
  CardContent,
  Chip,
  Divider,
  Stack,
  Typography,
  Button,
} from '@mui/material'
import type { Project } from '../data/profile'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography sx={{ fontWeight: 900 }}>
          {project.name}
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          sx={{ mt: 1, flexWrap: 'wrap', rowGap: 1 }}
        >
          {project.stack.map((x) => (
            <Chip key={x} size="small" label={x} />
          ))}
        </Stack>

        <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.08)' }} />

        <Stack spacing={0.75}>
          {project.bullets.map((b) => (
            <Typography key={b} color="text.secondary">
              • {b}
            </Typography>
          ))}
        </Stack>

        {/* 🔗 Buttons */}
        {(project.githubUrl || project.demoUrl) && (
          <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
            {project.githubUrl && (
              <Button
                size="small"
                variant="outlined"
                href={project.githubUrl}
                target="_blank"
                rel="noopener"
              >
                GitHub
              </Button>
            )}

            {project.demoUrl && (
              <Button
                size="small"
                variant="contained"
                href={project.demoUrl}
                target="_blank"
                rel="noopener"
              >
                Live Demo
              </Button>
            )}
          </Stack>
        )}
      </CardContent>
    </Card>
  )
}
