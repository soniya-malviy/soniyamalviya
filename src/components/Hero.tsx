import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { useEffect, useState } from 'react'

export function Hero() {
  const [typed, setTyped] = useState('')
  const name = profile.name

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      i++
      setTyped(name.slice(0, i))
      if (i >= name.length) clearInterval(interval)
    }, 90)
    return () => clearInterval(interval)
  }, [name])

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Video background — right-aligned */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: { xs: '100%', md: '65%' },
          height: '100%',
          overflow: 'hidden',
        }}
      >
        <Box
          component="video"
          src="/assets/backgound.mp4"
          autoPlay
          loop
          muted
          playsInline
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>

      {/* Gradient overlay — dark left fading to transparent right */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: {
            xs: 'linear-gradient(180deg, #0a0a0a 0%, rgba(10,10,10,0.7) 50%, #0a0a0a 100%)',
            md: 'linear-gradient(90deg, #0a0a0a 0%, #0a0a0a 40%, rgba(10,10,10,0.5) 65%, transparent 100%)',
          },
          zIndex: 1,
        }}
      />

      {/* Additional left-side solid cover for text readability */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: { md: '50%' },
          height: '100%',
          background: 'linear-gradient(90deg, #0a0a0a 0%, rgba(10,10,10,0.85) 70%, transparent 100%)',
          zIndex: 1,
        }}
      />

      {/* Subtle grid */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* Content — left-aligned */}
      <Container
        sx={{
          position: 'relative',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'flex-start' },
          justifyContent: 'center',
          textAlign: { xs: 'center', md: 'left' },
          minHeight: '100vh',
          py: 8,
        }}
      >
        <Stack spacing={3} alignItems={{ xs: 'center', md: 'flex-start' }} sx={{ maxWidth: 700 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: 48, sm: 64, md: 84 },
                lineHeight: 1.0,
                color: '#ffffff',
              }}
            >
              {typed}
              <Box
                component="span"
                sx={{
                  display: 'inline-block',
                  width: { xs: 3, md: 4 },
                  height: { xs: 40, sm: 52, md: 68 },
                  ml: 0.5,
                  backgroundColor: '#ffffff',
                  verticalAlign: 'bottom',
                  animation: 'blink 1s step-end infinite',
                  '@keyframes blink': {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0 },
                  },
                }}
              />
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Typography
              color="text.secondary"
              sx={{
                fontSize: { xs: 16, md: 19 },
                lineHeight: 1.75,
                maxWidth: 540,
              }}
            >
              {profile.headline}
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Stack direction="row" spacing={1.5} sx={{ flexWrap: 'wrap', rowGap: 1.5, justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <Button
                variant="contained"
                href={profile.links.find((l) => l.label === 'Resume')?.href ?? '#'}
                target="_blank"
                rel="noopener"
                size="large"
                sx={{
                  px: 5,
                  py: 1.3,
                  fontSize: '0.95rem',
                  borderRadius: 3,
                }}
              >
                Resume
              </Button>
              <Button
                variant="outlined"
                href="#projects"
                size="large"
                sx={{
                  px: 5,
                  py: 1.3,
                  fontSize: '0.95rem',
                  borderRadius: 3,
                }}
              >
                View Work
              </Button>
            </Stack>
          </motion.div>
        </Stack>
      </Container>
    </Box>
  )
}
