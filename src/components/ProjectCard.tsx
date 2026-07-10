import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
} from '@mui/material'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import type { Project } from '../data/profile'

interface ProjectCardProps {
  project: Project
  index: number
  onOpen: (project: Project) => void
}

export function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const stop = (e: React.MouseEvent) => e.stopPropagation()

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
    >
      <Card
        onClick={() => onOpen(project)}
        sx={{
          height: '100%',
          overflow: 'hidden',
          position: 'relative',
          cursor: 'pointer',
          '&:hover': {
            transform: 'translateY(-6px)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
            border: '1px solid rgba(255,255,255,0.12)',
          },
          transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <Box
          sx={{
            height: 180,
            background: project.gradient,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {project.image ? (
            <Box
              component="img"
              src={project.image}
              alt={project.name}
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
              }}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'absolute',
                inset: 0,
              }}
            />
          ) : null}
          <Typography
            sx={{
              fontSize: 64,
              position: 'relative',
              zIndex: 1,
              filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))',
            }}
          >
            {project.icon}
          </Typography>
          <Box
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 6px)',
              gap: '6px',
              opacity: 0.25,
              zIndex: 1,
            }}
          >
            {Array.from({ length: 9 }).map((_, i) => (
              <Box
                key={i}
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.6)',
                }}
              />
            ))}
          </Box>
        </Box>

        <CardContent sx={{ p: 3 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 800,
              mb: 0.5,
              fontSize: '1.15rem',
            }}
          >
            {project.name}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mb: 2,
              lineHeight: 1.6,
              fontSize: '0.875rem',
            }}
          >
            {project.description}
          </Typography>

          <Stack
            direction="row"
            spacing={0.75}
            sx={{ mb: 2, flexWrap: 'wrap', rowGap: 0.75 }}
          >
            {project.stack.map((x) => (
              <Chip key={x} size="small" label={x} sx={{ fontSize: '0.75rem', height: 26 }} />
            ))}
          </Stack>

          <Stack direction="row" spacing={1.5}>
            {project.githubUrl && (
              <Button
                size="small"
                variant="outlined"
                href={project.githubUrl}
                target="_blank"
                rel="noopener"
                startIcon={<FaGithub />}
                onClick={stop}
                sx={{
                  borderRadius: 2,
                  fontSize: '0.8rem',
                }}
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
                startIcon={<FaExternalLinkAlt />}
                onClick={stop}
                sx={{
                  borderRadius: 2,
                  fontSize: '0.8rem',
                }}
              >
                Live Demo
              </Button>
            )}
          </Stack>
        </CardContent>
      </Card>
    </motion.div>
  )
}
