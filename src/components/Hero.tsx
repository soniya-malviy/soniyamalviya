import { Canvas } from '@react-three/fiber'
import { Float, Points, PointMaterial, Stars } from '@react-three/drei'
import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import * as THREE from 'three'
import { useMemo } from 'react'

function GlowPoints() {
  const positions = useMemo(() => {
    const count = 1200
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = THREE.MathUtils.randFloat(0.8, 2.4)
      const theta = THREE.MathUtils.randFloat(0, Math.PI * 2)
      const y = THREE.MathUtils.randFloatSpread(1.4)
      arr[i * 3 + 0] = Math.cos(theta) * r
      arr[i * 3 + 1] = y
      arr[i * 3 + 2] = Math.sin(theta) * r
    }
    return arr
  }, [])

  return (
    <Float speed={0.9} rotationIntensity={0.3} floatIntensity={0.6}>
      <Points positions={positions} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#8B5CF6"
          size={0.012}
          sizeAttenuation
          depthWrite={false}
          opacity={0.85}
        />
      </Points>
    </Float>
  )
}

export function Hero() {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0.9,
        }}
      >
        <Canvas camera={{ position: [0, 0, 2.8], fov: 60 }}>
          <ambientLight intensity={0.6} />
          <pointLight position={[3, 2, 3]} intensity={1.2} />
          <Stars radius={60} depth={50} count={1200} factor={2.6} saturation={0} fade speed={1} />
          <GlowPoints />
        </Canvas>
      </Box>

      <Container sx={{ position: 'relative', py: { xs: 9, md: 12 } }}>
        <Stack spacing={2.25} sx={{ maxWidth: 840 }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: 42, sm: 56, md: 70 },
                lineHeight: 1.05,
              }}
            >
              {profile.name}
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <Typography color="text.secondary" sx={{ fontSize: { xs: 16, md: 18 } }}>
              {profile.headline}
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.14 }}
          >
            <Stack direction="row" spacing={1.25} sx={{ flexWrap: 'wrap', rowGap: 1 }}>
              <Button
                variant="contained"
                color="primary"
                href="#projects"
                sx={{ textTransform: 'none' }}
              >
                View projects
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                href="#contact"
                sx={{ textTransform: 'none' }}
              >
                Contact
              </Button>
            </Stack>
          </motion.div>
        </Stack>
      </Container>
    </Box>
  )
}

