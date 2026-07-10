import {
  Box,
  Button,
  Chip,
  Divider,
  Stack,
  Typography,
} from '@mui/material'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa'
import type { Project } from '../data/profile'

interface ProjectDetailProps {
  project: Project
  onBack: () => void
}

export function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <Button
          onClick={onBack}
          startIcon={<FaArrowLeft />}
          sx={{
            mb: 3,
            textTransform: 'none',
            color: 'rgba(255,255,255,0.7)',
            fontWeight: 600,
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.05)',
              color: '#ffffff',
            },
          }}
        >
          All Projects
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        <Box
          sx={{
            height: { xs: 240, sm: 320, md: 380 },
            borderRadius: 4,
            background: project.gradient,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            mb: 4,
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
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(circle at 20% 35%, rgba(255,255,255,0.18) 0%, transparent 55%)',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(circle at 80% 75%, rgba(0,0,0,0.15) 0%, transparent 50%)',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 20,
              left: 20,
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 10px)',
              gap: '10px',
              opacity: 0.2,
            }}
          >
            {Array.from({ length: 25 }).map((_, i) => (
              <Box
                key={i}
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.6)',
                }}
              />
            ))}
          </Box>
          <Box
            sx={{
              position: 'absolute',
              bottom: 20,
              right: 20,
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 10px)',
              gap: '10px',
              opacity: 0.2,
            }}
          >
            {Array.from({ length: 25 }).map((_, i) => (
              <Box
                key={i}
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.6)',
                }}
              />
            ))}
          </Box>
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              opacity: 0.05,
              backgroundImage:
                'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,1) 35px, rgba(255,255,255,1) 36px)',
            }}
          />
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Typography
              sx={{
                fontSize: { xs: 80, sm: 100, md: 120 },
                position: 'relative',
                zIndex: 1,
                filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.35))',
              }}
            >
              
            </Typography>
          </motion.div>
        </Box>
      </motion.div>

      <Box sx={{ maxWidth: 800 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              mb: 1.5,
              fontSize: { xs: '1.8rem', sm: '2.2rem' },
            }}
          >
            {project.name}
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
        >
          <Typography
            color="text.secondary"
            sx={{
              fontSize: '1.1rem',
              lineHeight: 1.75,
              mb: 3,
            }}
          >
            {project.description}
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.25 }}
        >
          <Typography
            variant="overline"
            sx={{
              color: 'rgba(255,255,255,0.45)',
              fontWeight: 700,
              letterSpacing: 1.5,
              mb: 1.25,
              display: 'block',
            }}
          >
            Tech Stack
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            sx={{ mb: 3.5, flexWrap: 'wrap', rowGap: 1 }}
          >
            {project.stack.map((x) => (
              <Chip
                key={x}
                label={x}
                sx={{ fontSize: '0.85rem', height: 32, fontWeight: 600 }}
              />
            ))}
          </Stack>
        </motion.div>

        <Divider sx={{ mb: 3.5 }} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.3 }}
        >
          <Typography
            variant="overline"
            sx={{
              color: 'rgba(255,255,255,0.45)',
              fontWeight: 700,
              letterSpacing: 1.5,
              mb: 2,
              display: 'block',
            }}
          >
            Key Features
          </Typography>
          <Stack spacing={1.75} sx={{ mb: 4 }}>
            {project.bullets.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 0.35 + i * 0.06 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                  <Box
                    sx={{
                      mt: '9px',
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255,255,255,0.3)',
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    color="text.secondary"
                    sx={{ fontSize: '1rem', lineHeight: 1.7 }}
                  >
                    {b}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Stack>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.4 }}
        >
          <Stack direction="row" spacing={1.5} sx={{ flexWrap: 'wrap', rowGap: 1.5 }}>
            {project.githubUrl && (
              <Button
                variant="outlined"
                href={project.githubUrl}
                target="_blank"
                rel="noopener"
                startIcon={<FaGithub />}
                size="large"
                sx={{ borderRadius: 3, px: 4, py: 1.2 }}
              >
                View Source Code
              </Button>
            )}
            {project.demoUrl && (
              <Button
                variant="contained"
                href={project.demoUrl}
                target="_blank"
                rel="noopener"
                startIcon={<FaExternalLinkAlt />}
                size="large"
                sx={{ borderRadius: 3, px: 4, py: 1.2 }}
              >
                Open Live Demo
              </Button>
            )}
          </Stack>
        </motion.div>
      </Box>
    </motion.div>
  )
}
