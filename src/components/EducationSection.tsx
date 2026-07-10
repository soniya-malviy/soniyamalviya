import { Box, Container, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/GridLegacy'
import { motion } from 'framer-motion'
import { profile } from '../data/profile'

export function EducationSection() {
  return (
    <Box
      id="education"
      sx={{
        position: 'relative',
        scrollMarginTop: 90,
        py: { xs: 8, md: 12 },
        overflow: 'hidden',
      }}
    >
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Stack spacing={1} sx={{ mb: 5 }}>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Box
                sx={{
                  width: 3,
                  height: 28,
                  borderRadius: 2,
                  backgroundColor: 'rgba(255,255,255,0.3)',
                }}
              />
              <Typography variant="h4">Education</Typography>
            </Stack>
            <Typography color="text.secondary" sx={{ ml: 3.25 }}>
              Academic journey so far.
            </Typography>
          </Stack>
        </motion.div>

        <Grid container spacing={5} alignItems="start">
          {/* Left: Education cards */}
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
                {profile.education.map((edu, i) => (
                  <motion.div
                    key={edu.school}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
                    }}
                  >
                    <Box
                      sx={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: 3,
                        p: 3,
                        position: 'relative',
                        overflow: 'hidden',
                        '&:hover': {
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 12px 40px rgba(0,0,0,0.2)',
                        },
                        transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
                      }}
                    >
                      {/* Left accent */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: 3,
                          height: '100%',
                          background:
                            edu.type === 'college'
                              ? 'linear-gradient(180deg, rgba(255,255,255,0.4), rgba(255,255,255,0.05))'
                              : 'linear-gradient(180deg, rgba(255,255,255,0.15), rgba(255,255,255,0.03))',
                        }}
                      />

                      {/* Timeline dot + year */}
                      <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1.5 }}>
                        <Box
                          sx={{
                            width: 9,
                            height: 9,
                            borderRadius: '50%',
                            border: '2px solid rgba(255,255,255,0.25)',
                            backgroundColor:
                              edu.type === 'college'
                                ? 'rgba(255,255,255,0.15)'
                                : 'transparent',
                            flexShrink: 0,
                          }}
                        />
                        <Typography
                          variant="caption"
                          sx={{
                            color: 'rgba(255,255,255,0.35)',
                            fontWeight: 600,
                            letterSpacing: 1,
                            textTransform: 'uppercase',
                            fontSize: '0.68rem',
                          }}
                        >
                          {edu.dates}
                        </Typography>
                      </Stack>

                      {/* School name */}
                      <Typography
                        sx={{
                          fontWeight: 800,
                          fontSize: '1rem',
                          lineHeight: 1.3,
                          mb: 0.5,
                        }}
                      >
                        {edu.school}
                      </Typography>

                      {/* Degree */}
                      <Typography
                        color="text.secondary"
                        sx={{
                          fontSize: '0.85rem',
                          lineHeight: 1.5,
                          mb: 1.5,
                        }}
                      >
                        {edu.degree}
                      </Typography>

                      {/* Bottom row: badge + type */}
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Box
                          sx={{
                            display: 'inline-block',
                            px: 1.25,
                            py: 0.35,
                            borderRadius: 1.5,
                            backgroundColor: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.06)',
                          }}
                        >
                          <Typography
                            variant="caption"
                            sx={{
                              fontWeight: 700,
                              color: 'rgba(255,255,255,0.6)',
                              fontSize: '0.7rem',
                            }}
                          >
                            {edu.type === 'college' ? 'GPA' : 'Score'}: {edu.gpa}
                          </Typography>
                        </Box>
                        <Typography
                          variant="caption"
                          sx={{
                            color: 'rgba(255,255,255,0.2)',
                            fontWeight: 500,
                            fontSize: '0.65rem',
                            textTransform: 'uppercase',
                            letterSpacing: 0.8,
                          }}
                        >
                          {edu.type === 'college' ? 'University' : 'School'}
                        </Typography>
                      </Stack>
                    </Box>
                  </motion.div>
                ))}
              </Stack>
          </Grid>

          {/* Right: Image */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.92, x: 30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ width: '100%' }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: { xs: 420, sm: 520, md: 620 },
                  borderRadius: 4,
                  overflow: 'hidden',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  background:
                    'radial-gradient(circle at 50% 30%, rgba(255,255,255,0.08), rgba(255,255,255,0.02) 45%, rgba(0,0,0,0) 70%), linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(20,20,20,0.6) 55%, rgba(0,0,0,0.85) 100%)',
                  // border: '1px solid rgba(255,255,255,0.06)',
                  boxShadow: 'inset 0 0 80px rgba(0,0,0,0.6), 0 20px 60px rgba(0,0,0,0.35)',
                  mt:-8
                }}
              >
                {/* soft ambient glow behind subject */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '20%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '70%',
                    height: '70%',
                    borderRadius: '50%',
                    background:
                      'radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 55%, transparent 75%)',
                    filter: 'blur(10px)',
                    pointerEvents: 'none',
                  }}
                />

                {/* vignette edges to blend into theme */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(90deg, rgba(0,0,0,0.5) 0%, transparent 15%, transparent 85%, rgba(0,0,0,0.5) 100%), linear-gradient(0deg, rgba(0,0,0,0.7) 0%, transparent 25%)',
                    pointerEvents: 'none',
                  }}
                />

                <Box
                  component="img"
                  alt={profile.name}
                  src="/assets/me.png"
                  sx={{
                    position: 'relative',
                    zIndex: 1,
                    width: "auto",
                    maxWidth:680,
                    height: '100%',
                    objectFit: 'stretch',
                    objectPosition: 'bottom',
                    filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.5))',
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}