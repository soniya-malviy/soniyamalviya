import { useState } from 'react'
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import Grid from '@mui/material/GridLegacy'
import { FaEnvelope, FaGithub, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa'
import { FaCode } from 'react-icons/fa6'
import { AnimatePresence, motion } from 'framer-motion'
import { profile } from './data/profile'
import type { Project } from './data/profile'
import { Section } from './components/Section'
import { ProjectCard } from './components/ProjectCard'
import { ProjectDetail } from './components/ProjectDetail'
import { ExperienceCard } from './components/ExperienceCard'
import { EducationSection } from './components/EducationSection'
import { SkillsSection } from './components/SkillsSection'
import { Hero } from './components/Hero'
import './App.css'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
}

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const nav = [
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ] as const

  return (
    <Box sx={{ position: 'relative' }}>
      <Box className="bg-blobs">
        <Box className="blob" />
        <Box className="blob" />
        <Box className="blob" />
        <Box className="blob" />
      </Box>

      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <AppBar elevation={0} position="sticky">
          <Toolbar sx={{ py: 0.5 }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 800,
                letterSpacing: -0.2,
                color: '#ffffff',
              }}
            >
              {profile.name}
            </Typography>
            <Box sx={{ flex: 1 }} />
            <Stack direction="row" spacing={0.5} sx={{ display: { xs: 'none', md: 'flex' } }}>
              {nav.map((item) => (
                <Button
                  key={item.id}
                  color="inherit"
                  size="small"
                  href={`#${item.id}`}
                  sx={{
                    textTransform: 'none',
                    fontSize: '0.85rem',
                    color: 'rgba(255,255,255,0.6)',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      color: '#ffffff',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Stack>
            <Stack direction="row" spacing={0.5} sx={{ ml: 1 }}>
              <IconButton
                size="small"
                aria-label="Email"
                component="a"
                href={`mailto:${profile.email}`}
                sx={{
                  color: 'rgba(255,255,255,0.5)',
                  '&:hover': { color: '#ffffff' },
                }}
              >
                <FaEnvelope />
              </IconButton>
            </Stack>
          </Toolbar>
        </AppBar>

        <Hero />

        <EducationSection />

        {/* EXPERIENCE */}
        <Box sx={{ py: { xs: 6, md: 8 } }}>
          <Container>
            <Section id="experience" title="Experience" subtitle="Roles and impact.">
              <Grid container spacing={2.5}>
                {profile.experience.map((e, i) => (
                  <Grid key={`${e.title}-${e.org}`} item xs={12} md={6}>
                    <ExperienceCard experience={e} index={i} />
                  </Grid>
                ))}
              </Grid>
            </Section>
          </Container>
        </Box>

        <SkillsSection />

        {/* PROJECTS */}
        <Box sx={{ py: { xs: 4, md: 6 } }}>
          <Container>
            <Section id="projects" title="Projects" subtitle="Selected work aligned to my resume.">
              <AnimatePresence mode="wait">
                {selectedProject ? (
                  <Box key="detail">
                    <ProjectDetail
                      project={selectedProject}
                      onBack={() => setSelectedProject(null)}
                    />

                    <Box sx={{ mt: 8 }}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 3 }}>
                          <Box
                            sx={{
                              width: 3,
                              height: 24,
                              borderRadius: 2,
                              backgroundColor: 'rgba(255,255,255,0.2)',
                            }}
                          />
                          <Typography variant="h5" sx={{ fontWeight: 700 }}>
                            View More Projects
                          </Typography>
                        </Stack>
                      </motion.div>

                      <Grid container spacing={3}>
                        {profile.projects
                          .filter((p) => p.name !== selectedProject.name)
                          .map((p, i) => (
                            <Grid key={p.name} item xs={12} md={6}>
                              <ProjectCard project={p} index={i} onOpen={setSelectedProject} />
                            </Grid>
                          ))}
                      </Grid>
                    </Box>
                  </Box>
                ) : (
                  <Box key="grid">
                    <Grid container spacing={3}>
                      {profile.projects.map((p, i) => (
                        <Grid key={p.name} item xs={12} md={6}>
                          <ProjectCard project={p} index={i} onOpen={setSelectedProject} />
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                )}
              </AnimatePresence>
            </Section>
          </Container>
        </Box>


        {/* CONTACT — full-bleed with video background */}
        <Box
          id="contact"
          sx={{
            position: 'relative',
            overflow: 'hidden',
            py: { xs: 8, md: 12 },
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
              src="https://xb8iarv25csjpbep.public.blob.vercel-storage.com/contact.mp4"
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
              justifyContent: 'center',
              minHeight: { xs: 400, md: 500 },
            }}
          >
            <Stack spacing={3} sx={{ maxWidth: 600 }}>
              <motion.div {...fadeInUp}>
                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
                  <Box
                    sx={{
                      width: 3,
                      height: 28,
                      borderRadius: 2,
                      backgroundColor: 'rgba(255,255,255,0.3)',
                    }}
                  />
                  <Typography variant="h4">Contact</Typography>
                </Stack>
                <Typography color="text.secondary" sx={{ ml: 3.25, mb: 3 }}>
                  Let's build something.
                </Typography>
              </motion.div>

              <motion.div {...fadeInUp}>
                <Typography
                  color="text.secondary"
                  sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}
                >
                  The fastest way to reach me is email. I'm open to internships, collaboration, and
                  interesting full-stack / AI projects.
                </Typography>
              </motion.div>

              <motion.div {...fadeInUp}>
                <Stack direction="row" spacing={1.5} sx={{ flexWrap: 'wrap', rowGap: 1.5 }}>
                  <Button
                    variant="contained"
                    component="a"
                    href={`mailto:${profile.email}`}
                    startIcon={<FaEnvelope />}
                    size="large"
                    sx={{ px: 5, py: 1.3, borderRadius: 3 }}
                  >
                    Email Me
                  </Button>
                  <Button
                    variant="outlined"
                    component="a"
                    href={profile.links[0].href}
                    target="_blank"
                    rel="noopener"
                    startIcon={<FaExternalLinkAlt />}
                    size="large"
                    sx={{ px: 5, py: 1.3, borderRadius: 3 }}
                  >
                    GitHub Profile
                  </Button>
                </Stack>
              </motion.div>

              <motion.div {...fadeInUp}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontFamily: 'monospace', opacity: 0.5 }}
                >
                  {profile.email}
                </Typography>
              </motion.div>
            </Stack>
          </Container>
        </Box>

        <Container>

          {/* FOOTER */}
          <Divider sx={{ mt: 8, mb: 3 }} />
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={1}
            alignItems={{ xs: 'flex-start', md: 'center' }}
            justifyContent="space-between"
            sx={{ pb: 4 }}
          >
            <Typography variant="caption" color="text.secondary">
              © {new Date().getFullYear()} {profile.name}. Built with React & MUI.
            </Typography>
            <Stack direction="row" spacing={1}>
              {profile.links.map((link) => {
                const icons: Record<string, typeof FaGithub> = {
                  GitHub: FaGithub,
                  LinkedIn: FaLinkedin,
                  LeetCode: FaCode,
                }
                const Icon = icons[link.label]
                return (
                  <Button
                    key={link.label}
                    size="small"
                    variant="text"
                    href={link.href}
                    target="_blank"
                    rel="noopener"
                    startIcon={Icon ? <Icon /> : undefined}
                    sx={{
                      textTransform: 'none',
                      fontSize: '0.8rem',
                      color: 'rgba(255,255,255,0.45)',
                      '&:hover': { color: '#ffffff', backgroundColor: 'rgba(255,255,255,0.05)' },
                    }}
                  >
                    {link.label}
                  </Button>
                )
              })}
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default App
