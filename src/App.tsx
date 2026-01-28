import {
  AppBar,
  Box,
  Button,
  Chip,
  Container,
  Divider,
  IconButton,
  Link,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import Grid from '@mui/material/GridLegacy'
import { FaEnvelope } from 'react-icons/fa6'
import { profile } from './data/profile'
import { Section } from './components/Section'
import { ProjectCard } from './components/ProjectCard'
import { ExperienceCard } from './components/ExperienceCard'
import { Hero } from './components/Hero'
import './App.css'

function App() {
  const nav = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ] as const

  return (
    <Box>
      <AppBar elevation={0} position="sticky">
        <Toolbar>
          <Typography variant="subtitle1" sx={{ fontWeight: 800, letterSpacing: -0.2 }}>
            {profile.name}
          </Typography>
          <Box sx={{ flex: 1 }} />
          <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
            {nav.map((item) => (
              <Button
                key={item.id}
                color="inherit"
                size="small"
                href={`#${item.id}`}
                sx={{ textTransform: 'none' }}
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
              sx={{ color: 'text.primary' }}
            >
              <FaEnvelope />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>

      <Hero />

      <Container sx={{ py: { xs: 6, md: 10 } }}>
        <Section
          id="about"
          title="About"
          subtitle="A short, professional snapshot."
        >
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Typography color="text.secondary">
                I’m a B.Tech CSE & AI student building full-stack products with modern web tooling.
                I enjoy shipping clean, responsive UIs, designing robust APIs, and exploring applied
                AI (RAG and transformers) for practical developer experiences.
              </Typography>
             
              <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: 'wrap' }}>
               
              </Stack>
              <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
  {profile.links.map((link) => (
    <Button
      key={link.label}
      size="small"
      variant={link.label === 'Resume' ? 'contained' : 'outlined'}
      href={link.href}
      target="_blank"
      rel="noopener"
    >
      {link.label}
    </Button>
  ))}
</Stack>


</Stack>

              
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                component="img"
                alt={`${profile.name} portrait`}
                src="/assets/me.png"
                sx={{
                  width: '100%',
                  maxWidth: 340,
                  borderRadius: 4,
                  border: '1px solid rgba(255,255,255,0.12)',
                  boxShadow: '0 24px 80px rgba(0,0,0,0.55)',
                  display: 'block',
                  mx: { xs: 'auto', md: 0 },
                }}
              />
            </Grid>
          </Grid>
        </Section>

        <Section id="skills" title="Technical skills" subtitle="A quick overview of tools I work with.">
          <Grid container spacing={2.25}>
            {[
              { label: 'Programming', items: profile.skills.programming },
              { label: 'Frameworks', items: profile.skills.frameworks },
              { label: 'Backend', items: profile.skills.backend },
              { label: 'Databases', items: profile.skills.databases },
              { label: 'AI / ML', items: profile.skills.aiMl },
              { label: 'Tools', items: profile.skills.tools },
            ].map((group) => (
              <Grid key={group.label} item xs={12} md={6}>
                <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 1 }}>
                  {group.label}
                </Typography>
                <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', rowGap: 1 }}>
                  {group.items.map((x) => (
                    <Chip key={x} size="small" label={x} />
                  ))}
                </Stack>
              </Grid>
            ))}
            <Grid item xs={12}>
              <Divider sx={{ my: 1.5, borderColor: 'rgba(255,255,255,0.08)' }} />
              <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 1 }}>
                Problem solving
              </Typography>
              <Stack spacing={0.75}>
                {profile.skills.problemSolving.map((x) => (
                  <Typography key={x} color="text.secondary">
                    • {x}
                  </Typography>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Section>

        <Section id="projects" title="Projects" subtitle="Selected work aligned to my resume.">
          <Grid container spacing={2.25}>
            {profile.projects.map((p) => (
              <Grid key={p.name} item xs={12} md={6}>
                <ProjectCard project={p} />
              </Grid>
            ))}
          </Grid>
        </Section>

        <Section id="experience" title="Experience" subtitle="Roles and impact.">
          <Grid container spacing={2.25}>
            {profile.experience.map((e) => (
              <Grid key={`${e.title}-${e.org}`} item xs={12} md={6}>
                <ExperienceCard experience={e} />
              </Grid>
              
            ))}
          </Grid>
        </Section>

        <Section id="education" title="Education" subtitle="Academic background.">
          <Typography sx={{ fontWeight: 800 }}>{profile.education[0].school}</Typography>
          <Typography color="text.secondary">{profile.education[0].degree}</Typography>
          <Typography color="text.secondary">
            {profile.education[0].dates} • GPA: {profile.education[0].gpa}
          </Typography>
        </Section>

        <Section id="contact" title="Contact" subtitle="Let’s build something.">
          <Stack spacing={1.25} sx={{ maxWidth: 760 }}>
            <Typography color="text.secondary">
              The fastest way to reach me is email. I’m open to internships, collaboration, and
              interesting full-stack / AI projects.
            </Typography>
            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', rowGap: 1 }}>
              <Button
                variant="contained"
                color="primary"
                component="a"
                href={`mailto:${profile.email}`}
                sx={{ textTransform: 'none' }}
              >
                Email me
              </Button>
              
            </Stack>
            <Typography variant="caption" color="text.secondary">
              {profile.email}
            </Typography>
          </Stack>
        </Section>

        <Divider sx={{ mt: 6, mb: 2, borderColor: 'rgba(255,255,255,0.08)' }} />
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={1}
          alignItems={{ xs: 'flex-start', md: 'center' }}
          justifyContent="space-between"
        >
          <Typography variant="caption" color="text.secondary">
            © {new Date().getFullYear()} {profile.name}
          </Typography>
          <Stack direction="row" spacing={2}>
            {profile.links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                underline="hover"
                color="text.secondary"
                target="_blank"
                rel="noreferrer"
              >
                {l.label}
              </Link>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default App
