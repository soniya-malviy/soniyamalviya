import { Box, Container, Stack, Typography } from '@mui/material'
import { motion, useInView } from 'framer-motion'
import { keyframes } from '@emotion/react'
import { useRef } from 'react'
import { profile } from '../data/profile'
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiAmazonwebservices,
  SiGit,
  SiGithub,
} from 'react-icons/si'
import { FaRobot, FaBrain, FaDatabase, FaCogs, FaTools, FaServer, FaLink } from 'react-icons/fa'

const skillIcons: Record<string, { icon: React.ReactNode; color: string }> = {
  Python: { icon: <SiPython size={16} />, color: '#3776AB' },
  JavaScript: { icon: <SiJavascript size={16} />, color: '#F7DF1E' },
  TypeScript: { icon: <SiTypescript size={16} />, color: '#3178C6' },
  'React.js': { icon: <SiReact size={16} />, color: '#61DAFB' },
  'Next.js': { icon: <SiNextdotjs size={16} />, color: '#FFFFFF' },
  'Node.js': { icon: <SiNodedotjs size={16} />, color: '#339933' },
  'Express.js': { icon: <SiExpress size={16} />, color: '#FFFFFF' },
  MongoDB: { icon: <SiMongodb size={16} />, color: '#47A248' },
  PostgreSQL: { icon: <SiPostgresql size={16} />, color: '#4169E1' },
  SQL: { icon: <FaDatabase size={14} />, color: '#8B5CF6' },
  'AWS (EC2, S3)': { icon: <SiAmazonwebservices size={16} />, color: '#FF9900' },
  Git: { icon: <SiGit size={16} />, color: '#F05032' },
  GitHub: { icon: <SiGithub size={16} />, color: '#FFFFFF' },
  'RESTful API Design': { icon: <FaLink size={14} />, color: '#10B981' },
  'JWT Authentication': { icon: <FaServer size={14} />, color: '#F59E0B' },
  'MERN Stack': { icon: <SiReact size={16} />, color: '#61DAFB' },
  Transformers: { icon: <FaBrain size={14} />, color: '#FF6F00' },
  'Attention Mechanisms': { icon: <FaBrain size={14} />, color: '#E91E63' },
  'RAG Pipelines': { icon: <FaBrain size={14} />, color: '#9C27B0' },
  'Machine Learning Models': { icon: <FaCogs size={14} />, color: '#00BCD4' },
  'Vision Transformer': { icon: <FaBrain size={14} />, color: '#FF5722' },
}

const groupIcons: Record<string, React.ReactNode> = {
  Programming: <FaCogs size={16} />,
  Frameworks: <SiReact size={16} />,
  Backend: <FaServer size={16} />,
  Databases: <FaDatabase size={16} />,
  'AI / ML': <FaBrain size={16} />,
  Tools: <FaTools size={16} />,
  'Coding Agents': <FaRobot size={16} />,
}

const groups = [
  { label: 'Programming', items: profile.skills.programming },
  { label: 'Frameworks', items: profile.skills.frameworks },
  { label: 'Backend', items: profile.skills.backend },
  { label: 'Databases', items: profile.skills.databases },
  { label: 'AI / ML', items: profile.skills.AIMl },
  { label: 'Tools', items: profile.skills.tools },
  { label: 'Coding Agents', items: profile.skills.CoodingAgents },
]

function SkillPill({ text }: { text: string }) {
  const skill = skillIcons[text]
  return (
    <Box
      sx={{
        px: 2,
        py: 1,
        borderRadius: 2,
        backgroundColor: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.07)',
        fontSize: '0.8rem',
        fontWeight: 500,
        color: 'rgba(255,255,255,0.7)',
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        transition: 'all 0.3s ease',
        cursor: 'default',
        '&:hover': {
          backgroundColor: skill
            ? `${skill.color}15`
            : 'rgba(255,255,255,0.08)',
          border: `1px solid ${skill ? `${skill.color}40` : 'rgba(255,255,255,0.15)'}`,
          color: skill?.color || '#ffffff',
          '& .skill-icon': {
            color: skill?.color || '#ffffff',
          },
        },
      }}
    >
      {skill && (
        <Box
          className="skill-icon"
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: skill.color,
            flexShrink: 0,
            transition: 'color 0.3s ease',
          }}
        >
          {skill.icon}
        </Box>
      )}
      <Typography
        component="span"
        sx={{
          fontSize: '0.8rem',
          fontWeight: 500,
          lineHeight: 1.2,
        }}
      >
        {text}
      </Typography>
    </Box>
  )
}

function MarqueeRow({ items, reverse, speed = 20 }: { items: string[]; reverse?: boolean; speed?: number }) {
  const duplicated = [...items, ...items, ...items]
  const duration = items.length * speed

  const scroll = keyframes`
    0% { transform: translateX(0); }
    100% { transform: translateX(${reverse ? '33.333%' : '-33.333%'}); }
  `

  return (
    <Box
      sx={{
        width: '100%',
        overflow: 'hidden',
        maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
        py: 0.5,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          width: 'fit-content',
          animation: `${scroll} ${duration}s linear infinite`,
          '&:hover': {
            animationPlayState: 'paused',
          },
        }}
      >
        {duplicated.map((item, i) => (
          <SkillPill key={`${item}-${i}`} text={item} />
        ))}
      </Box>
    </Box>
  )
}

function SkillGroup({ group, groupIndex }: { group: typeof groups[number]; groupIndex: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: groupIndex * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <Box
        sx={{
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.05)',
          borderRadius: 4,
          px: 3,
          py: 2,
          position: 'relative',
          overflow: 'hidden',
          '&:hover': {
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
          },
          transition: 'all 0.4s ease',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: -40,
            right: -40,
            width: 120,
            height: 120,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1.5 }}>
          <Box sx={{ display: 'flex', color: 'rgba(255,255,255,0.5)' }}>
            {groupIcons[group.label]}
          </Box>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 700,
              color: 'rgba(255,255,255,0.5)',
              fontSize: '0.75rem',
              letterSpacing: 1.2,
              textTransform: 'uppercase',
            }}
          >
            {group.label}
          </Typography>
        </Stack>

        <MarqueeRow items={group.items} reverse={groupIndex % 2 === 1} speed={15} />
      </Box>
    </motion.div>
  )
}

export function SkillsSection() {
  return (
    <Box
      id="skills"
      sx={{
        scrollMarginTop: 90,
        py: { xs: 6, md: 8 },
      }}
    >
      <Container>
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
              <Typography variant="h4">Technical Skills</Typography>
            </Stack>
            <Typography color="text.secondary" sx={{ ml: 3.25 }}>
              Tools and technologies I work with.
            </Typography>
          </Stack>
        </motion.div>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
          {groups.map((group, i) => (
            <SkillGroup key={group.label} group={group} groupIndex={i} />
          ))}

          {/* Problem Solving */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Box
              sx={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: 4,
                p: 3,
              }}
            >
              <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', color: 'rgba(255,255,255,0.5)' }}>
                  <FaRobot size={16} />
                </Box>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 700,
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: '0.75rem',
                    letterSpacing: 1.2,
                    textTransform: 'uppercase',
                  }}
                >
                  Problem Solving
                </Typography>
              </Stack>
              <Stack spacing={1.25}>
                {profile.skills.problemSolving.map((x, i) => (
                  <motion.div
                    key={x}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                  >
                    <Stack direction="row" spacing={1.5} alignItems="flex-start">
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
                        {x}
                      </Typography>
                    </Stack>
                  </motion.div>
                ))}
              </Stack>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  )
}
